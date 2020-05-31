<template>
    <div>
        <div class="chat-view">
            <chat-content bg-color="#f2f2f2" color="black">
                <div slot="left" class="iconfont" :style="{'font-size': '2.4rem'}" @click="back()">&#xe697;</div>
                <div slot="title">{{this.session.fromName}}</div>
                <div slot="right" class="iconfont" :style="{'font-size': '1.8rem'}">&#xe710;</div>
            </chat-content>

            <div  class="message-section">
                <ul id="content" class="message-list" ref="list">
                    <chat-message
                            v-for="message in sortedMessages"
                            :key="message.id"
                            :message="message">
                    </chat-message>
                </ul>
            </div>

            <div class="message-foot">
                <span @click="switchMode" class="btn-mic"><i :class="'icon icon-' + mode"></i></span>
                <input v-show="mode === 'mic'" v-model="msg" id="msgInput" class="msg" @keyup.enter.native="sendMessage"/>
                <wc-mic-status v-show="mode === 'keyboard'" class="msg" @onMsg="onMsg"></wc-mic-status>
                <van-button class="btn-send" type="primary" size="small" @click="sendMessage">发送</van-button>
            </div>
            <!--<chat-reply class="menu"></chat-reply>-->
        </div>
    </div>
</template>

<script>
    import ChatContent from "./ChatContent";
    import ChatReply from "./ChatReply";
    import ChatMessage from "./ChatMessage";
    import WcMicStatus from "../../components/MicStatus/MicStatus";

    import {mapGetters} from 'vuex'
    import Recorder from 'opus-recorder'

    export default {
        name: "ChatView",
        components: {WcMicStatus, ChatMessage, ChatReply, ChatContent},
        props :{
            friend: '',
        },
        data() {
            return {
                mode: 'mic',
                msg: ''
            }
        },
        computed: {
            ...mapGetters({
                session: 'currentSession',
                messages: 'currentMessages'
            }),
            sortedMessages () {
                return this.messages
                    .slice()
                    .sort((a, b) => a.timestamp - b.timestamp)
            }
        },
        watch: {
            'session.lastMessage': function () {
                this.$nextTick(() => {
                    const ul = this.$refs.list
                    ul.scrollTop = ul.scrollHeight
                })
            }
        },
        methods: {
            switchMode() {
                if (this.mode === 'mic') {
                    if (!Recorder.isRecordingSupported()) {
                        /*MessageBox.alert(
                            `Supported: \r\n
              Chrome v58 \r\n
              Firefox v53 \r\n
              Microsoft Edge v41 \r\n
              Opera v44 \r\n
              macOS Safari v11 \r\n
              iOS Safari v11 \r\n
              Unsupported: \r\n
              IE 11 and below \r\n
              iOS 11 Chrome`)*/
                    }
                    this.mode = 'keyboard'
                } else {
                    this.mode = 'mic'
                }
            },
            onMsg(res) {
                this.$store.dispatch('sendMessage', {
                    data: res.data,
                    duration: res.duration,
                    session: this.session
                }).then(() => {
                    this.msg = ''
                }).catch((err) => {
                    console.error(err)
                })
            },
            sendMessage () {
                if (this.msg) {
                    this.$store.dispatch('sendMessage', {
                        content: this.msg,
                        session: this.session
                    }).then(() => {
                        this.msg = ''
                    }).catch((err) => {
                        console.error(err)
                    })
                }
            },
            back() {
                this.$store.dispatch('clearSession').then(
                    () => {
                        window.history.length > 1
                            ? this.$router.go(-1)
                            : this.$router.push('/')
                    }
                )
            },
            scrollToBottom() {
                this.$nextTick(() => {
                    let container = document.getElementById('content');
                    console.log("container",container);
                    if (container){
                        console.log("container.scrollHeight",container.scrollHeight);
                        container.scrollTop = container.scrollHeight;
                    }
                })
            }
        },
        mounted() {
            console.log("this.session",this.session)
            if (!this.session || Object.keys(this.session).length === 0) {
                // this.$router.push('/')
            }
        },
        created() {
            this.$nextTick(() => {
                this.scrollToBottom();
            })
        }
    }
</script>

<style lang="less" scoped>
    .chat-view {
        /*background: white;*/
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
        .message-section {
            position: fixed;
            top: 40px;
            height: calc(100% - 89px);
            max-height: calc(100% - 89px);
            width: 100%;
            .message-list {
                height: calc(100% - 20px);
                margin: 0;
                list-style: none;
                overflow-y: auto;
                padding: 0 0 20px 0;
                -webkit-overflow-scrolling: touch;
            }
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
        }
        .message-foot {
            width: 100%;
            min-height: 48px;
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: #eee;
            .btn-mic {
                width: 30px;
                height: 30px;
                color: #aaa;
                border: 1px solid;
                border-radius: 20px;
                font-size: 1.3em;
                display: inline-block;
                text-align: center;
                line-height: 30px;
                margin: 8px;
                i {
                    margin: 0;
                }
            }
            .btn-send {
                position: absolute;
                right: 8px;
                top: 8px;
                width: 60px;
            }
            .msg {
                width: calc(100% - 130px);
                height: 30px;
                position: absolute;
                top: 9px;
                left: 50px;
                outline: none;
                border: 1px solid;
                border-radius: 5px;
                color: #aaa;
                margin: 0;
                padding: 0;
            }
        }
    }
</style>
