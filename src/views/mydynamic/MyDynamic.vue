<template>
    <div id="myDynamic">
        <!--动态-->
        <love-dynamic v-for="(dynamic,index) in dynamicList" :key="index" />
    </div>
</template>

<script>
    import LoveDynamic from '../../components/dynamic/LoveDynamic';

    export default {
        name: "MyDynamic",
        data(){
           return {
               dynamicList:[11,212,323,32]
           }
        },
        components:{
            LoveDynamic
        }
    }
</script>

<style scoped>



</style>
