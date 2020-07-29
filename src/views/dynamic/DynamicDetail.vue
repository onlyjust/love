<template>
    <div id="dynamicDetail">
        <!--动态-->
        <love-dynamic :dynamicInfo="dynamicInfo" :isDetail="true"/>
        <!--动态评论-->
        <love-dynamic-comment :Event="Event" :dynamicCommentList="dynamicInfo.dynamicCommentList"/>
        <!--动态回复-->
        <love-reply-dynamic :Event="Event" @reloadData="initData" :dynamicId="dynamicInfo.id" />
    </div>
</template>

<script>

    import LoveDynamic from '../../components/dynamic/LoveDynamic';
    import LoveDynamicComment from '../../components/dynamic/LoveDynamicComment';
    import LoveReplyDynamic from './../../components/dynamic/LoveReplyDynamic';

    import {getDynamicInfo} from './../../service/api/index';
    import VueReport from "../../components/dynamic/sendReplay";
    import LoveReply from "../../components/dynamic/LoveReply";
    import Vue from "vue";

    const Event = new Vue();

    export default {
        name: "DynamicDetail",
        components:{
            LoveReply,
            VueReport,
            LoveDynamicComment,
            LoveDynamic,
            LoveReplyDynamic
        },
        data(){
            return {
                dynamicId:'',
                dynamicInfo: {},
                Event: Event
            }
        },
        created() {
            this.dynamicId=this.$route.params.id;
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getDynamicInfo(this.dynamicId);
                if (result.success){
                    this.dynamicInfo = result.data;
                }
            }
        }
    }
</script>

<style scoped>



</style>
