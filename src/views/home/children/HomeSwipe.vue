<template>
    <div>
        <van-swipe :autoplay="3000" >
            <van-swipe-item v-for="(match,index) in matchList" :key="index">
                <home-match :match="match"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import HomeMatch from "./HomeMatch";
    export default {
        name: "HomeSwipe",
        components: {HomeMatch},
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
            };
        },
        props:{
            matchList:Array
        }
    }
</script>

<style scoped>

</style>
