<template>
    <div>
        <div class="auth-title">
            <h1>为什么要工作认证？</h1>
            <p>
                平台主要针对真实，认真交友，只有认证工作才能对TA展示，值得信任和聊天
            </p>
        </div>
        <div v-if="!companyInfo || companyInfo.authResult == 2">
            <van-cell-group>
                <!--姓名-->
                <van-field
                        v-model="name"
                        name="name"
                        label="企业名称"
                        placeholder="企业名称"
                        input-align="right"
                        required
                />
                <!--认证方式-->
                <van-field
                        readonly
                        clickable
                        name="authTypeText"
                        v-model="authTypeText"
                        label="学历"
                        placeholder="点击选择学历"
                        input-align="right"
                        required
                        @click="showAuthTypePicker = true"
                />
                <van-popup v-model="showAuthTypePicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="authTypeList"
                            :default-index="0"
                            @confirm="onAuthTypeConfirm"
                            @cancel="showAuthTypePicker = false"
                    />
                </van-popup>
                <div class="upload-image">
                    <van-uploader :before-read="beforeReadImage" :max-count="1">
                        <img width="300" height="180"  :src="authTypeSrc">
                    </van-uploader>
                </div>
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block color="#65c4aa" @click="submitData">
                    提交
                </van-button>
            </div>
        </div>
        <div v-else>
            <div class="auth_content clearfix">
                <span class="left">企业名称</span>
                <span class="right">{{companyInfo.name}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">认证方式</span>
                <span class="right">{{companyInfo.authType == '1'?'工牌':'名片'}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">认证日期</span>
                <span class="right">{{companyInfo.authDate}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">认证结果</span>
                <span class="right">{{companyInfo.authResultDesc}}</span>
            </div>
            <div class="pageBox" style="margin: 16px;">
                <van-button round block color="#65c4aa" @click="previousPage()">上一步</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {companyAuth,getCompanyInfo} from "../../service/api";
    import fileUtils from "./../../plugins/file";

    export default {
        name: "Company",
        data(){
            return{
                name:'',
                authType: 0,
                authTypeText:'工牌',
                authTypeSrc:'https://img.yzcdn.cn/vant/cat.jpeg',
                file:{},
                companyInfo:{},

                authTypeList:[
                    {text:'工牌', value:0},
                    {text:'名片', value:1}
                ],
                showAuthTypePicker: false,
            }
        },
        created() {
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getCompanyInfo();
                if (result.success){
                    this.companyInfo = result.data;
                }
            },
            async submitData(){
                if (!this.name){
                    this.$toast('请输入企业名称');
                    return;
                }
                if (!this.authType){
                    this.$toast('请选择认证方式');
                    return;
                }
                if (!this.file){
                    this.$toast('请上传认证证明图片');
                    return;
                }
                let headerImage  = await fileUtils.imgPreview(this.file)
                if(!headerImage){
                    return
                }
                let formData = new FormData();
                formData.append("file", fileUtils.dataURLtoFile(headerImage, this.file));
                formData.append("name", this.name);
                formData.append("authType", this.authType);
                let result = await companyAuth(formData);
                console.log("result",result)
                if (result.success){
                    this.initData();
                }
            },
            beforeReadImage(file){
                this.file = file;
                let reader = new FileReader(); //本地预览
                reader.readAsDataURL(file); //Base64
                let that = this;
                reader.onload = function() {
                    //reader.result;就是base64编码格式;
                    that.authTypeSrc = reader.result;
                };
                return false;
            },
            onAuthTypeConfirm(value){
                this.authType = value.value;
                this.authTypeText = value.text;
                this.showAuthTypePicker = false;
            },
            // 上一页
            previousPage(){
                this.$emit('childFun',1);
            },
        }
    }
</script>

<style scoped>

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
    .upload-image{
        text-align: center;
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
    .pageBox {
        display: flex;
        justify-content: space-around;
    }
</style>
