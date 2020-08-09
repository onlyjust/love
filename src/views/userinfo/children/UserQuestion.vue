<template>
    <!--走心问答-->
    <div class="question" v-if="questionAnswerList !== undefined && questionAnswerList.length>0">
        <h1 class="subject">关于我</h1>
        <div class="question_container" v-for="(item,index) in questionAnswerList" :key="index">
            <div v-if="item.answer">
                <div class="subject">
                    <h2 class="subject_title question_title">{{item.question}}</h2>
                </div>
                <div class="answer_container">
                    <p class="answer">{{item.answer}}</p>
                    <img v-for="(image,idx) in item.answerPhotoList" :key="idx" :src="image.filePath">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import fileUtils from "@/plugins/file";
    export default {
        name: "UserQuestion",
        props:{
            questionAnswerList:Array
        },
        created() {

        },
        mounted(){
            this.imageConvert();
        },
        methods:{
            imageConvert(){
               /* console.log("this.questionAnswerList  ",this.questionAnswerList);
                if (this.questionAnswerList) {
                    console.log("this.questionAnswerList  ",this.questionAnswerList);
                    this.questionAnswerList.forEach((question) => {
                        console.log("question  ",question);
                        question.answerPhotoList.forEach(item => {
                            console.log("file path ",item.filePath)
                            // fileUtils.imageUrlToBase64()
                        })

                    })
                }*/

            }
        }
    }
</script>

<style scoped>
    /*走心问答*/
    .question {
        /*margin-bottom: 50px;*/
    }
    .question .question_container{

    }
    .question .question_container .question_title{
        /*text-align: center;
        font-size: 1.8rem;
        font-weight: bold;
        color: #4773c4;
        background-color: #e8e3d0;
        border-radius: 1rem;*/

        margin: 1rem 0;
        /*margin-left: 2rem;*/
        /*margin-right: 2rem;*/
        font-size: 16px;
        font-weight: bold;
        color: #4773c4;
        border-left: #18a38d solid 4px;
        padding-left: 5px;
    }
    .question .answer_container{
        padding: 0 2rem;
    }
    .question .answer_container .answer{
        /*font-size: 1.5rem;
        line-height: 2.5rem;
        margin: 1rem auto;
        white-space: pre-wrap;
        color: #323233;*/

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
