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
                <h2>有感情的说一句</h2>
                <a class="btn-a">换一个</a>
            </div>
            <div class="wrapper-box">
                <div class="voice-content">
                    额嗡嗡嗡人大大撒法阿斯顿发链接大师傅反过来看发撒雕刻技法地方阿里看得十分骄傲的方式阿克斯酱豆腐阿斯利康大家发费朵拉科技发达爱上了幅度加大了房间啊
                </div>
            </div>
        </div>
        <div class="footer">
            <div v-if="!done">
                <div class="showVoice" :class="[visibility?'':'hidden'] ">
                    <img src="../../../images/voice/record-show.png">
                    <p class="time-counter">{{calculateTime}}</p>
                </div>

                <div class="voice-circle" @touchstart="goTouchStart" @touchend="goTouchEnd">
                    <img src="./../../../images/voice/record.png">
                </div>
            </div>
            <div v-else>
                <div class="done-counter">{{calculateTime}}</div>
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
    export default {
        name: "Voice",
        data(){
            return {
                visibility: false,
                timeOutEvent: 0,//定时器
                calculateSecond:0,
                timer:null,
                done:false,
                pay:false
            }
        },
        computed:{
            calculateTime(){
                return this.calculateSecond;
            }
        },
        methods:{
            goTouchStart(){
                clearTimeout(this.timeOutEvent);//清除定时器
                this.timeOutEvent = 0;
                let that = this;
                this.timeOutEvent = setTimeout(function(){
                    //执行长按要执行的内容，
                    console.log("go touch start---");
                    that.visibility = true;
                    that.setCalculateSecond();
                },600);//这里设置定时
            },
            //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
            goTouchEnd(){
                clearTimeout(this.timeOutEvent);
                if(this.timeOutEvent!=0){
                    //这里写要执行的内容（尤如onclick事件）
                    console.log("go touch end---");
                    this.visibility = false;
                    clearInterval(this.timer)
                    this.done = true;
                }
            },
            // 播放
            payRecord(){
                this.pay = true;
                console.log("重听")
            },
            pauseRecord(){
                this.pay = false;
                console.log("暂停")
            },
            cancelRecord(){
                this.done = false;
                this.calculateSecond = 0;
                console.log("取消")
            },
            submitRecord(){
                console.log("提交")
            },
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
        margin: 80px auto 100px;
    }
    .footer .showVoice {
        width: 50px;
        margin: 50px auto;

    }


    .footer .footer-wrapper {
        width: 60%;
        display: flex;
        align-items: center;
        margin: 105px auto 0;
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
    }
    .time-counter {
        margin-top: 20px;
    }
    .done-counter {
        padding-top: 70px;
    }
</style>
