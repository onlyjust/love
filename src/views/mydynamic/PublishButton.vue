<template>
    <div class="publish-dynamic" @click="$router.push('/publish/dynamic')">
        <span class="iconfont iconfabu4-copy"></span>
    </div>
</template>

<script>
    export default {
        name: "PublishButton",
        props:{
        }
    }
</script>

<style scoped>

    .publish-dynamic .iconfont{
        position: fixed;
        right: 3rem;
        bottom: 8rem;
        font-size: 40px;
        color: #e8989a;
    }

</style>
