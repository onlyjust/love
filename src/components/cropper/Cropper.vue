<template>
    <div>
        <van-uploader v-model="files"
                      multiple
                      :max-count="3"
                      :after-read="afterReadFile"
                      :before-read="beforeReadFile"
                      :before-delete="deleteFile"
                      image-fit="cover"
                      preview-size="80px" />

        <van-popup v-model="cropperShow"
                   :close-on-click-overlay="false">
            <div class="cut">
                <vue-cropper ref="cropper"
                             :img="cropperImg"
                             :outputSize="option.size"
                             :outputType="option.outputType"
                             :autoCropWidth="autoCropWidth"
                             :autoCropHeight="autoCropHeight"
                             autoCrop
                             :fixed="fixed"
                             :fixedNumber="fixedNumber"
                             full
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
    import { uploadFile, deleteFile } from "@/service/api/index";

    export default {
        name: "Cropper",
        components: {
            VueCropper
        },
        props: {
            fileList: {
                type: Array,
                default: () => []
            },
            relationalId: {
                type: [String, Number],
                default: ""
            },
            relationalName: {
                type: String,
                default: ""
            },
            fixed: {
                type: Boolean,
                default: true
            },
            fixedNumber: {
                type: Array,
                default: () => [1,1]
            },
            cropWidth: {
                type:Number,
                default: 1
            },
            cropHeight: {
                type:Number,
                default: 1
            }
        },
        data() {
            return {
                fileIdList: [],
                cropperShow: false,
                cropperImg: "",
                file: null,
                option: {
                    img: "",
                    size: 1,
                    outputType: "jpeg",
                    fixedNumber: [1, 1]
                },
                autoCropWidth:100,
                autoCropHeight:100,
            };
        },
        mounted(){
            let screenWidth = document.body.clientWidth;
            let screenHeight = document.body.clientHeight;
            window.onresize = () => {
                return (() => {
                    screenWidth = document.body.clientWidth;
                    screenHeight = document.body.clientHeight;
                })();
            };
            this.autoCropWidth = screenWidth * this.cropWidth;
            this.autoCropHeight = screenWidth  * this.cropHeight;
        },
        computed: {
            files: {
                get() {
                    return this.fileList || [];
                },
                set(newVal) {
                    return newVal;
                }
            }
        },
        created() {},
        methods: {
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
            async beforeReadFile(file) {
                // console.log("beforeReadFile", file);
                this.file = file;
                let headerImage = await fileUtils.imgPreview(file);
                this.cropperImg = headerImage;
                // console.log("beforeReadFile", this.cropperImg);
                this.cropperShow = true;

                return false;
            },
            async afterReadFile(file) {
                return false;
            },
            async onUpload(headerImage, self) {
                let formData = new FormData();
                let tmpfile = fileUtils.dataURLtoFile(headerImage, self.file);
                formData.append("file", tmpfile);
                formData.append("fileName", self.file.name);
                formData.append("relationalId", self.relationalId);
                formData.append("relationalName", self.relationalName);
                let result = await uploadFile(formData);
                if (result.success) {
                    let { data } = result;
                    let tmp = {
                        url: data.filePath,
                        id: data.id
                    };
                    self.files.push(tmp);
                    if (!self.relationalId) {
                        self.fileIdList.push(data.id);
                        self.$emit("on-success", self.fileIdList);
                    }
                }
            },
            onDelete(file) {
                let index = this.files.findIndex(item => item.id === file.id);
                if (index !== -1) {
                    this.files.splice(index, 1);
                }
            },
            async deleteFile(file) {
                let result = await deleteFile(file.id);
                if (result.success) {
                    // 本地删除
                    this.onDelete(file);
                    // 删除
                    if (!this.relationalId) {
                        this.fileIdList.forEach((item, index) => {
                            if (item == file.id) {
                                this.fileIdList.splice(index, 1);
                            }
                        });
                    }
                    return true;
                } else {
                    return false;
                }
            }
        }
    };
</script>

<style lang="less" scoped>
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
