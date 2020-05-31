import store from '../../store'

export default {
    install(Vue, options) {
        let router = options.router;
        if (!router) return false;
        let un_check_url = ['/login'];
        router.beforeEach((to, from, next) => {
            console.log("to_path:",to.fullPath);
            console.log("indexOf:",un_check_url.indexOf(to.fullPath));
            console.log("indexOf:",~un_check_url.indexOf(to.fullPath));
            console.log("indexOf:",!~un_check_url.indexOf(to.fullPath));
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
    if (store.getters.connected || store.getters.currentMessages) {
        // 获取所有消息列表
        store.dispatch('getMessageList').catch(() => {

        });
    }
}
