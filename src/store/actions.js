import {TOKEN,USER_INFO} from './mutations-type'
import {getStore} from './../config/global'
import {getUserInfo} from './../service/api/index'

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
    }
}
