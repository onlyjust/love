<template>
    <div id="question" class="top-bar">
        <van-nav-bar
                title="走心问题"
                left-arrow
                fixed
                border
                @click-left="$router.go(-1)"
        ></van-nav-bar>

        <van-cell-group style="margin-top: 0.4rem">
            <van-cell v-for="question in questionList" :title="question.question" is-link :to="{name:'questionAnswer',params:{id:question.id,question:question.question}}"/>
            <!--<van-cell title="你觉得最浪漫的事" is-link></van-cell>-->
            <!--<van-cell title="遇见TA最想做什么" is-link></van-cell>-->
        </van-cell-group>
    </div>
</template>

<script>
    import {getDatingQuestion} from './../../../service/api/index';

    export default {
        name: "Question",
        data(){
            return{
                questionList:[]
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getDatingQuestion(0);
                console.log('result',result)
                if (result.success) {
                    this.questionList = result.data;
                }

            }
        }
    }
</script>

<style scoped>

</style>
