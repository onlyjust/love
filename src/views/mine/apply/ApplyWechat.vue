<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="我的申请">
                <Apply/>
            </van-tab>
            <van-tab title="接收申请">
                <Accept/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    import {getApplyWechat,getAcceptWechat} from "../../../service/api";
    import Accept from "./Accept";
    import Apply from "./Apply";

    export default {
        name: "ApplyWechat",
        components: {Apply, Accept},
        data(){
            return {
                active: 0,
            }
        },
    }
</script>

<style scoped>



</style>
