<template>
    <!--认证信息-->
    <div class="auth">
        <h1 class="subject"><i class="iconfont iconjibenziliao_huaban">认证信息</i></h1>
        <div class="auth_container">
            <div class="auth_left">
                <i class="iconfont iconrenzheng"></i>
            </div>
            <div class="auth_right">
                <p>{{authIdentity.name}}</p>
                <p>{{authIdentity.identityNumber}}</p>
                <p>{{authIdentity.authDate}} 通过身份认证</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAuth",
        props:{
            authIdentity:Object
        },
        data(){
            return {

            }
        },
        created() {

        },
        methods:{
            async initData(){

            }
        }
    }
</script>

<style scoped>

    /*认证信息*/
    .auth{
    }
    .auth .auth_container{
        display: flex;
    }
    .auth .auth_container .auth_left {
        width: 6rem;
        font-size: 5rem;
        text-align: center;
    }
    .auth .auth_container .auth_right {
        flex-grow: 1;
        text-align: right;
        padding-right: 1rem;
        padding-top: 1rem;
        font-size: 1.2rem;
    }

</style>
