
import ElementPlus from 'element-plus'
import cv_amapv3 from 'cv_amapv3'
import 'element-plus/dist/index.css'
// export default defineClientAppEnhance(({ app, router, siteData,isServer }) => {
//         app.use(ElementPlus);
//         app.use(cv_amapv3);
// })
import { defineClientConfig } from '@vuepress/client'
console.log(787777)
export default defineClientConfig({
  enhance({ app, router, siteData }) {
        app.use(ElementPlus);
        app.use(cv_amapv3);
  },
  setup() {},
  rootComponents: [],
})