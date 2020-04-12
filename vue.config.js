module.exports = {
    publicPath: '/',
    devServer:{
        proxy:{
            '/api':{
                // target: 'http://api.51vipyuan.com',
                target: 'http://127.0.0.1:8089',
                changeOrigin: true
            }
        }
    }
}
