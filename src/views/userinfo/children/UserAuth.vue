<template>
    <!--认证信息-->
    <div class="auth">
        <h1 class="subject"><i class="iconfont iconjibenziliao_huaban">认证信息</i></h1>
        <div class="auth_container">
            <div class="auth_left">
                <i class="iconfont iconrenzheng"></i>
            </div>
            <div class="auth_right">
                <p>张*</p>
                <p>321***199101******</p>
                <p>2020-01-01 通过身份认证</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserAuth"
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
    }

</style>
