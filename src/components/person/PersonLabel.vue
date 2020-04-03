<template>
    <div class="label">
        <div class="subject">
            <h1>个性标签</h1>
            <a href="">编辑</a>
        </div>
        <div class="label_container">
            <label class="tag">直率</label>
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
            <label class="tag">烹饪</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonLabel"
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
