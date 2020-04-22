<template>
    <div>
        <van-swipe :height="350" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in slideshow_list" :key="index">
                <img class="swipe-img" v-lazy="image" @click="Preview_img(slideshow_list,index)" />
            </van-swipe-item>
            <template #indicator v-if="datingId">
                <div class="custom-indicator" @click="$router.push({name:'lifePhoto',params:{datingId:datingId}})">
                    编辑
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script>
    import {ImagePreview} from 'vant';//引入预览

    export default {
        name: "Slideshow",
        props:{
            slideshow_list:Array,
            datingId:Number
        },
        methods: {
            // 轮播图预览
            Preview_img(images, index) {
                console.info("image:{}",images)
                ImagePreview({
                    images: images,//图片数组
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .van-swipe .van-swipe-item {
        text-align: center;
        background-color: #ffffff;
    }
    .swipe-img{
        max-width: 100%;
        max-height: 100%;
        width:auto;
        height:100%;
    }

    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
    }
</style>
