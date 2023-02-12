
/**
 * 
 * development环境  entry设置为//localhost:端口形式
 * production环境  entry设置为路由形式
 */

const microApps = [
  // 主应用  react
    {
        name: 'data-admin', // app name registered
        entry: '//localhost:8000',
        // entry: '/blog/',
        container: '#blog-root',
        activeRule: '/react',
        // props: { // 传值给子应用
        //   routerBase: '/react'
        // }
      },
      // 后台管理
      {
        name: 'vue-admin', // app name registered
        entry: '//localhost:9000',
        // entry: '/blog-admin/',
        container: '#vue-admin-root',
        activeRule: '/vue',
        
        // props: { // 传值给子应用
        //   routerBase: '/react'
        // }
      },
      // 子应用 通过上传文件获取文件md
      {
        name: 'blog-note', // app name registered
        entry: '//localhost:8080',
        // entry: '/blog-admin/',
        container: '#vue-blog-root',
        activeRule: '/vue-blog',
        
        // props: { // 传值给子应用
        //   routerBase: '/react'
        // }
      }
]



export default microApps 