<template>
    <div>
        <van-cell-group title="">
            <van-field v-model="datingBasic.wechatId" label="微信号" name="wechatId" placeholder="请输入微信号" required input-align="right"/>
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="datingBasic.phone" type="tel" name="phone" label="手机号" placeholder="请输入手机号" required input-align="right"/>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "RegContact",
        props:{
            datingBasic:Object
        },
    }
</script>

<style scoped>

</style>
