module.exports = {
    publicPath: '/',
    devServer:{
        proxy:{
            '/api':{
                // target: 'http://39.97.33.178',
                target: 'http://127.0.0.1:8089',
                changeOrigin: true
            }
        }
    }
}
