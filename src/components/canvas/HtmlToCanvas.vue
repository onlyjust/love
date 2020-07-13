<template>
    <div id="htmlToCanvas"  >
        <van-popup v-model="canvasPosterShow" style="width: 60%">
            <img :src="src" alt="" class="share-image">
        </van-popup>
        <vue-canvas-poster class="poster" :widthPixels="400" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
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
        mounted(){
            // let avatar = getFile('http://a0.att.hudong.com/16/12/01300535031999137270128786964.jpg');
            /*const params = {
                type: 'pro', // 尝试换一下text,image
                // avatar: this.datingData.personalPhoto,
                avatar: this.personalPhoto,
                // avatar: 'https://imgs.solui.cn/avatar.png',
                nickname: this.nickname,
                qrcodeContent: window.location.href,
            };
            console.log("params:",params);
            drawPoster(params).then(res => {
                this.painting = res
            })*/
        },
        methods:{
            htmlToCanvas() {
                this.canvasPosterShow = true;
                let avatar = "http://api.51vipyuan.com/api/file/download/"+this.userInfo.personalPhoto.substring(this.userInfo.personalPhoto.lastIndexOf("/")+1);
                const params = {
                    type: 'pro', // 尝试换一下text,image
                    // avatar: this.userInfo.personalPhoto,
                    // avatar: "http://192.168.0.103:8089/api/file/download/fa5b2c7c-991c-4eac-b416-13b66a822802.jpeg",
                    avatar: avatar,
                    nickname: this.userInfo.nickname,
                    qrcodeContent: window.location.href,
                };
                console.log("params:",params);
                drawPoster(params).then(res => {
                    this.painting = res
                })
            },
            // 保存
            success(src) {
                this.src = src
                // console.log("src:",this.src);
            },
            fail(err) {
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
