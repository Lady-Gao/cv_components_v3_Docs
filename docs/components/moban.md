# 折线（Liner) 
折线组件


## 示例
 <Map :center='[113.001181,23.120518]'>
   </Map>

## 基础用法

```html

    <Liner :path="[[111.497428, 39.20923],[125.397428, 37.20923]]" />

```


::: details 点击查看完整代码
```html
<template>
   <Map >
      <InfoWindow
        :position="position"
        :content="content"
       @close="InfoWindowclose"
      />
   </Map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const path=ref([111.497428, 39.20923])
const content=ref('文字展示')

/**
 * 监听弹框关闭
 * 
 */
function InfoWindowclose(){

}
</script>
```
:::



## Liner属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| path      | polyline 路径 | array       |     -   |[] 
| options      | 线条的属性配置      |  object | -     |  {}




  
 ## Liner事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| click      |鼠标左键单击事件 | -    



