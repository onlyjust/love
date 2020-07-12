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
    import VueQr from 'vue-qr';
    import html2canvas from "html2canvas";
    import UserHeader from "../../views/userinfo/children/UserHeader";
    import UserNav from "../../views/userinfo/children/UserNav";
    import UserBasic from "../../views/userinfo/children/UserBasic";
    import UserAuth from "../../views/userinfo/children/UserAuth";
    import UserLabel from "../../views/userinfo/children/UserLabel";
    import UserQuestion from "../../views/userinfo/children/UserQuestion";

    export default {
        name: "HtmlToCanvas",
        components: {VueCanvasPoster,VueQr,UserQuestion, UserLabel, UserAuth, UserBasic, UserNav, UserHeader},
        props:{
            datingData:Object,
        },
        data(){
            return {
                src: '',
                painting: {},
                canvasPosterShow:false
            }
        },
        created(){

        },
        mounted(){
            const params = {
                type: 'pro', // 尝试换一下text,image
                avatar: this.datingData.personalPhoto,
                datingData: this.datingData,
                qrcodeContent: window.location.href,
            }
            drawPoster(params).then(res => {
                this.painting = res
            })
        },
        methods:{
            htmlToCanvas() {
                this.canvasPosterShow = true;
            },
            // 保存
            success(src) {
                this.src = src
                // console.log("src:",this.src);
            },
            fail(err) {
                console.log('fail', err)
            }
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
