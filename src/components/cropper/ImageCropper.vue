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

        <ImageClipper ref="clipper"
                      v-if="cropperShow"
                      :img="cropperImg"
                      :clipper-img-width="clipperImgWidth"
                      :clipper-img-height="clipperImgHeight"
                      @ok="cutCropper"
                      @cancel="cancelCropper"
        ></ImageClipper>

    </div>
</template>

<script>
    import fileUtils from "@/plugins/file/file";
    import { uploadFile, deleteFile } from "@/service/api/index";
    import ImageClipper from "./ImageClipper";

    export default {
        name: "ImageCropper",
        components: {
            ImageClipper
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
                default: () => [1, 1]
            }
        },
        data() {
            return {
                fileIdList: [],
                cropperShow: false,
                cropperImg: '',
                file: null,
                option: {
                    img: "",
                    size: 1,
                    outputType: "jpeg",
                    fixedNumber: [1, 1]
                }
            };
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
                console.log("rotateLeft");
                this.$refs.cropper.rotateLeft();
            },
            //右旋转
            rotateRight() {
                console.log("rotateRight");
                this.$refs.cropper.rotateRight();
            },
            cutCropper(data) {
                // 获取截图的base64 数据
                // let self = this;
                // this.$refs.cropper.getCropData(data => {
                //     self.cropperShow = false;
                //     this.onUpload(data, self);
                // });
                // console.log('cutCropper', data)
                // this.$refs.clipper.getBase64(data);
                this.cropperImg = data
                this.cropperShow = false;
                this.onUpload(data);
            },
            async beforeReadFile(file) {
                // console.log("beforeReadFile", file);
                this.file = file;
                console.log(this.file);
                let headerImage = await fileUtils.imgPreview(file);
                this.cropperImg = headerImage;
                // // console.log("beforeReadFile", this.cropperImg);
                this.cropperShow = true;

                return false;
            },
            async afterReadFile(file) {
                return false;
            },
            async onUpload(headerImage) {
                let formData = new FormData();
                let tmpfile = await fileUtils.dataURLtoFile(headerImage, this.file);
                formData.append("file", tmpfile);
                formData.append("fileName", tmpfile.name);
                formData.append("relationalId", this.relationalId);
                formData.append("relationalName", this.relationalName);
                let result = await uploadFile(formData);
                if (result.success) {
                    let { data } = result;
                    let tmp = {
                        url: data.filePath,
                        id: data.id
                    };
                    this.files.push(tmp);
                    if (!this.relationalId) {
                        this.fileIdList.push(data.id);
                        this.$emit("on-success", this.fileIdList);
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
    }
</script>

<style scoped>

</style>
