<template>
    <!--用户头信息-->
    <header class="header">
        <!--<div class="header_left">
            <img src="img/2.jpg">
        </div>-->
        <div class="header_right">
            <h1 class="nickname">晓晓<i class="iconfont iconnv"></i></h1>
            <p class="highlight_title">一句突出自己的话</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: "UserHeader"
    }
</script>

<style scoped>

    /*用户头信息*/
    .header{
        display: flex;
        padding: 2rem 2rem;
        align-items: center;
    }
    .header .header_left{
        width: 6rem;
    }
    .header .header_left img{
        width: 100%;
        border-radius: 50%;
    }
    .header .header_right .nickname{
        font-size: 1.6rem;
        font-weight: bold;
    }
    .header .header_right .highlight_title{
        margin-top: 1rem;
        font-size: 1.4rem;
    }

</style>
