<template>
    <div class="soul_question">
        <div class="subject">
            <h1>灵魂拷问区</h1>
            <!--<a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>-->
        </div>
        <div class="question">
            <div class="question_wrap" v-for="question in questionList">
                <div class="question_container">
                    <h2 class="question_title">Q：{{question.question}}</h2>
                    <a @click="$router.push({name:'soulQuestionAnswer',params:{id:question.questionId,question:question.question}})"><i class="iconfont iconbianji"></i></a>
                </div>
                <div class="answer_container">
                    <p class="answer" v-if="question.answer">A：{{question.answer}}</p>
                    <p class="answer" v-else>A：请说说{{question.question}}</p>
                </div>
            </div>
            <!--<div class="question_wrap">
                <div class="question_container">
                    <h2 class="question_title">Q：我为什么会单身？</h2>
                    <a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>
                </div>
                <div class="answer_container">
                    <p class="answer">A：圈子小，不善于社交</p>
                </div>
            </div>
            <div class="question_wrap">
                <div class="question_container">
                    <h2 class="question_title">Q：是什么让我想要脱单？</h2>
                    <a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>
                </div>
                <div class="answer_container">
                    <p class="answer">A：年纪大了？</p>
                </div>
            </div>
            <div class="question_wrap">
                <div class="question_container">
                    <h2 class=" question_title">Q：如果遇到TA,我会主动吗？</h2>
                    <a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>
                </div>
                <div class="answer_container">
                    <p class="answer">A：圈子小，不善于社交</p>
                </div>
            </div>
            <div class="question_wrap">
                <div class="question_container">
                    <h2 class=" question_title">Q：我期待什么样的爱情？</h2>
                    <a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>
                </div>
                <div class="answer_container">
                    <p class="answer">A：人生bai可以爱很多人，却很难一生只爱一个人，我期du待的zhi爱情就是余生都是你，从青春年少到白发苍苍。
                        爱情的样子就是世间所有的一切都不如你，只有你才是我生命里的唯一。当我凝视你的眼睛，
                        当我听到你的声音，当我闻到你秀发上的淡淡清香，当我感受到我剧烈的心跳，我会庆幸一辈子很长，幸好有你在我身边。</p>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
    import {getSoulQuestionAnswer} from "../../service/api";

    export default {
        name: "SoulQuestion",
        data(){
            return {
                questionList:[]
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getSoulQuestionAnswer();
                if (result.success){
                    this.questionList = result.data;
                }
            }
        }
    }
</script>

<style scoped>
    .question {
        margin: 0 2rem;
    }
    .question .question_wrap {
        border: #e8989a dashed 1px;
        padding: 5px 10px;
        border-radius: 10px;
        margin-bottom: 5px;
    }
    .question .question_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .question .question_container .question_title{
        /*text-align: center;*/
        margin: 1rem 0;
        font-size: 16px;
        font-weight: bold;
        color: #ee6d89;
        /*border-left: #18a38d solid 4px;*/
        /*padding-left: 5px;*/
    }
    .question .answer_container{
        font-size: 13px;
        line-height: 26px;
        margin-bottom: 1rem;
        white-space: pre-wrap;
        color: #8b8b8b;
    }
</style>
