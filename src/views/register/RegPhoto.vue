<template>
    <div class="profilePhoto">
        <!--照片区-->
        <div class="photo-box">
            <van-uploader :before-read="beforeRead" >
                <div v-if="profilePhoto">
                    <van-image width="25rem" height="25rem" fit="cover" radius="5" :src="profilePhoto"/>
                </div>
                <div v-else>
                    <img class="photo" src="@/images/user/moren.jpg"/>
                </div>

            </van-uploader>

        </div>

        <!--裁剪-->
        <van-popup v-model="cropperShow"
                   :close-on-click-overlay="false">
            <div class="cut">
                <vue-cropper ref="cropper"
                             :img="cropperImg"
                             :outputSize="option.size"
                             :outputType="option.outputType"
                             :autoCropWidth="option.autoCropWidth"
                             :autoCropHeight="option.autoCropHeight"
                             autoCrop
                             fixed
                             :fixedNumber="option.fixedNumber"
                             full
                             high
                             centerBox
                ></vue-cropper>
                <div class="cut-footer">
                    <van-button class="cropperCancel"
                                color="#4bb0ff"
                                @click="cancelCropper">取消</van-button>
                    <van-button class="rotateLeft"
                                color="#4bb0ff"
                                @click="rotateLeft">↺</van-button>
                    <van-button class="rotateRight"
                                color="#4bb0ff"
                                @click="rotateRight">↻</van-button>
                    <van-button class="cropperConfirm"
                                color="#4bb0ff"
                                @click="cutCropper">确认</van-button>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>

    import fileUtils from "@/plugins/file";
    import { VueCropper } from "vue-cropper";
    import { uploadAvatar, deleteFile } from "@/service/api/index";

    export default {
        name: "RegPhoto",
        props:{
            datingBasic:Object
        },
        components: {
            VueCropper
        },
        data(){
            return {
                cropperShow: false,
                profilePhoto: "",
                cropperImg: "",
                file: null,
                option: {
                    img: "",
                    size: 1,
                    outputType: "jpeg",
                    fixedNumber: [1,1],
                    autoCropWidth:200,
                    autoCropHeight:200,
                },

            }
        },
        created(){
            if (this.datingBasic){
                this.profilePhoto = this.datingBasic.personalPhoto;
            }
        },
        mounted(){
            let screenWidth = document.body.clientWidth;
            this.option.autoCropWidth = screenWidth;
            this.option.autoCropHeight = screenWidth;
        },
        methods:{
            cancelCropper() {
                this.cropperShow = false;
            },
            //坐旋转
            rotateLeft() {
                console.log('rotateLeft')
                this.$refs.cropper.rotateLeft();
            },
            //右旋转
            rotateRight() {
                console.log('rotateRight')
                this.$refs.cropper.rotateRight();
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
            previewImg(currentImg) {
                wx.previewImage({
                    current: currentImg, // 当前显示图片的http链接
                    urls: [currentImg] // 需要预览的图片http链接列表
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
        margin-top: 50px;
    }
    .photo {
        width: 25rem;
        height: 25rem;
        border-radius: 5px;
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
        .cut-footer {
            width: 100%;
            position: fixed;
            display: flex;
            bottom: 0;
            left: 0;
            justify-content: space-around;
            background-color: #4bb0ff;
        }
        .vue-cropper {
            background: black
        }
    }
</style>
