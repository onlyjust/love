<template>
    <div>
        <a @click="startRecord()">开始录音</a>
        <hr>
        <a @click="pauseRecord()">结束录音</a>
        <hr>
        <a @click="startPay()">播放录音</a>
        <hr>
        <a @click="pausePay()">暂停播放</a>
        <hr>
        <a @click="uploadRecord()">上传录音</a>
        <hr>
        <a @click="downloadRecord()">下载录音</a>
        <hr>
    </div>
</template>

<script>
    import {getSignature,uploadWxVoice} from "../../../service/api";

    export default {
        name: "WxVoice",
        data(){
            return {
                localId:null,
                serverId:null,
            }
        },
        created() {
            this.initData();
        },
        methods: {
            async initData() {
                let result = await getSignature(window.location.href);
                if (!result.success){
                    console.log("获取微信签名失败");
                    this.$toast(result.message);
                }
                let wxResp = result.data;
                console.log("获取微信签名数据：",wxResp);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: wxResp.appId, // 必填，公众号的唯一标识
                    timestamp: wxResp.timestamp, // 必填，生成签名的时间戳
                    nonceStr: wxResp.nonceStr, // 必填，生成签名的随机串
                    signature: wxResp.signature,// 必填，签名，见附录1
                    // 必填，需要使用的JS接口列表，所有JS接口列表见官方js接口
                    // 这里配置录音所需要的接口权限
                    jsApiList: [
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'onVoicePlayEnd',
                        'uploadVoice',
                        'downloadVoice'
                    ]
                });
                wx.ready(function () {
                    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                    console.log("成功")
                });
                wx.error(function (res) {
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    console.log("失败res===>", res);
                });
            },

            startRecord(){
                console.log('点击开始录音')
                wx.startRecord({
                    success: function() {
                        console.log('开始录音')
                    },
                    fail: function(res) {
                        console.log(JSON.stringify(res))
                    }})
            },
            pauseRecord(){
                console.log('点击结束录音')
                wx.stopRecord({ // 微信结束录音接口
                    success: res => {
                        // 这里将localId保存到data中，用于播放录音和上传到服务端
                        this.localId = res.localId
                        console.log('正常结束录音成功了')
                    },
                    fail: res => {
                        console.log(JSON.stringify(res))
                    }
                })
            },
            startPay(){
                console.log('点击播放录音')
                wx.playVoice({
                    localId: this.localId // 需要播放的音频的ID，由stopRecord接口获得
                })
            },
            pausePay(){
                console.log('点击暂停播放')
                wx.pauseVoice({
                    localId: this.localId // 需要播放的音频的ID，由stopRecord接口获得
                })
            },
            uploadRecord(){
                console.log('点击上传录音')
                let that = this;
                wx.uploadVoice({
                    localId: this.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        that.serverId = res.serverId; // 返回音频的服务器端ID
                        console.log("res",res)
                        console.log("serverId",that.serverId)
                        let result = uploadWxVoice(that.serverId);
                        console.log("uploadWxVoice res",result)
                    }
                });
            },
            downloadRecord(){
                console.log("downloadRecord serverId ",this.serverId);
                wx.downloadVoice({
                    serverId: this.serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        var localId = res.localId; // 返回音频的本地ID
                        console.log("downloadVoice res",res)
                        console.log("downloadVoice localId",localId)
                        wx.playVoice({
                            localId: localId // 需要播放的音频的ID，由stopRecord接口获得
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
