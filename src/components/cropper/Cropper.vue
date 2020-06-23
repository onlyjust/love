<template>
    <div>
        <van-uploader v-model="fileList"
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
                             img="https://qn-qn-kibey-static-cdn.app-echo.com/goodboy-weixin.PNG"
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
                            type="primary">取消</van-button>
                <van-button class="cropperConfirm"
                            plain
                            type="info"
                            @click="cutCropper">确认</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import fileUtils from "@/plugins/file";
    import { uploadFile, deleteFile } from "@/service/api/index";
    import { VueCropper } from "vue-cropper";

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
                    fixedNumber: [1.2, 1]
                }
            };
        },
        created() {},
        methods: {
            cutCropper() {
                // 获取截图的base64 数据
                let self = this;
                this.$refs.cropper.getCropData(data => {
                    self.cropperShow = false;
                    this.onUpload(data, self);
                });
            },
            beforeReadFile(file) {
                console.log("beforeReadFile", file);
                this.file = file;
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
                    self.fileList.push(tmp);
                    if (!self.relationalId) {
                        self.fileIdList.push(data.id);
                        self.$emit('on-success', self.fileIdList)
                    }
                }
            },

            async deleteFile(file) {
                console.log('11111delete', file)
                let result = await deleteFile(file.id);
                if (result.success) {
                    // 删除
                    if (!this.relationalId) {
                        this.fileIdList.forEach((item, index) => {
                            if (item == file.id) {
                                this.fileIdList.splice(index, 1);
                                this.fileList.splice(index,1)
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

<style lang="less" scoped>
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
