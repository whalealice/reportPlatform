
module.exports = {
    devServer: {
        port: 9090,
        host: '0.0.0.0',
        proxy: {
            '/api': {
              target: 'http://yapi.demo.qunar.com/mock/94257',
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