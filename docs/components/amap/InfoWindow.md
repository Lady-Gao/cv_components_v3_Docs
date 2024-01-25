# 信息窗体（InfoWindow) 
信息窗体组件

<Map  :center='[111.497428, 39.20923]'>
      <InfoWindow
        :position="[111.497428, 39.20923]"
         content="<i style='color:red'>Hi</i> <div >这里展示内容</div>"
      />
</Map>

## 基础用法
```html

    <InfoWindow
        :position="[111.497428, 39.20923]"
         content="<div ><i style='color:red'>Hi</i>这里展示内容</div>"
      />

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


## InfoWindow属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| position      | 在地图上显示的位置信息 | Array         |    [lng,lat]   |[]  
| content      |信息窗体外框中显示content内容      |  string |-     | -  

 
  ## InfoWindow方法
 
| 方法名       | 说明                    | 参数         
| ----------|-------------|-----       
| close      |关闭信息窗体 | -    
 
 ## InfoWindow事件
 
| 事件名        | 说明                    | 回调参数         
| ----------|-------------|-----       
| close      |信息窗体关闭之后触发事件 | -    