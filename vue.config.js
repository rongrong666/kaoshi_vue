module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '^/api1': {
        target: 'https://dijia.rounddigit.cn/fks',//接口的前缀
        changeOrigin:true,//虚拟的站点需要更管origin
        pathRewrite:{
          '^/api1':'/'//重写路径
        }
      }
    }
  },
}
