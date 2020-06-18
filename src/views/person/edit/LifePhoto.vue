<template>
    <div id="lifePhoto" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="生活照"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>

        <!--<div class="life-title"></div>-->
        <van-cell-group title="上传生活照" style="padding: 1rem">
            <van-uploader
                    v-model="fileList"
                    multiple
                    :max-count="12"
                    :after-read="afterReadFile"
                    :before-read="beforeReadFile"
                    :before-delete="deleteFile"
            />
        </van-cell-group>

    </div>
</template>

<script>
    import {uploadFile, deleteFile, getLifePhotoList} from './../../../service/api/index';

    import fileUtils from './../../../plugins/file';

    export default {
        name: "LifePhoto",
        data() {
            return {
                relationalId:'',
                fileList: [],
            }
        },
        created() {
            this.relationalId = this.$route.params.datingId;
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getLifePhotoList();
                if (result.success){
                    if(result.data){
                        this.fileList = result.data.map(item => {
                            let fileObj = {};
                            fileObj.url = item.filePath;
                            fileObj.id = item.id;
                            return fileObj;
                        })
                    }
                }
            },
            beforeReadFile(file){
                //console.log("beforeReadFile", file);
                return true;
            },
            async afterReadFile(file){
                file.status = 'uploading';
                file.message = '上传中...';
                //console.log("afterReadFile",file);
                let headerImage = fileUtils.imgPreview(file.file);
                let formData = new FormData();
                // formData.append("file", file.file);
                console.log("headerImage",headerImage);
                formData.append("file", fileUtils.dataURLtoFile(headerImage));
                formData.append("fileName", file.file.name);
                formData.append("relationalId", this.relationalId);
                formData.append("relationalName", 'DATING_LIFE_PHOTO');
                let result = await uploadFile(formData);
                //console.log("上传结果", result);
                if (result.success){
                    file.status = 'done';
                    file.message = '上传成功';
                    file.id = result.data.id;
                    return true;
                }
                return false;
            },
            async deleteFile(file){
                //console.log("deleteFile", file);
                let result = await deleteFile(file.id);
                if (result.success){
                    return true;
                } else {
                    return false;
                }
            },

        }
    }
</script>

<style scoped>
    .life-title{
        height: 1rem;
    }
</style>
