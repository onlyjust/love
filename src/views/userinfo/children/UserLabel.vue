<template>
    <!--个性标签-->
    <div class="label">
        <h1 class="subject">个性标签</h1>
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
        name: "UserLabel"
    }
</script>

<style scoped>

    /*个性标签*/
    .label_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0 1rem;
    }


</style>
