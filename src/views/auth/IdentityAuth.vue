<template>
    <div id="identity" v-if="authIdentity==1">
        <van-cell-group title="身份认证">
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
        <!--<van-cell-group>
            <div class="img">
                <van-uploader>
                    <van-image width="300" height="180" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </van-uploader>
                <van-uploader>
                    <van-image width="300" height="180" src="/images/auth/shenfenzhengfm.png" />
                </van-uploader>
            </div>
        </van-cell-group>-->
        <div style="margin: 16px;">
            <van-button round block color="#65c4aa" @click="submitData">
                提交
            </van-button>
        </div>
    </div>
    <identity-info v-else/>
</template>

<script>
    import {idCardAuth} from "../../service/api";
    import IdentityInfo from "./IdentityInfo";
    import {mapGetters} from 'vuex';

    export default {
        name: "IdentityAuth",
        components: {IdentityInfo},
        computed:{
            ...mapGetters(["authIdentity"])
        },
        data(){
            return {
                name:"",
                idNumber:"",
                show: false,
            }
        },
        methods:{
            async submitData(){
                let name = this.name;
                let idNumber = this.idNumber;
                console.log(name);
                console.log(idNumber);
                let result = await idCardAuth(idNumber, name);
                if (!result.success){
                    this.$toast(result.message);
                } else {
                    this.$router.back();
                }
            }
        },

    }
</script>

<style lang="less" scoped>
    #identity .img{
        text-align: center;
    }
</style>
