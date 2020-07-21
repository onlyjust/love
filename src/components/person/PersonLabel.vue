<template>
    <div class="label">
        <div class="subject">
            <h1>个性标签</h1>
            <a @click="$router.push('/person/hobby')"><i class="iconfont iconbianji"></i></a>
        </div>
        <div class="label_container">
            <label class="tag" v-for="(item,index) in labelList" :key="index">{{item}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonLabel",
        props:{
            labelList:{
                type: Array
            }
        }
    }
</script>

<style scoped>
    /*个性标签*/
    .label_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 0 15px;
    }
</style>
