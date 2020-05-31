<template>
    <div id="message">
        <!--<van-nav-bar
                title="消息"
                fixed
                border
        ></van-nav-bar>-->
        <div class="header">
            <ul>
                <li>
                    <i class="iconfont iconfensi"></i>
                    <span>粉丝</span>
                </li>
                <li>
                    <i class="iconfont iconzan"></i>
                    <span>点赞</span>
                </li>
                <li>
                    <i class="iconfont iconaite"></i>
                    <span>艾特</span>
                </li>
                <li>
                    <i class="iconfont iconpinglun"></i>
                    <span>评论</span>
                </li>
            </ul>
        </div>

        <session-section :height="height"/>

    </div>
</template>

<script>
    import SessionSection from "./session/SessionSection";
    export default {
        name: "Message",
        data(){
            return{
                height:0
            }
        },
        components: {SessionSection},
        created() {
            this.height = document.documentElement.clientHeight - 95;
            //this.$store.dispatch('getMessageList');
        },
        methods:{
            switchSession (fromId,fromName) {
                let from = fromId;
                let remark = '';
                this.$store.dispatch('switchSession', {from, remark}).then(() => {
                    this.$router.push({path: '/chat/'+fromName})
                })
            },
        }
    }
</script>

<style scoped>

    #message{
        width: 100%;
        height: 100%;
    }

    .header ul{
        display: flex;
        font-size: 2.4rem;
        justify-content: space-around;
        padding: 1rem 0;
        border-bottom: #b2b2c3 solid 1px;
    }
    .header ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header ul li span{
        font-size: 1.4rem;
    }

    /*消息*/
    .message_container{
        padding: 0 1rem;
    }
    .message_box {
        display: flex;
        align-items: center;
        border-bottom: #b2b2c3 solid 1px;
    }
    .message_box .message_left {
        width: 5rem;
        padding: 0.5rem;
    }
    .message_box .message_left img{
        width: 100%;
        border-radius: 50%;
    }
    .message_box .message_content{
        flex-grow: 1;
        margin-left: 1rem;
    }
    .message_box .message_content h1{
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
    }
    .message_box .message_content p{
        font-size: 1.2rem;
    }
    .message_box .message_right{
        width: 6rem;
    }

</style>
