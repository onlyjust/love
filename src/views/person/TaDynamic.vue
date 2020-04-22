<template>
    <div>
        <love-dynamic v-for="(dynamic,index) in dynamicList" :dynamicInfo="dynamic" :key="index"/>
    </div>
</template>

<script>
    import LoveDynamic from "../../components/dynamic/LoveDynamic";
    import {getTaDynamicPage} from '../../service/api';

    export default {
        name: "TaDynamic",
        components: {LoveDynamic},
        data(){
            return{
                dynamicList:[]
            }
        },
        created() {
            this.datingId = this.$route.params.datingId;
            console.log("ta 的动态",this.datingId);
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getTaDynamicPage(this.datingId,1,20);
                if (result.success){
                    this.dynamicList = result.data.list;
                }
            }
        }
    }
</script>

<style scoped>

</style>
