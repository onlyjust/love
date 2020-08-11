<template>
    <div class="voice top-bar">
        <!--导航栏-->
        <van-nav-bar
                title="录音"
                left-arrow
                :fixed=true
                :border=true
                @click-left="$router.go(-1)"
        ></van-nav-bar>
        <div class="wrapper">
            <div class="header">
                <h2>{{topicVoice.title}}</h2>
                <a class="btn-a" @click="getTopicVoice()">换一个</a>
            </div>
            <div class="wrapper-box">
                <div class="voice-content">{{topicVoice.content}}</div>
            </div>
        </div>
        <div class="footer">
            <div v-if="!done">
                <div class="showVoice" :class="[visibility?'':'hidden'] ">
                    <img src="../../../images/voice/record-show.png">
                    <p class="time-counter">{{calculateTime}}</p>
                </div>
                <!--@touchstart="goTouchStart" @touchend="goTouchEnd"-->
                <div v-if="!recording" class="voice-circle" @click="goTouchStart">
                    <!--<img src="./../../../images/voice/record.png">-->
                    <svg t="1595508711350" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1541" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#3296FA" p-id="1542"></path><path d="M512.128 605.824c64.768 0 117.248-53.76 117.248-120.064v-166.4c0-66.304-52.48-120.064-117.248-120.064-64.768 0-117.248 53.76-117.248 120.064v166.4c0 66.304 52.48 120.064 117.248 120.064z m0 0" fill="#FFFFFF" p-id="1543"></path><path d="M682.624 438.4c-13.568 0-24.704 10.624-24.704 23.808v32.512c0 77.568-65.408 140.672-145.92 140.672s-145.92-63.104-145.92-140.672v-32.512c0-13.184-11.008-23.808-24.704-23.808-13.568 0-24.704 10.624-24.704 23.808v32.512c0 96.64 74.496 178.56 171.776 189.184v109.44h-62.592c-13.952 0-31.232 1.792-31.232 15.616 0 13.824 17.28 15.616 31.232 15.616h172.032c13.952 0 31.232-1.792 31.232-15.616 0-13.824-17.28-15.616-31.232-15.616h-62.592v-109.44c94.208-13.312 171.776-94.72 171.776-189.184v-32.512c0.128-13.184-10.88-23.808-24.448-23.808z m0 0" fill="#FFFFFF" p-id="1544"></path></svg>
                </div>
                <div v-else class="voice-circle" @click="goTouchEnd">
                    <svg t="1595908133632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2019"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#F25151" p-id="2020"></path><path d="M385.505882 385.505882v265.035294h265.035294V385.505882H385.505882z m-12.047058-36.141176h289.129411a24.094118 24.094118 0 0 1 24.094118 24.094118v289.129411a24.094118 24.094118 0 0 1-24.094118 24.094118H373.458824a24.094118 24.094118 0 0 1-24.094118-24.094118V373.458824a24.094118 24.094118 0 0 1 24.094118-24.094118z" fill="#FFFFFF" p-id="2021"></path></svg>
                </div>
            </div>
            <div v-else>
                <div class="done-counter">
                    <van-count-down
                            ref="countDown"
                            millisecond
                            :time="calculateSecond"
                            :auto-start="false"
                            format="ss:SSS"
                    />
                </div>
                <div class="footer-wrapper">
                    <div class="btn-img">
                        <img @click="cancelRecord()" src="../../../images/voice/cuo.png">
                    </div>
                    <div class="pay">
                        <img v-if="!pay" @click="payRecord()" src="../../../images/voice/record-start.png">
                        <img v-else @click="pauseRecord()" src="../../../images/voice/record-pause.png">
                    </div>
                    <div class="btn-img">
                        <img @click="submitRecord()" src="../../../images/voice/dui.png">
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    // import Recorder from 'js-audio-recorder';
    import {getSignature,uploadWxVoice, getRandomTopicVoice} from "../../../service/api";
    import {isIOS,requestWxStr} from "../../../plugins/wx";

    export default {
        name: "Voice",
        data(){
            return {
                visibility: false,
                timeOutEvent: 0,//定时器
                calculateSecond:0,
                timer:null,
                done:false,
                pay:false,
                recorder: null,
                datingId:null,
                localId:null,
                recording:false,

                topicVoice:{}
            }
        },
        computed:{
            calculateTime(){
                return this.calculateSecond/1000+"s";
            }
        },
        created(){
            this.initData();
        },
        methods:{
            async initData() {
                if (!isIOS()) {
                    requestWxStr() //该函数和之前一样，被单独提取出来了
                }
                this.getTopicVoice();
            },
            async getTopicVoice(){
                let result = await getRandomTopicVoice();
                if (result.success) {
                    this.topicVoice = result.data;
                }
            },
            goTouchStart(){
                clearTimeout(this.timeOutEvent);//清除定时器
                this.timeOutEvent = 0;
                this.calculateSecond = 0;
                let that = this;
                this.timeOutEvent = setTimeout(function(){
                    //执行长按要执行的内容，
                    console.log("go touch start---");
                    that.visibility = true;
                    that.setCalculateSecond();
                    // 开始录音
                    /*that.recorder = new Recorder();
                    that.recorder.start();*/
                    // 回调持续输出时长
                    /*that.recorder.onprocess = function(duration) {
                        console.log("开始录音",duration);
                    }*/

                    wx.startRecord({
                        success: function() {
                            console.log('开始录音')
                        },
                        fail: function(res) {
                            console.log(JSON.stringify(res))
                        }
                    })
                    that.recording = true;
                },600);//这里设置定时
            },
            //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
            goTouchEnd(){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0){
                    //这里写要执行的内容（尤如onclick事件）
                    console.log("go touch end---");
                    if (this.calculateSecond < 3000){
                        this.$toast("时间不能小于3s");
                        return;
                    }
                    clearInterval(this.timer);
                    this.visibility = false;
                    this.done = true;

                    // 回调持续输出时长
                    /*this.recorder.onprocess = function(duration) {
                        console.log("结束录音",duration);
                    };*/
                    // this.recorder.stop();
                    wx.stopRecord({ // 微信结束录音接口
                        success: res => {
                            // 这里将localId保存到data中，用于播放录音和上传到服务端
                            this.localId = res.localId;
                            console.log('正常结束录音成功了')
                        },
                        fail: res => {
                            console.log(JSON.stringify(res))
                        }
                    });
                    this.recording = false;
                }
            },
            // 播放
            payRecord(){
                this.pay = true;
                console.log("重听");
                // 录音播放
                // this.recorder.play();
                wx.playVoice({
                    localId: this.localId // 需要播放的音频的ID，由stopRecord接口获得
                });
                this.$refs.countDown.start();
            },
            pauseRecord(){
                this.pay = false;
                console.log("暂停");
                // 录音暂停
                // this.recorder.pause();
                wx.pauseVoice({
                    localId: this.localId // 需要播放的音频的ID，由stopRecord接口获得
                })
                this.$refs.countDown.reset();
            },
            cancelRecord(){
                this.done = false;
                this.calculateSecond = 0;
                console.log("取消");
                this.recorder = null;
            },
            submitRecord(){
                console.log("提交")
                // 录音结束后才能使用
                /*let PCM = this.recorder.getPCMBlob();
                console.log("pcm: ", PCM);*/
                /*let WAV = this.recorder.getWAVBlob();
                console.log("WAV: ", WAV);
                this.uploadRecord(WAV);*/
                let that = this;
                wx.uploadVoice({
                    localId: this.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        //this.serverId = res.serverId; // 返回音频的服务器端ID
                        console.log("res",res);
                        console.log("serverId",res.serverId);
                        that.uploadVoice(res.serverId);
                    }
                });
            },
            async uploadVoice(serverId){
                let result = await uploadWxVoice(serverId);
                console.log("uploadWxVoice res",result)
                if (result.success){
                    this.done = false;
                    this.calculateSecond = 0;
                    this.recorder = null;
                    console.log("完成");
                }
            },

            /*async uploadRecord(data){
                let formData = new FormData();
                formData.append("file", data, "record.mp3");
                // console.log("formData: ", formData);
                let result = await uploadVoice(formData);
                console.log("上传结果：",result)
                if (result.success){
                    this.done = false;
                    this.calculateSecond = 0;
                    this.recorder = null;
                    console.log("完成");
                }
            },*/
            setCalculateSecond(){
                this.timer = setInterval(()=>{
                    this.calculateSecond+=111;
                }, 111)
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        height: 30px;
        line-height: 30px;
        color: #323233;
        font-size: 12px;
        box-sizing: content-box;
    }
    .header .btn-a {
        background: #8adfa1;
        padding: 0 15px;
        border-radius: 15px;
        color: #383838;
    }

    .wrapper{
        width: 100%;
        /*height: 200px;*/
        /*background: #43d3cd;*/
        margin: 20px 0;
        box-sizing: content-box;
    }
    .wrapper .wrapper-box {
        width: 95%;
        height: 180px;
        margin: 0 auto;
        background: white;
        border-radius: 10px;
    }

    .wrapper .wrapper-box .voice-content {
        padding: 8px 15px;
        font-size: 13px;
        color: #7f7f7f;
        line-height: 25px;
    }

    .footer{
        width: 100%;
        /*position: absolute;*/
        /*bottom: 0;*/
        /*background: #e8989a;*/
        text-align: center;

    }
    .footer .voice-circle{
        width: 80px;
        height: 80px;
        /*border-radius: 50px;*/
        /*background: #6d9893;*/
        margin: 30px auto 100px;
    }
    .footer .voice-circle svg {
        width: 100%;
        height: 100%;
    }
    .footer .showVoice {
        width: 50px;
        margin: 0 auto;
    }


    .footer .footer-wrapper {
        width: 60%;
        display: flex;
        align-items: center;
        margin: 50px auto 0;
    }
    .footer .footer-wrapper .btn-img {
        width: 30px;
        height: 30px;
    }
    .footer .footer-wrapper .pay {
        width: 50px;
        margin: 0 auto;
    }
    .hidden {
        visibility: hidden;
    }
    .footer img{
        width: 100%;
        height: 100%;
        /*pointer-events:none;!* 禁止长按图片保存 *!*/
    }
    .time-counter {
        margin-top: 20px;
    }
    .done-counter {
        padding-top: 70px;
    }
</style>
