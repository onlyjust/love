<template>
    <div>
        <div class="auth" v-if="identity">
            <h1>为什么要身份认证？</h1>
            <p>
                平台主要针对真实，认真交友，只有认证身份才能对TA展示，值得信任和聊天
            </p>
            <div class="auth_content clearfix">
                <span class="left">真实姓名</span>
                <span class="right">{{identity.name}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">身份证号</span>
                <span class="right">{{identity.identityNumber}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">认证日期</span>
                <span class="right">{{identity.authDate}}</span>
            </div>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" @click="nextPage()">下一步</van-button>
            </div>
        </div>
        <div id="identityAuth" v-else>
            <div class="auth-title">
                <h1>为什么要身份认证？</h1>
                <p>
                    平台主要针对真实，认真交友，只有认证身份才能对TA展示，值得信任和聊天
                </p>
            </div>
            <van-cell-group title="">
                <!--姓名-->
                <van-field
                        v-model="name"
                        name="name"
                        label="真实姓名"
                        placeholder="真实姓名"
                        input-align="right"
                        required
                />
                <!--身份证号-->
                <van-field
                        v-model="idNumber"
                        name="idNumber"
                        label="身份证号"
                        placeholder="身份证号"
                        input-align="right"
                        required
                        @touchstart.native.stop="show = true"
                />
                <van-number-keyboard
                        v-model="idNumber"
                        :show="show"
                        extra-key="X"
                        close-button-text="完成"
                        @blur="show = false"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" @click="submitData">
                    提交
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {idCardAuth, getIdentityInfo} from "../../service/api";

    export default {
        name: "Identity",
        props:{
            authStatus:Number
        },
        data(){
            return {
                name:"",
                idNumber:"",
                show: false,
                identity: {}
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getIdentityInfo();
                if (result.success){
                    this.identity = result.data;
                }
            },
            async submitData(){
                let name = this.name;
                let idNumber = this.idNumber;
                console.log(name);
                console.log(idNumber);
                if (!name){
                    this.$toast('请输入真实姓名');
                    return;
                }
                if (!idNumber){
                    this.$toast('请输入身份证号');
                    return;
                }
                let result = await idCardAuth(idNumber, name);
                if (!result.success){
                    this.$toast(result.message);
                } else {
                    // this.$router.back();
                    this.$emit('childFun',1);
                }
            },
            nextPage(){
                this.$emit('childFun',1);
            }
        },
    }
</script>

<style scoped>

    .auth {
        padding: 10px 10px;
        font-size: 14px;
        background: white;
    }
    .auth h1{
        font-size: 16px;
        font-weight: bold;
        color: #5e5e5e;
        height: 30px;
        line-height: 30px;
    }
    .auth_content{
        background-color: #e7e7e7;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        margin: 1rem auto;
        padding: 15px 20px;
        color: #707bb3;
    }

    /*认证信息*/
    .auth-title {
        padding: 10px 10px;
        font-size: 14px;
        background: white;
    }
    .auth-title h1{
        font-size: 16px;
        font-weight: bold;
        color: #5e5e5e;
        height: 30px;
        line-height: 30px;
    }
</style>
