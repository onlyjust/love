<template>
    <div id="lifePhoto" class="top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="生活照"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>

        <div class="life-title">

        </div>

        <van-uploader
                v-model="fileList"
                multiple
                :max-count="9"
        />

    </div>
</template>

<script>
    export default {
        name: "LifePhoto",
        data() {
            return {
                fileList: [
                    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    { url: 'https://cloud-image', isImage: true }
                ]
            }
        }
    }
</script>

<style scoped>
    .life-title{
        height: 1rem;
    }
</style>
