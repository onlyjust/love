<template>
    <div id="identityInfo">
        <div class="auth">
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
                <span class="left">认证时间</span>
                <span class="right">{{identity.authDate}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {getIdentityInfo} from '../../service/api/index';

    export default {
        name: "IdentityInfo",
        data(){
            return{
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
            }
        }
    }
</script>

<style lang="less" scoped>
    .auth {
        padding: 2rem 1rem;
        font-size: 1.4rem;
    }
    .auth h1{
        font-size: 1.6rem;
        font-weight: bold;
        color: #5e5e5e;
    }
    .auth_content{
        background-color: #cccccc;
        margin: 1rem auto;
        padding: 2rem 2rem;
    }
    /*.clearfix:after{
        content: '';
        display: block;
        clear: both;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }*/
</style>
