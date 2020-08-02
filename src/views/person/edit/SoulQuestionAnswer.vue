<template>
    <div id="questionAnswer" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="灵魂问题回答"
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
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" @click="onSubmit">
                    提交
                </van-button>
            </div>
    </div>
</template>

<script>

    import {getDatingQuestionAnswer, updateDatingQuestionAnswer} from './../../../service/api/index';
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
                let result = await updateDatingQuestionAnswer(this.questionId, this.answer, null);
                // this.$toast(result.message);
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
                    }
                }
            },

        }
    }
</script>

<style lang="less" scoped>

</style>
