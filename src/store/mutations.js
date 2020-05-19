import {
    TOKEN,
    USER_INFO,
    INIT_USER_INFO,
    RESET_USER_INFO,
    SET_CONNECTED,
    RECEIVE_MESSAGE,
    ACCEPTED_FRIEND_REQ,
    SET_MESSAGE_TIMEOUT,
    SET_MESSAGE_SENT,
    SWITCH_SESSION,
    ADD_UN_SEND_MSG,
    CLEAR_SESSION,
    LOGOUT,
    RECEIVE_ALL,
    MESSAGE_ALL,
    LOST_CONNECT
} from './mutations-type'

import apis from '../service/api/websocket'

import {getStore, removeStore, setStore} from './../config/global'
import Vue from 'vue'

export default {

    // 保存token信息
    [TOKEN](state, token){
        state.token = token;
        setStore(TOKEN, state.token);
    },

    // 保存用户信息报本地
    [USER_INFO](state, {userInfo}){
        state.userInfo = userInfo;
        state.username = userInfo.userId;
        setStore(USER_INFO, state.userInfo);
    },

    // 获取用户信息
    [INIT_USER_INFO](state){
        // 8.1 获取用户信息
        let userInfo = getStore(USER_INFO);
        // 8.2 判断
        if(userInfo){
            state.userInfo = JSON.parse(userInfo);
        }
    },

    // 退出登录
    [RESET_USER_INFO](state){
        state.userInfo = {};
        removeStore(USER_INFO);
    },


    // 设置连接状态
    [SET_CONNECTED] (state, connected) {
        state.connected = connected
    },

    // 接收信息
    [RECEIVE_MESSAGE] (state, {message}) {
        if (!state.sessions[message.from]) {
            createSession(state, message.from, message.fromName)
        }
        addMessage(state, message)
    },

    // 接受朋友的请求
    [ACCEPTED_FRIEND_REQ] (state, message) {
        let contact = {friendName: message.from}
        let index = state.contacts[message.content]
        if (index) {
            state.contacts[message.content].push(contact)
        } else {
            Vue.set(state.contacts, message.content, [contact])
        }
        Vue.set(state.friendsInfo, message.from, {username: message.from})
    },
    // 设置消息超时
    [SET_MESSAGE_TIMEOUT] (state, {id, timeout, timestamp}) {
        state.messages[id].timeout = timeout
        if (timestamp) {
            state.messages[id].timestamp = timestamp
        }
    },
    // 设置消息发送
    [SET_MESSAGE_SENT] (state, id) {
        state.messages[id].sent = true
    },
    // 开关对话框
    [SWITCH_SESSION] (state, {from, remark}) {
        setCurrentSession(state, from, remark)
    },
    [LOST_CONNECT] (state, lost) {
        state.lostConnect = lost
    },
    // 添加未发送消息
    [ADD_UN_SEND_MSG] (state, message) {
        state.unSendMsg.push(message)
    },

    [CLEAR_SESSION] (state) {
        state.currentFrom = null
    },

    [LOGOUT] (state) {
        logout(state)
    },

    [RECEIVE_ALL] (state, {messages}) {
        let latestMessage
        messages.forEach(message => {
            // create new session if the session doesn't exist
            if (!state.sessions[message.from]) {
                createSession(state, message.from, message.fromName)
            }
            // mark the latest message
            if (!latestMessage || message.timestamp > latestMessage.timestamp) {
                latestMessage = message
            }
            // add message
            addMessage(state, message)
        })
    },

    [MESSAGE_ALL] (state, {messages}) {
        let latestMessage;
        messages.forEach(message => {
            // create new session if the session doesn't exist
            // let from = message.isMe ? message.to : message.from
            if (message.from === state.username){
                if (!state.sessions[message.to]) {
                    createSession(state, message.to, message.toName)
                }
                Vue.set(message,"isMe",true);
                Vue.set(message,"sent",true);
                Vue.set(message,"timeout",false);
            } else if (!state.sessions[message.from]) {
                createSession(state, message.from, message.fromName)
                Vue.set(message,"isMe",false);
            }
            // mark the latest message
            if (!latestMessage || message.timestamp > latestMessage.timestamp) {
                latestMessage = message
            }
            // add message
            addMessage(state, message)
        })
    },
}



