<template>
    <div >
        <van-steps :active="active">
            <van-step>我是</van-step>
            <!--<van-step>我想找</van-step>-->
            <van-step>基本信息</van-step>
            <van-step>教育方式</van-step>
            <van-step>联系方式</van-step>
        </van-steps>

        <Registrant v-if="active==0" :datingObj="datingObj" @onDating="getDating"/>
        <RegBasic v-if="active==1" :datingBasic="datingObj" @onDating="getDating"/>
        <div class="step-box">
            <van-button type="primary" v-if="active!=0" @click="preStep">上一步</van-button>
            <van-button type="primary" @click="nextStep">{{active == 3?'完&emsp;&emsp;成':'下一步'}}</van-button>
        </div>
    </div>
</template>

<script>
    import Registrant from "./Registrant";
    import RegBasic from "./RegBasic";
    export default {
        name: "RegUser",
        components: {RegBasic, Registrant},
        data() {
            return {
                active: 0,
                datingObj:{}
            };
        },
        methods:{
            preStep(){
                this.active--;
            },
            nextStep(){
                if (this.active == 0){
                    if (!this.datingObj.gender){
                        this.$toast('请选择性别');
                        return;
                    }
                } else {
                    console.log('datingObj:',this.datingObj)
                }
                this.active++;
            },
            getDating(datingObj){
                if (datingObj){
                    this.datingObj = datingObj;
                    console.log('gender:',this.datingObj.gender)
                }
            }
        }
    }
</script>

<style scoped>

    .step-box{
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin: 3rem auto 0;
    }
</style>
