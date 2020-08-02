<template>
    <div class="soul_question" v-if="questionList.length > 0">
        <div class="subject">
            <h1>灵魂拷问区</h1>
        </div>
        <div class="question">
            <div v-for="question in questionList">
                <div class="question_wrap" v-if="question.answer" >
                    <div class="question_container">
                        <h2 class="question_title">Q：{{question.question}}</h2>
                    </div>
                    <div class="answer_container">
                        <p class="answer" v-if="question.answer">A：{{question.answer}}</p>
                        <p class="answer" v-else>A：您还没填写{{question.question}}请您尽快填写信息</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getTaSoulQuestionAnswer} from "../../../service/api";

    export default {
        name: "UserSoulQuestion",
        props:{
            datingId: {
                type: Number,
                default: () => 0
            }
        },
        data() {
            return {
                questionList:[]
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getTaSoulQuestionAnswer(this.datingId);
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
