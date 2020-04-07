<template>
    <div class="label">
        <div class="subject">
            <h1>个性标签</h1>
            <a @click="$router.push('/person/label')"><i class="iconfont iconbianji"></i></a>
        </div>
        <div class="label_container">
            <label class="tag" v-for="(item,index) in labelList" :key="index">{{item}}</label>
            <!--<label class="tag">直率</label>
            <label class="tag">开朗</label>
            <label class="tag">独立</label>
            <label class="tag">善解人意</label>
            <label class="tag">看电影</label>
            <label class="tag">听歌</label>
            <label class="tag">吃鸡</label>
            <label class="tag">烹饪</label>
            <label class="tag">直率</label>
            <label class="tag">开朗</label>
            <label class="tag">独立</label>
            <label class="tag">善解人意</label>
            <label class="tag">看电影</label>
            <label class="tag">听歌</label>
            <label class="tag">吃鸡</label>
            <label class="tag">烹饪</label>-->
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
        padding: 0 1.5rem;
    }
</style>
