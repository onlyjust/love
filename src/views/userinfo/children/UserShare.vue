<template>
    <div>
        <div class="share_box">
            <div @click="shareInfo()">分享名片</div>
            <div @click="switchSession(datingData.userId,datingData.nickname)">聊天</div>
        </div>
        <HtmlToCanvas v-if="datingData" ref="canvasImage" :userInfo="datingData"/>
    </div>
</template>

<script>
    import HtmlToCanvas from "../../../components/canvas/HtmlToCanvas";
    export default {
        name: "UserShare",
        components: {HtmlToCanvas},
        props:{
            datingData:Object
        },
        methods:{
            switchSession (fromId,fromName) {
                let from = fromId;
                let remark = '';
                this.$store.dispatch('switchSession', {from, remark}).then(() => {
                    this.$router.push({path: '/chat/'+fromName})
                })
            },
            shareInfo(){
                this.$refs.canvasImage.htmlToCanvas();
            }
        }
    }
</script>

<style scoped>

    .share_box {
        padding: 20px;
    }
    .share_box div {
        background: #e8989a;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        color: white;
        font-weight: bold;
        border-radius: 20px;
        margin: 10px auto;
    }

</style>
