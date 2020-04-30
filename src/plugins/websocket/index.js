import store from '../../store'

export default {
    install(Vue, options) {
        let router = options.router;
        if (!router) return false;
        const un_check_url = ['/login', '/register', '/testRtc','/home'];
        router.beforeEach((to, from, next) => {
            if (!~un_check_url.indexOf(to.fullPath)) {
                if (!store.getters.token) {
                    return next({path: '/login'})
                }
                if (!checkToken()) {
                    store.commit('LOGOUT')
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
                if (checkToken()) {
                    subscribe()
                    return next({path: '/'})
                }
                return next()
            }
        });
        return undefined;
    }
}


function checkToken() {
    // return store.getters.expiredTime && store.getters.expiredTime > Date.now()
    return true;
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
        )
    }
}
