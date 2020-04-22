import {
    TOKEN,
    USER_INFO,
    INIT_USER_INFO,
    RESET_USER_INFO
} from './mutations-type'

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
    }
}
