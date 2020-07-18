<template>
    <div class="education">
        <div class="auth-title">
            <h1>为什么要学历认证？</h1>
            <p>
                平台主要针对真实，认真交友，只有认证学历才能对TA展示，让TA找个你更加方便，值得信任和聊天
            </p>
        </div>
        <div v-if="!educationInfo || educationInfo.authResult == 2">
            <van-cell-group title="">
                <!--学历-->
                <van-field
                        readonly
                        clickable
                        name="education"
                        :value="education"
                        label="最高学历"
                        placeholder="选择最高学历"
                        input-align="right"
                        required
                        @click="showEducationPicker = true"
                />
                <van-popup v-model="showEducationPicker" position="bottom">
                    <van-picker
                            show-toolbar
                            :columns="educationList"
                            @confirm="onEducationConfirm"
                            @cancel="showEducationPicker = false"
                    />
                </van-popup>
                <!--毕业院校-->
                <van-field
                        v-model="graduateSchool"
                        name="graduateSchool"
                        label="毕业院校"
                        placeholder="毕业院校"
                        input-align="right"
                        required
                        @touchstart.native.stop="show = true"
                />
                <div class="upload-image">
                    <van-uploader :before-read="beforeReadImage" :max-count="1">
                        <!--<van-image width="300" height="180" src="https://img.yzcdn.cn/vant/cat.jpeg" />-->
                        <img width="300" height="180"  :src="educationSrc">
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
                <span class="left">学历</span>
                <span class="right">{{educationInfo.education}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">毕业学校</span>
                <span class="right">{{educationInfo.graduateSchool}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">认证日期</span>
                <span class="right">{{educationInfo.authDate}}</span>
            </div>
            <div class="auth_content clearfix">
                <span class="left">认证结果</span>
                <span class="right">{{educationInfo.authResultDesc}}</span>
            </div>
            <div class="pageBox" style="margin: 16px;">
                <div>
                    <van-button round block color="#65c4aa" @click="previousPage()">上一步</van-button>
                </div>
                <div>
                    <van-button round block color="#65c4aa" @click="nextPage()">下一步</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Basic from './../../plugins/basic';
    import {educationAuth,getEducationInfo} from "../../service/api";
    import fileUtils from "./../../plugins/file";


    export default {
        name: "Education",
        data(){
            return {
                education: '',
                graduateSchool: '',

                showEducationPicker: false,
                educationList: Basic.educationList,
                file:{},
                educationSrc:'https://img.yzcdn.cn/vant/cat.jpeg',
                educationInfo:{}
            }
        },
        created(){
            this.initData();
        },
        methods:{
            async initData(){
                let result = await getEducationInfo();
                if (result.success){
                    this.educationInfo = result.data;
                }
            },
            // 学历
            onEducationConfirm(value) {
                this.education = value;
                this.showEducationPicker = false;
            },
            async submitData(){
                if (!this.education){
                    this.$toast('请选择最高学历');
                    return;
                }
                if (!this.graduateSchool){
                    this.$toast('请输入毕业院校');
                    return;
                }
                if (!this.file){
                    this.$toast('请上传毕业证书');
                    return;
                }
                let headerImage  = await fileUtils.imgPreview(this.file)
                if(!headerImage){
                    return
                }
                let formData = new FormData();
                formData.append("file", fileUtils.dataURLtoFile(headerImage, this.file));
                formData.append("education", this.education);
                formData.append("graduateSchool", this.graduateSchool);
                let result = await educationAuth(formData);
                console.log("result",result)
                if (result.success){
                    this.$emit('childFun',2);
                }
            },
            beforeReadImage(file){
                this.file = file;
                let reader = new FileReader(); //本地预览
                reader.readAsDataURL(file); //Base64
                let that = this;
                reader.onload = function() {
                    //reader.result;就是base64编码格式;
                    that.educationSrc = reader.result;
                };
                return false;
            },

            // 上一页
            previousPage(){
                this.$emit('childFun',0);
            },
            // 下一页
            nextPage(){
                this.$emit('childFun',2);
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
