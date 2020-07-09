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
                <!--<van-uploader
                        v-model="fileList"
                        multiple
                        :max-count="3"
                        :after-read="afterReadFile"
                        :before-read="beforeReadFile"
                        :before-delete="deleteFile"
                        image-fit="cover"
                        preview-size="80px"
                />-->
                <cropper :fileList="fileList"
                         :relationalId="relationalId"
                         :fixed="false"
                         :cropHeight = "0.8"
                         relationalName="QUESTION_ANSWER_PHOTO"
                         @on-success="onCropSuccess" ></cropper>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" @click="onSubmit">
                    提交
                </van-button>
            </div>
    </div>
</template>

<script>

    import {getDatingQuestionAnswer, updateDatingQuestionAnswer, uploadFile, deleteFile} from './../../../service/api/index';
    import Cropper from "../../../components/cropper/Cropper";

    export default {
        name: "QuestionAnswer",
        components:{
            Cropper,
        },
        data(){
          return{
              relationalId:'',
              questionId:'',
              question:'',
              answer:'',
              fileList:[],
              fileIdList:[],
          }
        },
        created() {
            this.questionId = this.$route.params.id;
            this.question = this.$route.params.question;
            this.initData();
        },
        methods:{
            // 提交
            async onSubmit(){
                // values.questionId = this.questionId;
                // values.fileIdList = this.fileIdList;
                // console.log("values",values);
                let result = await updateDatingQuestionAnswer(this.questionId, this.answer, this.fileIdList);
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

            onCropSuccess(val){
                console.log('onCropSuccess'),
                    this.fileIdList = val
            },

        }
    }
</script>

<style lang="less" scoped>

</style>
