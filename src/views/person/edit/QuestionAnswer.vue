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

    import {getDatingQuestionAnswer, updateDatingQuestionAnswer} from './../../../service/api/index';

    export default {
        name: "QuestionAnswer",
        data(){
          return{
              questionId:'',
              question:'',
              answer:'',
              fileList:[]
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
                console.log("values",values);
                let result = await updateDatingQuestionAnswer(values.questionId, values.answer);
                this.$toast(result.message);
                if (result.success){
                    this.$router.back();
                }
            },
            // 初始化数据
            async initData(){
                let result = await getDatingQuestionAnswer(this.questionId);
                if (result.success){
                    if (result.data){
                        this.answer = result.data.answer
                        this.fileList = result.data.answerPhotoList.map(item=>item.filePath);
                        console.log('fileList',this.fileList)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
