<template>
    <div>
        <van-steps :active="active">
            <van-step>我是</van-step>
            <van-step>我想找</van-step>
            <van-step>基本信息</van-step>
            <van-step>联系方式</van-step>
        </van-steps>

        <div>
            <van-button type="primary" v-if="active!=0" @click="preStep">上一步</van-button>
            <van-button type="primary" v-if="active!=3" @click="nextStep">下一步</van-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "RegUser",
        data() {
            return {
                active: 0,
            };
        },
        methods:{
            preStep(){
                this.active--;
            },
            nextStep(){
                this.active++;
            }
        }
    }
</script>

<style scoped>

</style>
