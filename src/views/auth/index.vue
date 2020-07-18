<template>
    <div class="top-bar">
        <van-nav-bar
                title="认证中心"
                left-arrow
                fixed
                border
                @click-left="$router.go(-1)"
        ></van-nav-bar>

        <van-steps :active="authActive">
            <van-step>身份认证</van-step>
            <van-step>学历认证</van-step>
            <van-step>工作认证</van-step>
        </van-steps>
        <Identity v-if="authActive==0" :authStatus="datingAuth.authIdentity" @childFun="changeAuthActiveVal"/>
        <Education v-else-if="authActive == 1" :authStatus="datingAuth.authEducation" @childFun="changeAuthActiveVal"/>
        <Company v-else-if="authActive == 2" @childFun="changeAuthActiveVal"/>

        <!--<ul class="auth_type">
            <li @click="routerView(0,datingAuth.authIdentity)">
                <img src="../../images/auth/shenfen_auth.png">
                <p>{{datingAuth.authIdentity==0?'身份认证':'身份已认证'}}</p>
            </li>
            <li @click="routerView(1,datingAuth.authEducation)">
                <img src="../../images/auth/xueli_auth.png">
                <p>{{datingAuth.authEducation==0?'学历认证':'学历已认证'}}</p>
            </li>
            <li @click="routerView(2,datingAuth.authCompany)">
                <img src="../../images/auth/gongzuo_auth.png">
                <p>{{datingAuth.authCompany==0?'工作认证':'工作已认证'}}</p>
            </li>
        </ul>-->
    </div>
</template>

<script>
    import {getAuthInfo } from '../../service/api/index';
    import Identity from "./Identity";
    import Education from "./Education";
    import Company from "./Company";
    export default {
        name: "index",
        components: {Company, Education, Identity},
        data(){
            return {
                datingAuth:{},
                authActive: 0,
            }
        },
        created(){
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getAuthInfo();
                console.log("auth result ",result)
                if (result.success){
                    this.datingAuth = result.data;
                }
            },
            routerView(type,status){
                console.log('status ',status)
                if (type == 0){
                    if (status == 0){
                        this.$router.push('/auth/identity/auth');
                    } else {
                        this.$router.push('/auth/identity/info');
                    }
                } else if (type == 1){
                    if (status == 0){
                        this.$router.push('/auth/identity/auth');
                    } else {
                        this.$router.push('/auth/identity/info');
                    }
                } else if (type == 2){
                    if (status == 0){
                        this.$router.push('/auth/identity/auth');
                    } else {
                        this.$router.push('/auth/identity/info');
                    }
                }
            },
            changeAuthActiveVal(active){
                this.authActive = active;
            }
        }
    }
</script>

<style lang="less" scoped>
    .auth_type {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        /*justify-content: space-between;*/
        margin: 3rem;
        align-content: center;
        text-align: center;
        font-size: 1.6rem;
    }
    .auth_type li {
        margin: 1rem;
        padding: 1rem;
        width: 20rem;
        border: solid 1px #aee9c7;
        border-radius: 1rem;
    }
    .auth_type li img{
        width: 15rem;
        height: 12rem;
    }
</style>
