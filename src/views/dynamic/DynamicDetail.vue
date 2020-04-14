<template>
    <div id="dynamicDetail">
        <!--动态-->
        <love-dynamic :dynamicInfo="dynamicInfo" :isDetail="true"/>
        <!--动态评论-->
        <love-dynamic-comment/>
    </div>
</template>

<script>

    import LoveDynamic from '../../components/dynamic/LoveDynamic';
    import LoveDynamicComment from '../../components/dynamic/LoveDynamicComment';

    import {getDynamicInfo} from './../../service/api/index';

    export default {
        name: "DynamicDetail",
        components:{
            LoveDynamicComment,
            LoveDynamic
        },
        data(){
            return {
                dynamicId:'',
                dynamicInfo: {}
            }
        },
        created() {
            this.dynamicId=this.$route.query.id;
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getDynamicInfo(this.dynamicId);
                if (result.success){
                    this.dynamicInfo = result.data;
                }
                console.log("result", result);
            }
        }
    }
</script>

<style scoped>



</style>