function createSession(state, from, fromName, remark) {
    Vue.set(state.sessions, from, {
        from,
        fromName,
        remark,
        messages: [],
        lastMessage: null,
        unreadMsgCount: 0
    })
}

function addMessage(state, message) {
    console.log("添加message：",message)

    // add a `isRead` field before adding the message
    let from = message.isMe ? message.to : message.from
    message.isRead = from === state.currentFrom
    // add it to the session it belongs to
    const session = state.sessions[from]
    console.log("session:",session)
    if (!session.messages.some(id => id === message.id)) {
        session.messages.push(message.id)
        session.lastMessage = message
        if (!message.isRead) {
            ++session.unreadMsgCount
            ++state.unreadMsgCount
        }
    }
    if (!message.isMe && message.isRead) {
        apis.remarkHasRead(from)
    }

    // add it to the messages map
    Vue.set(state.messages, message.id, message)
}

function setCurrentSession(state, from, remark) {
    state.currentFrom = from
    if (!state.sessions[from]) {
        createSession(state, from, remark)
    }
    // mark session as read
    if (state.sessions[from].lastMessage) {
        state.sessions[from].lastMessage.isRead = true
    }
    state.unreadMsgCount -= state.sessions[from].unreadMsgCount
    if (state.sessions[from].unreadMsgCount > 0) {
        apis.remarkHasRead(from)
    }

    state.sessions[from].unreadMsgCount = 0
}

function login(state, userToken) {
    state.username = userToken.username
    state.token = userToken.accessToken
    state.expiredTime = userToken.expiredTime
    state.gender = userToken.gender
    state.whatUp = userToken.whatUp || ''
    state.realName = userToken.realName || ''
    state.phoneNumber = userToken.phoneNumber || ''
    state.profilePhoto = userToken.profilePhoto || ''

    try {
        localStorage.token = userToken.accessToken
        localStorage.username = userToken.username
        localStorage.expiredTime = userToken.expiredTime
        if (userToken.gender !== null) {
            localStorage.gender = userToken.gender
        }
        if (userToken.whatUp) {
            localStorage.whatUp = userToken.whatUp
        }
        if (userToken.realName) {
            localStorage.realName = userToken.realName
        }
        if (userToken.phoneNumber) {
            localStorage.phoneNumber = userToken.phoneNumber
        }
        if (userToken.profilePhoto) {
            localStorage.profilePhoto = userToken.profilePhoto
        }
    } catch (e) {
        alertTips(state)
    }
}

function logout(state) {
    state.token = ''
    state.username = ''
    state.expiredTime = 0
    state.gender = null
    state.whatUp = ''
    state.realName = ''
    state.phoneNumber = ''
    state.profilePhoto = ''

    state.currentFrom = null
    state.sessions = {}
    state.messages = {}
    state.unreadMsgCount = 0
    state.unreadReqCount = 0
    state.contacts = {}
    state.friendsInfo = {}
    state.requestContacts = []
    state.connected = false
    state.lostConnect = false
    state.unSendMsg = []

    try {
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        localStorage.removeItem('expiredTime')
        localStorage.removeItem('gender')
        localStorage.removeItem('whatUp')
        localStorage.removeItem('realName')
        localStorage.removeItem('phoneNumber')
        localStorage.removeItem('profilePhoto')
    } catch (e) {
        alertTips(state)
    }
}

function alertTips(state) {
    if (!state.isAlertTips) {
        alert('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.');
        state.isAlertTips = true
    }
}
