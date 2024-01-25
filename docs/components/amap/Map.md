# 地图（Map) 
地图组件，封装了地图的属性设置、图层变更、事件交互等接口的类。


## 示例
<Map  :zoom="3" >
</Map>




## 基础用法
```html

  <Map   >
   </Map>
```


::: details 点击查看完整代码
```html
<template>
  <Map :zoom="3" :center='[116.397428, 39.90923]'>
   </Map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const position=ref([116.497428, 39.20923])

</script>
```
:::

## Map属性

| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| name      | 地图名称 | String         |     -   |AMap  
| zoom      | 地图显示的缩放级别范围      |  number | 2-30      | 13     
| center    | 初始中心经纬度             |    Array | - | [116.397428, 39.90923]
| viewMode  |地图视图模式,地图效果 |    string | 2D/3D |2D
| options  |其他初始化地图属性 |    object | - | 
| id        |在同一个页面使用,需要加id区分,不然只会初始化一个|string | -|"mapDom" + Math.random() * 1001
 