<template>
    <div class="user-apply">
        <div class="apply-wrap">
            <div>
                <span class="wechat-no">微信号：{{wechatId}}</span>
            </div>
            <div v-if="wechatId == '********'">
                <span class="apply-btn" @click="applyWechat()">申请加微信</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {applyAddWechat} from "../../../service/api";

    export default {
        name: "UserApply",
        props:{
            datingId:Number,
            wechatId:String
        },
        data(){
            return {
            }
        },
        methods: {
            async applyWechat() {
                if (!this.$store.state.token) {
                    this.$toast('请您登录后，再来申请加微信');
                    return;
                }
                let result = await applyAddWechat(this.datingId);
                this.$toast(result.message);
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
