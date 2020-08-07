<template>
    <div class="question">
        <div class="subject">
            <h1>走心问答</h1>
            <a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>
        </div>
        <div class="question_container" v-for="(item,index) in questionAnswerList" :key="index">
            <div class="">
                <h2 class=" question_title">{{item.question}}</h2>
                <!--<a class="subject_edit" >编辑</a>-->
            </div>
            <div class="answer_container">
                <p class="answer">{{item.answer}}</p>
                <img v-for="(image,idx) in item.answerPhotoList" :key="idx" :src="image.filePath">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuestionAnswer",
        props:{
            questionAnswerList:Array
        }
    }
</script>

<style scoped>

    /*走心问答*/
    .question {
        /*margin-bottom: 5rem;*/
    }
    .question .question_container{

    }
    .question .question_container .question_title{
        /*text-align: center;*/
        margin: 1rem 2rem;
        /*margin-left: 2rem;*/
        /*margin-right: 2rem;*/
        font-size: 16px;
        font-weight: bold;
        color: #4773c4;
        border-left: #18a38d solid 4px;
        padding-left: 5px;
        /*border-bottom: #1296db solid 2px;
        padding-bottom: 3px;
        display: inline-block;*/
    }

    .question .answer_container{
        padding: 0 2rem;
    }
    .question .answer_container .answer{
        font-size: 13px;
        line-height: 26px;
        margin: 1rem auto;
        white-space: pre-wrap;
        color: #999999;
    }
    .question .answer_container img{
        width: 100%;
        margin: 0.25rem auto;
    }
</style>
