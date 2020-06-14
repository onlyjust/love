<template>
    <div class="top-bar">
        <van-nav-bar
                title="认证中心"
                left-arrow
                fixed
                border
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <van-grid :border="false" :column-num="3">
            <van-grid-item>
                <van-image src="@/images/auth/shenfen_auth.png" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="@/images/auth/xueli_auth.png" />
            </van-grid-item>
            <van-grid-item>
                <van-image src="@/images/auth/gongzuo_auth.png" />
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
