<template>
    <div id="questionAnswer" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="走心问题回答"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <van-form @submit="onSubmit">
            <van-cell-group>
                <van-field name="question" v-model="question" disabled />
                <van-field
                        name="answer"
                        v-model="answer"
                        rows="6"
                        autosize
                        type="textarea"
                        placeholder="请回答问题"
                />
            </van-cell-group>
            <van-cell-group title="上传回答问题相关图片" style="padding: 1rem">
                <van-uploader
                        v-model="fileList"
                        multiple
                        :max-count="3"
                        :after-read="afterReadFile"
                        :before-read="beforeReadFile"
                        :before-delete="deleteFile"
                        image-fit="cover"
                        preview-size="80px"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>

    import file from './../../../plugins/file';

    import {getDatingQuestionAnswer, updateDatingQuestionAnswer, uploadFile, deleteFile} from './../../../service/api/index';

    export default {
        name: "QuestionAnswer",
        data(){
          return{
              relationalId:'',
              questionId:'',
              question:'',
              answer:'',
              fileList:[],
              fileIdList:[]
          }
        },
        created() {
            this.questionId = this.$route.params.id;
            this.question = this.$route.params.question;
            this.initData();
        },
        methods:{
            // 提交
            async onSubmit(values){
                values.questionId = this.questionId;
                values.fileIdList = this.fileIdList;
                // console.log("values",values);
                let result = await updateDatingQuestionAnswer(values.questionId, values.answer, values.fileIdList);
                this.$toast(result.message);
                if (result.success){
                    this.$router.back();
                }
            },
            // 初始化数据
            async initData(){
                let result = await getDatingQuestionAnswer(this.questionId);
                // console.log("初始化数据",result)
                if (result.success){
                    if (result.data){
                        this.answer = result.data.answer;
                        this.relationalId = result.data.id;
                        this.fileList = result.data.answerPhotoList.map(item=>{
                            let fileObj = {};
                            fileObj.url = item.filePath;
                            fileObj.id = item.id;
                            return fileObj;
                        });
                        console.log('fileList',this.fileList)
                    }
                }
            },

            beforeReadFile(file){
                console.log("beforeReadFile", file);
                return true;
            },
            async afterReadFile(file){
                file.status = 'uploading';
                file.message = '上传中...';
                // console.log("afterReadFile",file);
                let formData = new FormData();
                formData.append("file", file.file);
                formData.append("fileName", file.file.name);
                formData.append("relationalId", this.relationalId);
                formData.append("relationalName", 'QUESTION_ANSWER_PHOTO');
                let result = await uploadFile(formData);
                // console.log("上传结果", result);
                if (result.success){
                    file.status = 'done';
                    file.message = '上传成功';
                    file.id = result.data.id;
                    if (!this.relationalId){
                        this.fileIdList.push(file.id);
                    }
                    return true;
                }
                return false;
            },
            async deleteFile(file){
                // console.log("deleteFile", file);
                let result = await deleteFile(file.id);
                if (result.success){
                    // 删除
                    if (!this.relationalId){
                        this.fileIdList.forEach((item,index)=>{
                            if (item == file.id){
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
