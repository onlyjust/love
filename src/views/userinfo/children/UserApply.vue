<template>
    <div class="user-apply">
        <div class="apply-wrap">
            <div>
                <span class="wechat-no">微信号：{{wechatId}}</span>
            </div>
            <div>
                <span class="apply-btn" @click="applyWechat()">申请加微信</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserApply",
        props:{
            datingId:Number,
        },
        data(){
            return {
                wechatId:"********",
            }
        },
        methods: {
            async applyWechat(){
                this.$toast('待开放');
            }
        }
    }
</script>

<style scoped>
    .user-apply {

    }
    .apply-wrap {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        width: 90vw;
        background: #e5d3e8;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 10px;
    }
    .apply-wrap .wechat-no {
        font-size: 14px;
        color: #4a4a4a;
    }
    .apply-wrap .apply-btn {
        color: white;
        font-size: 12px;
        background: #41c955;
        padding: 8px 15px;
        border-radius: 15px;
    }
</style>
