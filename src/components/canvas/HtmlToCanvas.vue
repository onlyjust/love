<template>
    <div id="htmlToCanvas"  >
        <van-popup v-model="canvasPosterShow" style="width: 60%">
            <img v-if="src" :src="src" alt="" class="share-image">
            <van-loading v-else size="24px" vertical>加载中...</van-loading>
        </van-popup>

        <vue-canvas-poster class="poster" :widthPixels="550" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
    </div>
</template>

<script>
    import { drawPoster } from './../../plugins/painter';
    import { VueCanvasPoster } from 'vue-canvas-poster'

    export default {
        name: "HtmlToCanvas",
        components: {VueCanvasPoster},
        props:{
            userInfo:Object
        },
        data(){
            return {
                src: '',
                painting: {},
                canvasPosterShow:false
            }
        },
        watch: {
            //正确给 cData 赋值的 方法
            /*userInfo: function(newVal,oldVal){
                this.userInfo = newVal;  //newVal即是chartData
                // newVal && this.htmlToCanvas(); //newVal存在的话执行drawChar函数
            }*/
        },
        created(){
            // this.initData();
        },
        methods:{
            async initData(){
                if (this.userInfo && this.userInfo.personalPhoto) {
                    // let avatar = "http://api.51vipyuan.com/api/file/download/"+this.userInfo.personalPhoto.substring(this.userInfo.personalPhoto.lastIndexOf("/")+1);
                    let avatar = "/api/file/download/"+this.userInfo.personalPhoto.substring(this.userInfo.personalPhoto.lastIndexOf("/")+1);
                    let basicInfo = '';
                    if (this.userInfo.age) {
                        basicInfo += this.userInfo.age;
                    }
                    if (this.userInfo.horoscope) {
                        basicInfo += "  "+this.userInfo.horoscope;
                    }
                    if (this.userInfo.job) {
                        basicInfo += "  "+this.userInfo.job;
                    }
                    const params = {
                        type: 'pro', // 尝试换一下text,image
                        // avatar: this.userInfo.personalPhoto,
                        // avatar: "http://192.168.0.103:8089/api/file/download/fa5b2c7c-991c-4eac-b416-13b66a822802.jpeg",
                        avatar: avatar,
                        nickname: this.userInfo.nickname,
                        highlightTitle: this.userInfo.highlightTitle,
                        // qrcodeContent: window.location.href,
                        basicInfo: basicInfo,
                        qrcodeContent: window.location.href.substring(0,window.location.href.indexOf(window.location.pathname))+"/tourist/preview/"+this.userInfo.datingDataId,
                    };
                    console.log("params:",params);
                    drawPoster(params).then(res => {
                        this.painting = res
                    })
                }
            },
            htmlToCanvas() {
                /*console.log("window.location.port",window.location.port);
                console.log("window.location.protocol",window.location.protocol);
                console.log("window.location.pathname",window.location.pathname);
                console.log("window.location.host",window.location.host);
                console.log("window.location.hostname",window.location.hostname);
                console.log("window.location.href",window.location.href);
                console.log("window.location",window.location.href.substring(0,window.location.href.indexOf(window.location.pathname)));*/
                this.canvasPosterShow = true;
                if(this.src){
                    return;
                }

                this.initData();
            },
            // 保存
            success(src) {
                // this.canvasPosterShow = true;
                this.src = src
                // console.log("src:",this.src);
            },
            fail(err) {
                this.canvasPosterShow = false;
                console.log('fail', err)
            },
        }
    }
</script>

<style scoped>
    .imageDom{
        padding: 1rem;
    }
    .canvasImg {
        border: #509994 solid 1px;
        padding: 0.6rem;
    }
    .canvasImg img {
        width: 100%;
        height: 100%;
    }

    .share-image {
        width: 100%;
        height: auto;
    }
</style>
