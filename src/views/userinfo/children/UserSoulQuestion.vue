<template>
    <div class="soul_question" v-if="questionList.length > 0">
        <div class="question">
            <div class="title_wrap">
                <span class="title">灵魂拷问区</span>
            </div>
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
        props: {
            datingId: {
                type: Number,
                default: () => 0
            }
        },
        data() {
            return {
                questionList: []
            }
        },
        created() {
            this.initData();
        },
        methods: {
            async initData() {
                let result = await getTaSoulQuestionAnswer(this.datingId);
                if (result.success) {
                    this.questionList = result.data;
                }
            }
        }
    }
</script>

<style scoped>

    .soul_question {
    }

    .question {
        margin: 2rem 2rem;
        border: #e8989a dashed 1px;
        border-radius: 10px;
        padding: 1rem 0 2rem;
    }

    .question .title_wrap {
        text-align: center;
    }

    .question .title {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
        color: rgb(91, 156, 115);
        border-bottom: rgb(255, 244, 92) solid 5px;
        text-shadow: #55a532 1px 1px 1px;
        padding-bottom: 5px;
    }

    .question .question_wrap {
        /*padding: 5px 10px;*/
        margin-bottom: 5px;
        padding: 0 10px;
    }

    .question .question_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .question .question_container .question_title {
        margin: 1rem 0 0.5rem;
        font-size: 16px;
        font-weight: bold;
        color: #ee6d89;
    }

    .question .answer_container {
        font-size: 13px;
        line-height: 26px;
        white-space: pre-wrap;
        color: #666666;
        /*color: #8b8b8b;*/
        /*color: rgb(255, 255, 255);*/
    }

</style>
