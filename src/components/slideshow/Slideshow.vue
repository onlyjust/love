<template>
    <van-swipe id="my_swipe" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in slideshow_list" :key="index">
            <img style="width:100%;height:26rem;" v-lazy="image" @click="Preview_img(slideshow_list,index)" />
        </van-swipe-item>
        <template #indicator>
            <div class="custom-indicator">
                编辑
            </div>
        </template>
    </van-swipe>
</template>

<script>
    import {ImagePreview} from 'vant';//引入预览

    export default {
        name: "Slideshow",
        props:{
            slideshow_list:Array
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

<style scoped>
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
    }
</style>
