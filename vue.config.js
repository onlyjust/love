module.exports = {
    publicPath: '/',
    devServer:{
        disableHostCheck: true,
        proxy:{
            '/api':{
                // target: 'http://api.51vipyuan.com',
                target: 'http://127.0.0.1:8089',
                changeOrigin: true,
                ws: false,
                secure: false,
            },
            '/webchat':{
                target: 'http://127.0.0.1:8089',
                changeOrigin: true,
                ws: false,
                secure: false,
            }
        }
    }
}
