<template>
    <div class="topic">
        <div v-if="!title" class="topic_title">
            <h1 class="title">今日话题</h1>
            <a >历史话题></a>
        </div>
        <div class="topic_container">
            <div class="topic_content" >
                <div class="topic_info" @click="$router.push({name:'topicList',query: {title: topicInfo.topic}})">
                    <h1 class="title">#{{topicInfo.topic}}</h1>
                </div>
                <a @click="$router.push({name:'publishDynamic',params: {title: topicInfo.topic}})" class="reply">参与话题</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {getTodayTopic} from "../../service/api";

    export default {
        name: "Topic",
        props:{
            title:Boolean
        },
        data(){
            return {
                topicInfo: {}
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getTodayTopic();
                if (result.success) {
                    this.topicInfo = result.data;
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    /*今日话题*/
    .topic{
        width: 100%;
        /*background: #999999;*/
        /*margin-bottom: 1rem;*/
    }
    .topic .topic_title{
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin: 10px 10px 5px 10px;
        height: 30px;
        line-height: 30px;
    }
    .topic .topic_title .title{
        font-size: 20px;
    }
    .topic .topic_container{
        padding: 1rem 2rem;
    }
    .topic .topic_container .topic_content{
        background: -webkit-linear-gradient(left, #f0ffde, #c8ff87, #629916);
        border-radius: 1rem;
        padding: 2rem;
        position: relative;
    }
    .topic .topic_container .topic_content .topic_info {
        /*background: antiquewhite;*/
        height: 6rem;
    }
    .topic .topic_container .topic_content .topic_info .title{
        font-size: 1.4rem;
        font-weight: bold;
        color: #3f0e6e;
    }
    .topic .topic_container .topic_content .reply{
        background: #eeeeee;
        font-size: 1.2rem;
        border-radius: 1.2rem;
        padding: 0.5rem 1rem;
        position: absolute;
        right: 0;
        bottom: 0;
        margin-right: 1rem;
        margin-bottom: 1rem;
        color: #60993c;
    }


</style>
