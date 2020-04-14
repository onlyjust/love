<template>
    <div id="my-dynamic">
        <!--动态-->
        <love-dynamic v-for="(dynamic,index) in dynamicList" :dynamicInfo="dynamic" :key="index" />


        <div class="publish-dynamic" @click="$router.push('/publish/dynamic')">
            <span class="iconfont iconfabu4-copy"></span>
        </div>

    </div>
</template>

<script>
    import LoveDynamic from '../../components/dynamic/LoveDynamic';

    import {getPersonalDynamicPage} from './../../service/api/index';

    export default {
        name: "MyDynamic",
        data(){
           return {
               dynamicList:[]
           }
        },
        created(){
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getPersonalDynamicPage();
                console.log('result',result)
                if (result.success){
                    this.dynamicList = result.data.list;
                }
            }
        },
        components:{
            LoveDynamic
        }
    }
</script>

<style scoped>

    .publish-dynamic .iconfont{
        position: fixed;
        right: 3rem;
        bottom: 5rem;
        font-size: 40px;
        color: #e8989a;
    }


</style>
