# 折线（Liner) 
折线组件


## 示例
 <Map :center='[113.001181,23.120518]'>
     <Liner :path="path" ref='LinerRef' :options="{ strokeWeight: 8, strokeColor: '#AF5' }"/>
   </Map>
<el-button @click="addLiner">添加Liner</el-button>
<el-button @click="movemLiner">修改Liner</el-button>
<el-button @click="removemLiner">删除Liner</el-button>

<script setup lang="ts">
import {ref } from "vue";

const path = ref()
const LinerRef=ref()
//添加marker
function addLiner(){
path.value=[
       [113.001181,23.120518],
        [112.985037,23.15046],
        [113.890205,22.798043],
        [110.361899,20.026695],
        [113.682288,34.618975],
        [121.434529,31.215641],
        [109.488707,18.309754],
        [120.682502,28.011099],
        [120.68556,30.912366],
        [126.687123,45.787618],
        [120.48506,30.053066],
        [103.970724,30.397931],
        [117.270073,37.96162],
        [117.212164,31.831641],
        [120.256218,31.882242]
     ]

}
//清空
function removemLiner(){
path.value=[]
}
//修改
function movemLiner(){
  if(!path.value)return alert('请先添加')
 path.value= [
    [113.001181,23.120518],
        [112.985037,23.15046],
        [110.361899,20.026695],
        [113.682288,34.618975],
        [109.488707,18.309754],
        [120.682502,28.011099],
        [126.687123,45.787618],
        [103.970724,30.397931],
        [117.270073,37.96162],
        [120.256218,31.882242]
  ]
}
</script>


## 基础用法

```html

    <Liner :path="[[111.497428, 39.20923],[125.397428, 37.20923]]" />

```


::: details 点击查看完整代码
```html
<template>
  <Map :center='[111.497428, 39.20923]'>
     <Liner :path="path" :options='options'/>
   </Map>
</template>

<script setup lang="ts">
import { ref } from "vue";

const path=ref([
  [113.001181,23.120518],
        [112.985037,23.15046],
        [113.890205,22.798043],
        [110.361899,20.026695],
        [113.682288,34.618975],
        [121.434529,31.215641],
        [109.488707,18.309754],
        [120.682502,28.011099],
        [120.68556,30.912366],
        [126.687123,45.787618],
        [120.48506,30.053066],
        [103.970724,30.397931],
        [117.270073,37.96162],
        [117.212164,31.831641],
        [120.256218,31.882242]
  ])

const options ={
          borderWeight: 2, // 线条宽度，默认为 1
          strokeColor: 'red', // 线条颜色
          lineJoin: 'round' // 折线拐点连接处样式
        } 
</script>
```
:::



## Liner属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| path      | polyline 路径 | array       |     -   |[] 
| options      | 线条的属性配置      |  object | -     | [options](#options属性参数)


##Liner方法
| 方法名        | 说明                    |参数         
| ----------|-------------|-----       
| removeLiner      |移除Liner对象 | 

  
 ## Liner事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| click      |鼠标左键单击事件 | -    


## options属性参数
```js
options:{
          borderWeight: 2, // 线条宽度，默认为 1
          strokeColor: "#28F", // 线条颜色
          strokeWeight: 6,//轮廓线宽度
          strokeOpacity: 0.8,     //线透明度
          ...
        }  
```
