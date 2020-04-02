
module.exports = {
    devServer: {
        port: 9090, // 源地址端口
        proxy: {
            '/api': {
              target: 'http://localhost:5000', // 自己改
              ws: true,        //如果要代理 websockets，配置这个参数
              secure: false,  // 如果是https接口，需要配置这个参数
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                '^/api': ''
              }
            }
          },
    }
}