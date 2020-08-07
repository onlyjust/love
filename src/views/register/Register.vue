<template>
    <div >
        <van-steps :active="active">
            <van-step>我是</van-step>
            <van-step>上传头像</van-step>
            <van-step>基本资料</van-step>
            <van-step>教育背景</van-step>
            <van-step>联系方式</van-step>
            <van-step>生活照</van-step>
        </van-steps>

        <Registrant v-if="active==0" :datingObj="datingObj" @onDating="getDating"/>
        <RegPhoto v-if="active==1" :datingObj="datingObj"/>
        <RegBasic v-if="active==2" :datingBasic="datingObj"/>
        <RegJob v-if="active==3" :datingBasic="datingObj"/>
        <RegContact v-if="active==4" :datingBasic="datingObj"/>
        <RegLifePhoto v-if="active==5" :relationalId="datingId"/>
        <div class="step-box">
            <van-button type="primary" v-if="active!=0" @click="preStep">上一步</van-button>
            <van-button type="primary" @click="nextStep">{{active == 4?'完&emsp;&emsp;成':'下一步'}}</van-button>
        </div>
    </div>
</template>

<script>
    import Registrant from "./Registrant";
    import RegBasic from "./RegBasic";
    import RegJob from "./RegJob";
    import RegContact from "./RegContact";
    import RegLifePhoto from "./RegLifePhoto";
    import {mapState,mapActions} from 'vuex'
    import {getStore} from "../../config/global";
    import {TOKEN,USER_INFO} from "../../store/mutations-type";

    import {getDatingBasic,updateDatingBasic,getUserInfo} from './../../service/api/index';
    import RegPhoto from "./RegPhoto";

    export default {
        name: "RegUser",
        components: {RegPhoto, RegLifePhoto, RegContact, RegJob, RegBasic, Registrant},
        data() {
            return {
                active: 0,
                datingObj:{
                },
                datingId:0
            };
        },
        computed:{
            ...mapState(['userInfo']),
        },
        mounted() {
            this.initData();
        },
        methods:{
            ...mapActions(['syncUserInfo']),
            initData(){
                if (getStore(USER_INFO)){
                    this.datingId = JSON.parse(getStore(USER_INFO)).datingId;
                    console.log(JSON.parse(getStore(USER_INFO)).datingId);
                }
            },
            preStep(){
                this.active--;
            },
            nextStep(){
                if (this.active == 0){
                    if (!this.datingObj.gender){
                        this.$toast('请选择性别');
                        return;
                    }
                } else if (this.active == 1){
                    /*if (!this.datingObj.personalPhoto) {
                        this.$toast('请上传头像');
                        return;
                    }*/
                } else if (this.active == 2) {
                    if(!this.validateBasic()){
                        return
                    }
                } else if (this.active == 3){
                    if (!this.validateJob()){
                        return
                    }
                } else if(this.active == 4){
                    if (!this.validateContact()){
                        return
                    }
                    if(!this.onSubmit(this.datingObj)){
                        return
                    }
                } else {
                    this.$router.push('/mine');
                    return
                }
                console.log('datingObj:',this.datingObj)
                this.active++;
            },
            validateBasic(){
                if (!this.datingObj.nickname) {
                    this.$toast('请输入昵称');
                    return false;
                }
                if (!this.datingObj.height) {
                    this.$toast('请选择身高');
                    return false;
                }
                if (!this.datingObj.birthday) {
                    this.$toast('请选择生日');
                    return false;
                }
                if (!this.datingObj.horoscope) {
                    this.$toast('请选择星座');
                    return false;
                }
                if (!this.datingObj.live) {
                    this.$toast('请选择居住地');
                    return false;
                }
                if (!this.datingObj.nativePlace) {
                    this.$toast('请选择家乡');
                    return false;
                }
                return true;
            },
            validateJob(){
                if (!this.datingObj.education) {
                    this.$toast('点击选择学历');
                    return false;
                }
                if (!this.datingObj.job) {
                    this.$toast('请填写职业');
                    return false;
                }
                if (!this.datingObj.salary) {
                    this.$toast('请填写月薪');
                    return false;
                }
                return true;
            },
            validateContact(){
                if (!this.datingObj.wechatId) {
                    this.$toast('请输入微信号');
                    return false;
                }
                if (!this.datingObj.phone) {
                    this.$toast('请输入手机号');
                    return false;
                }
                return true;
            },
            getDating(datingObj){
                if (datingObj){
                    this.datingObj = datingObj;
                    console.log('gender:',this.datingObj.gender)
                }
            },
            async onSubmit(values){
                console.log("提交",values);
                let result = await updateDatingBasic(values);
                if (result.success){
                    result = await getUserInfo(getStore(TOKEN));
                    if (result.success) {
                        // 4.1 保存用户信息
                        this.syncUserInfo(result.data);
                    }
                }
                return result.success;
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
