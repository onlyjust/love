<template>
    <!--用户头信息-->
    <header class="header">
        <!--<div class="header_left">
            <img src="img/2.jpg">
        </div>-->
        <div class="header_right">
            <h1 class="nickname">{{userInfo.nickname}}<i class="iconfont" :class="[userInfo.gender == 1?'iconnan':'iconnv']"></i></h1>
            <p class="highlight_title">{{userInfo.highlightTitle}}</p>
        </div>
        <div v-if="userInfo.myVoice">
            <MobileAudio :src="userInfo.myVoice"></MobileAudio>
        </div>
    </header>
</template>

<script>
    import MobileAudio from "../../../components/audio/MobileAudio";
    export default {
        name: "UserHeader",
        components: {MobileAudio},
        props:{
            userInfo:Object
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>

    /*用户头信息*/
    .header{
        display: flex;
        padding: 10px 20px;
        align-items: center;
        justify-content: space-between;
    }
    .header .header_left{
        width: 6rem;
    }
    .header .header_left img{
        width: 100%;
        border-radius: 50%;
    }
    .header .header_right .nickname{
        font-size: 16px;
        font-weight: bold;
    }
    .header .header_right .highlight_title{
        margin-top: 10px;
        font-size: 14px;
    }

</style>
