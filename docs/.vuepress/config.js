import { defineUserConfig, defaultTheme,viteBundler  } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'cv_components_v3',
  description: 'tsp3.0组件库',
  head: [
    [
      'link', { rel: 'icon', href: 'https://hstsp.com/favicon.ico' }
    ]
  ],
 
  theme: defaultTheme({
    home:'/',
    // 在这里进行配置
    navbar: [
      { text: '文档', link: '/guide', },
      { text: 'Github', link: 'https://github.com/Lady-Gao/TSP_Components_npm', },
      { text: 'Author', link: 'https://github.com/Lady-Gao', },
    ],
    sidebar: [//文件夹路径
    {
      text: '指南',
       collapsable: false, // 可选的, 默认值是 true,
       children: [
           '/guide', 
          '/guide/install', 
          '/guide/startedQuickly', 
          '/guide/devlink', 
            '/guide/build', 
      ]
    },
    {
      text: '组件',
      collapsable: false, // 可选的, 默认值是 true,
      children: [
        {
          text: '地图组件',
          link: '/components/amap/Map', 
          collapsable: false,
           children: [
          '/components/amap/Map', 
           '/components/amap/Marker', 
            '/components/amap/Liner', 
           '/components/amap/pathSimplifierIns', 
            '/components/amap/InfoWindow', 
            '/components/amap/MoveAnimation',
           '/components/amap/MouseTool',
           '/components/amap/EditPlugin',
          
          ]
            
        },
        {
          text: '树组件',
          collapsable: false,
          link: '/components/tree/tree',
           children: [
            '/components/tree/tree',
            '/components/tree/treeSearch',
            '/components/tree/treeList',
            '/components/tree/inputLinkTree',
            '/components/tree/treeTab'
          ]
        },
        {
          text: '其他组件',
          collapsable: false,
          link:'/components/other/grid',
          children: [
            '/components/other/grid', 
            '/components/other/operation',
            '/components/other/opretionTool',
            '/components/other/publictreeContent',
           ]
        }
       
      ]
    },
    // {
    //   text: '关于',
    //   collapsable: false, // 可选的, 默认值是 true,
    //   link:'/about/'
    // }
  ],
      // {
      //   text: '关于',
      //   collapsable: false, // 可选的, 默认值是 true,
      //   link:'/about/'
      // }
  }),
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'center',
        },
      },
    },
  }),
})