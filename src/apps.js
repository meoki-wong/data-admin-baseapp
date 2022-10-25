const microApps = [
    {
        name: 'data-admin', // app name registered
        entry: 'https://localhost:8000',
        container: '#blog-root',
        activeRule: '/react',
        // props: { // 传值给子应用
        //   routerBase: '/react'
        // }
      },
      {
        name: 'vue-admin', // app name registered
        entry: '//localhost:9527',
        container: '#vue-admin-root',
        activeRule: '/vue',
        
        // props: { // 传值给子应用
        //   routerBase: '/react'
        // }
      }
]



export default microApps 