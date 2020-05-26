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
                    v-model="idValue"
                    name="idValue"
                    label="身份证号"
                    placeholder="身份证号"
                    input-align="right"
                    required
                    @touchstart.native.stop="show = true"
            />
            <van-number-keyboard
                    v-model="idValue"
                    :show="show"
                    extra-key="X"
                    close-button-text="完成"
                    @blur="show = false"
            />
        </van-cell-group>
        <van-cell-group>
            <div class="img">
                <van-uploader>
                    <van-image width="300" height="180" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </van-uploader>
                <van-uploader>
                    <van-image width="300" height="180" src="/images/auth/shenfenzhengfm.png" />
                </van-uploader>
            </div>
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block color="#65c4aa" native-type="submit">
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
                idValue:"",
                show: false,
            }
        }
    }
</script>

<style lang="less" scoped>
    #identity .img{
        text-align: center;
    }
</style>
