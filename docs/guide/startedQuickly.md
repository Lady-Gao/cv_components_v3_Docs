# 快速上手
::: warning 前提条件
vue3.0以上版本
:::

```JS
import { createApp } from 'vue'
import App from './App.vue'
import CVcomponentsV3 from 'cv_components_v3'

createApp(App)
        ... 
    .use(CVcomponentsV3)
    .mount('#app')
```