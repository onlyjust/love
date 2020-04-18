<template>
    <div>
        <div class="chat-view">
            <chat-content bg-color="#f2f2f2" color="black">
                <div slot="left" class="iconfont icon" @click="$router.back()">&#xe697;</div>
                <div slot="title">{{friend}}</div>
                <div slot="right" class="iconfont" :style="{'font-size': '1.8rem'}">&#xe710;</div>
            </chat-content>
            <chat-reply class="menu"></chat-reply>
        </div>
    </div>
</template>

<script>
    import ChatContent from "./ChatContent";
    import ChatReply from "./ChatReply";
    export default {
        name: "ChatView",
        components: {ChatReply, ChatContent},
        props :{
            friend: ''
        }
    }
</script>

<style lang="less" scoped>
    .chat-view {
        background: white;
        position: absolute;
        width: 100%;
        height: 100%;
    .icon {
        font-size: 2.4rem;
    }
    .menu {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
    }
</style>
