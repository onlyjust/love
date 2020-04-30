import {TOKEN,USER_INFO} from './mutations-type'
import {getStore} from './../config/global'
import {getUserInfo} from './../service/api/index'

import api from '../service/api/websocket'
import * as types from './mutations-type'
export default {

    syncAuthToken({commit},token){
       commit(TOKEN,token);
    },

    // 1. 同步用户信息
    syncUserInfo({commit}, userInfo) {
        commit(USER_INFO, {userInfo})
    },

    // 2. 自动登录
    async reqUserInfo({commit}){
        // 2.1 从本地获取数据
        let token = getStore(TOKEN);
        if (token){
            commit(TOKEN,token);
        } else {
            return;
        }
        let userInfo = JSON.parse(getStore(USER_INFO));
        if(userInfo){
            commit(USER_INFO, {userInfo});
        }else {
            if (token){
                // 2.2 从服务器端验证
                let result = await getUserInfo();
                // console.log(result);
                if(result.success){
                    commit(USER_INFO, {userInfo: result.data});
                }
            }
        }
        let user = {accessToken:token,username:userInfo.userId};
        /*let result = new Promise((resolve, reject) => {
            api.subscribe(user, (connected) => {
                console.log("connected", connected);
                if (connected) {
                    resolve()
                } else {
                    reject()
                }
            })
        })*/
    },


    subscribe_msg({commit}, payload){
        return new Promise((resolve, reject) => {
            api.subscribe(payload, (connected) => {
                if (connected) {
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },

    getContacts({commit}) {
        api.getContacts(contacts => {
            if (contacts) {
                commit(types.GET_CONTACTS, contacts)
                commit(types.CLEAR_FRIEND_INFO)
                for (let index in contacts) {
                    let contact = contacts[index]
                    contact.forEach(c => {
                        if (c.friendInfo) {
                            const friendName = c.friendInfo.username
                            const friendInfo = c.friendInfo
                            friendInfo.remark = c.remark
                            commit(types.GET_FRIEND_INFO, {friendName, friendInfo})
                        }
                    })
                }
            }
        })
    },

    setRemark({commit}, payload) {
        return new Promise((resolve, reject) => {
            api.setRemark(payload, (res) => {
                if (res) {
                    commit(types.SET_MASK, payload)
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },

    setRealName({commit}, payload) {
        api.setRealName(payload, (res) => {
            if (res) {
                commit(types.SET_REAL_NAME, payload)
            }
        })
    },

    setGender ({commit}, payload) {
        api.setGender(payload, (res) => {
            if (res) {
                commit(types.SET_GENDER, payload)
            }
        })
    },

    setWhatUp({commit}, payload){
        api.setWhatUp(payload, (res) => {
            if (res) {
                commit(types.SET_WHAT_UP, payload)
            }
        })
    },

    setProfilePhoto({commit}, payload) {
        return new Promise((resolve, reject) => {
            api.setProfilePhoto(payload, (res) => {
                if (res) {
                    commit(types.SET_PROFILE_PHOTO, payload)
                    resolve()
                } else {
                    reject()
                }
            })
        })
    },

    getUnreadFriendReq({commit}){
        api.getUnreadFriendReq((data) => {
            commit(types.ADD_REQ_CONTACT, data)
        })
    },

    getUnReadMessages({commit}) {
        return new Promise((resolve) => {
            api.getUnReadMessages(messages => {
                if (messages === -1) {
                    resolve(false)
                } else {
                    if (messages && messages.length > 0) {
                        commit(types.RECEIVE_ALL, {messages})
                    }
                    resolve(true)
                }
            })
        })
    },

    getNearbyPeoples({commit}, payload) {
        return new Promise((resolve) => {
            api.getNearbyPeoples(payload, nearbyPeoples => {
                if (nearbyPeoples === -1) {
                    resolve(false)
                } else {
                    if (nearbyPeoples && nearbyPeoples.length > 0) {
                        commit(types.GET_NEARBY_PEOPLE, nearbyPeoples)
                    }
                    resolve(true)
                }
            })
        })
    },

    dealFriendReq ({commit}, payload) {
        return new Promise((resolve) => {
            api.dealFriendReq(payload, (res) => {
                if (res && payload.status !== 4) {
                    commit(types.DEAL_FRIEND_REQ, payload.friendName)
                }
                resolve()
            })
        })
    },

    createSession({commit}, payload) {
        commit(types.CREATE_SESSION, payload)
    },

    onMessage ({commit}, payload) {
        commit(types.RECEIVE_MESSAGE, payload)
    },

    sendMessage ({commit}, payload) {
        api.createMessage(payload, message => {
            commit(types.RECEIVE_MESSAGE, {
                message
            })
        })
    },

    resend ({}, payload) {
        api.resend(payload)
    },

    switchSession({commit}, payload) {
        commit(types.SWITCH_SESSION, payload)
    },

    clearSession ({commit}) {
        commit(types.CLEAR_SESSION)
    },

    logout ({commit}, payload) {
        return new Promise((resolve) => {
            api.disconnect(() => {
                commit(types.LOGOUT, payload)
                resolve()
            })
        })
    }

}
