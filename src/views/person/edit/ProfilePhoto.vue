<template>
    <div  class="profilePhoto top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="个人头像"
                left-arrow
                :fixed=true
                :border=true
                right-text="…"
                @click-left="$router.go(-1)"
                @click-right="onClickRight"
        ></van-nav-bar>
        <div class="photo-box">
            <van-image width="25rem" height="25rem" fit="cover" radius="5" :src="profilePhoto"  @click="Preview_img(profilePhoto)"/>
        </div>
        <van-action-sheet
                v-model="showUploadSheet"
                cancel-text="取消"
                close-on-click-action
                @cancel="onCancel"
        >
            <div class="uploadSheet" @click="selectUpload">
                <van-uploader :before-read="beforeRead" >
                    <p>上传图片</p>
                </van-uploader>
            </div>
        </van-action-sheet>


        <van-popup v-model="cropperShow"
                   :close-on-click-overlay="false">
            <div class="cut">
                <vue-cropper ref="cropper"
                             :img="cropperImg"
                             :outputSize="option.size"
                             :outputType="option.outputType"
                             autoCrop
                             fixed
                             :fixedNumber="option.fixedNumber"
                             full
                             centerBox
                ></vue-cropper>
                <van-button class="cropperCancel"
                            plain
                            type="primary"
                            @click="cancelCropper">取消</van-button>
                <van-button class="cropperConfirm"
                            plain
                            type="info"
                            @click="cutCropper">确认</van-button>
            </div>
        </van-popup>

    </div>
</template>

<script>
    import {ImagePreview} from 'vant';//引入预览

    import fileUtils from "@/plugins/file";
    import { VueCropper } from "vue-cropper";
    import { uploadAvatar, deleteFile } from "@/service/api/index";

    export default {
        name: "ProfilePhoto",
        components: {
            VueCropper
        },
        data(){
            return {
                showUploadSheet: false,
                cropperShow: false,
                profilePhoto: "",
                cropperImg: "",
                file: null,
                option: {
                    img: "",
                    size: 1,
                    outputType: "jpeg",
                    fixedNumber: [1, 1]
                }
            }
        },
        created(){
            this.profilePhoto = this.$route.query.url;
        },
        methods:{
            onClickRight() {
                this.showUploadSheet = true
            },
            selectUpload(){
                this.showUploadSheet = false;
            },
            cancelCropper() {
                this.cropperShow = false;
            },
            cutCropper() {
                // 获取截图的base64 数据
                let self = this;
                this.$refs.cropper.getCropData(data => {
                    self.cropperShow = false;
                    this.onUpload(data, self);
                });
            },
            async beforeRead(file) {
                this.showUploadSheet = false;
                this.file = file;
                let headerImage = await fileUtils.imgPreview(file);
                this.cropperImg = headerImage;
                // console.log("beforeReadFile", this.cropperImg);
                this.cropperShow = true;
                // console.log(file);
                return false;
            },
            async onUpload(headerImage, self) {
                let formData = new FormData();
                let tmpfile = fileUtils.dataURLtoFile(headerImage, self.file);
                formData.append("file", tmpfile);
                formData.append("fileName", self.file.name);
                let result = await uploadAvatar(formData);
                if (result.success) {
                    // this.$toast(result.message);
                    this.profilePhoto = headerImage;
                } else {
                    this.$toast(result.message);
                }
            },
            onCancel() {
                this.showUploadSheet = false;
            },
            Preview_img(img){
                ImagePreview({
                    images: [
                        img
                    ],
                    closeable: true,
                });
            }

        }
    }
</script>

<style lang="less" scoped>

    .profilePhoto {
        width: 100%;
        height: 100%;
        display: flex;

        justify-content: center;
        align-items: center;
    }
    .photo-box {
        text-align: center;
    }
    .uploadSheet {
        text-align: center;
        font-size: 16px;
        line-height: 50px;
    }
    .uploadSheet p{
        margin: 0 15rem;
    }

    .cut {
        width: 100vw;
        height: 100vh;
        .cropperCancel {
            position: fixed;
            bottom: 0;
            left: 0;
            margin-left: 3rem;
        }
        .cropperConfirm {
            position: fixed;
            bottom: 0;
            right: 0;
            margin-right: 3rem;
        }
    }
</style>
