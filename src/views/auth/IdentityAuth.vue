<template>
    <div id="identity">
        <van-cell-group title="身份认证">
            <!--姓名-->
            <van-field
                    v-model="name"
                    name="name"
                    label="姓名"
                    placeholder="姓名"
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
</template>

<script>
    export default {
        name: "IdentityAuth",
        data(){
            return {
                name:"",
                idNumber:"",
                show: false,
            }
        },
        methods:{
            submitData(){
                let name = this.name;
                let idNumber = this.idNumber;
                console.log(name);
                console.log(idNumber);


            }
        }
    }
</script>

<style lang="less" scoped>
    #identity .img{
        text-align: center;
    }
</style>
