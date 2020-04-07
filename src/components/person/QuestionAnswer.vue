<template>
    <div class="question">
        <div class="subject">
            <h1>走心问答</h1>
            <a @click="$router.push('/person/question')"><i class="iconfont iconbianji"></i></a>
        </div>
        <div class="question_container" v-for="(item,index) in questionAnswerList" :key="index">
            <div class="subject">
                <h2 class="subject_title question_title">{{item.question}}</h2>
                <!--<a class="subject_edit" >编辑</a>-->
            </div>
            <div class="answer_container">
                <p class="answer">
                    {{item.answer}}
                </p>
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
    .question .question_container{

    }
    .question .question_container .question_title{
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .question .answer_container{
        padding: 0 2rem;
    }
    .question .answer_container .answer{
        font-size: 1.2rem;
        line-height: 2rem;
        margin: 1rem auto;
    }
    .question .answer_container img{
        width: 100%;
        margin: 0.25rem auto;
    }
</style>
