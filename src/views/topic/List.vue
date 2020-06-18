<template>
    <div class="top-bar">
        <van-nav-bar
                title="参与话题"
                left-arrow
                fixed
                border
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <!--今日话题-->
        <Topic :title="true"/>
        <!--动态列表-->
        <love-dynamic v-for="(dynamic,index) in dynamicList" :dynamicInfo="dynamic" :key="index" />
    </div>
</template>

<script>
    import Topic from "../../components/topic/Topic";
    import {getTitleDynamicPage} from "../../service/api/index"
    import LoveDynamic from "../../components/dynamic/LoveDynamic";
    export default {
        name: "List",
        components: {LoveDynamic, Topic},
        data(){
            return {
                dynamicList:[],
                title:''
            }
        },
        created(){
            this.title = this.$route.query.title;
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getTitleDynamicPage(this.title);
                if (result.success){
                    if (result.data) {
                        this.dynamicList = result.data.list;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
