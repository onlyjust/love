<template>
    <div class="education">
        <div class="auth-title">
            <h1>为什么要学历认证？</h1>
            <p>
                平台主要针对真实，认真交友，只有认证学历才能对TA展示，让TA找个你更加方便，值得信任和聊天
            </p>
        </div>
        <van-cell-group title="">
            <!--姓名-->
            <van-field
                    v-model="education"
                    name="education"
                    label="最高学历"
                    placeholder="最高学历"
                    input-align="right"
                    required
            />
            <!--身份证号-->
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
                <van-uploader v-model="fileList" :after-read="afterReadZheng" :max-count="1">
                    <van-image width="300" height="180" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </van-uploader>
            </div>

        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block color="#65c4aa" @click="submitData">
                提交
            </van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Education",
        data(){
            return {
                education: '',
                graduateSchool: '',
                fileList:[]
            }
        },
        methods:{
            submitData(){

            },
            afterReadZheng(){

            },
            afterReadFan(){

            }
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
</style>
