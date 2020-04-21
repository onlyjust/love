<template>
    <!--走心问答-->
    <div class="question">
        <h1 class="subject">关于我</h1>
        <div class="question_container" v-for="questionAnswer in questionAnswerList">
            <h2 class="question_title">{{questionAnswer.question}}</h2>
            <p class="answer">{{questionAnswer.answer}}</p>
            <img v-for="(image,idx) in questionAnswer.answerPhotoList" :key="idx" :src="image.filePath">
        </div>
    </div>

</template>

<script>
    export default {
        name: "UserQuestion",
        props:{
            questionAnswerList:Array
        }
    }
</script>

<style scoped>

    /*走心问答*/
    .question .question_container{
        padding: 0 2rem;
    }
    .question .question_container .question_title{
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1rem 0;
    }
    .question .question_container .answer{
        font-size: 1.2rem;
        line-height: 2rem;
        margin: 1rem auto;
    }
    .question .question_container img{
        width: 100%;
        margin: 0.25rem auto;
    }



</style>
