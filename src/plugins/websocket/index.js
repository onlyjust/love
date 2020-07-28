import store from '../../store'
import {isIOS,requestWxStr} from "../wx";


export default {
    install(Vue, options) {
        let router = options.router;
        if (!router) return false;
        let un_check_url = ['/login'];
        router.beforeEach((to, from, next) => {
            /*var u = navigator.userAgent;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isiOS && to.path !== location.pathname) {
                // 此处不可使用location.replace
                location.assign(to.fullPath)
            }*/
            if (isIOS()) {
                if (from.path === '/') {
                    console.log("to.path",to.path,"location.pathname",location.pathname);
                    if (to.path !== location.pathname) {
                        // 此处不可使用location.replace
                        location.assign(to.fullPath)
                    }
                    requestWxStr() //该函数和之前一样，被单独提取出来了
                }
            }
            /*路由发生改变修改页面的title */
            if(to.meta.title) {
                document.title = to.meta.title
            }
            console.log("to_path:",to.fullPath);
            console.log("indexOf:",un_check_url.indexOf(to.fullPath));
            console.log("indexOf:",~un_check_url.indexOf(to.fullPath));
            console.log("indexOf:",!~un_check_url.indexOf(to.fullPath));
            console.log("tourist:",!to.fullPath.indexOf("/tourist/"));
            if (!to.fullPath.indexOf("/tourist/")){
                return next();
            }
            if (!~un_check_url.indexOf(to.fullPath)) {
                if (!store.getters.token) {
                    return next({path: '/login'})
                } else {
                    subscribe()
                    if (from.fullPath === '/chat') {
                        store.dispatch('clearSession').then(
                            () => {
                                return next()
                            }
                        )
                    } else {
                        return next()
                    }
                }
            } else {
                console.log("to_path1111:",to.fullPath)
                if (checkToken()) {
                    subscribe()
                    return next({path: '/default'})
                }
                return next()
            }
        });
        return undefined;
    }
}


function checkToken() {
    // return store.getters.expiredTime && store.getters.expiredTime > Date.now()
    return false;
}

function subscribe() {
    if (!store.getters.connected) {
        store.dispatch('subscribe_msg',
            {
                accessToken: store.getters.token,
                username: store.getters.username
            }
        ).catch(
            () => {
                //ignore
            }
        );
    }
    if (store.getters.connected && (!store.getters.currentMessages || store.getters.currentMessages.length == 0)) {
        console.log('store.getters.currentMessages',store.getters.currentMessages)
        // 获取所有消息列表
        store.dispatch('getMessageList').catch(() => {

        });
    }
}
