# 轨迹回放（MoveAnimation) 
轨迹展示组件，使用平滑方式显示轨迹经过的路线

## 示例

<div class="history2">
    <Map  :zoom="13" ref="MAP" id="history2" :center='[116.478935, 39.997761]'>
      <Liner :path="lineArr" />
         <MoveAnimation ref='hMoveAnimation' :lineArr='lineArr' id=''/> 
    </Map>
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="pauseAnimation">暂停动画</el-button>
    <el-button @click="resumeAnimation">继续动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
  </div>

<script setup lang="ts">
import { ref } from "vue";
const lineArr = ref();
const hMoveAnimation = ref();
setTimeout(() => {
  lineArr.value=[[116.478935, 39.997761], [116.478939, 39.997825], [116.478912, 39.998549], [116.478912, 39.998549], [116.478998, 39.998555], [116.478998, 39.998555], [116.479282, 39.99856], [116.479658, 39.998528], [116.480151, 39.998453], [116.480784, 39.998302], [116.480784, 39.998302], [116.481149, 39.998184], [116.481573, 39.997997], [116.481863, 39.997846], [116.482072, 39.997718], [116.482362, 39.997718], [116.483633, 39.998935], [116.48367, 39.998968], [116.484648, 39.999861]]
  
}, 3000);
function startAnimation() {

  hMoveAnimation.value.startAnimation();
}
function pauseAnimation() {
  hMoveAnimation.value.pauseAnimation();
}
function resumeAnimation() {
  hMoveAnimation.value.resumeAnimation();
}
function stopAnimation() {
  hMoveAnimation.value.stopAnimation();
}
function jump() {
  hMoveAnimation.value.startAnimation();
}

</script>

## 基础用法
```html

     <MoveAnimation  :lineArr='[[116.478935, 39.997761], [116.478939, 39.997825], [116.478912, 39.998549], [116.478912, 39.998549], [116.478998, 39.998555], [116.478998, 39.998555], [116.479282, 39.99856], [116.479658, 39.998528], [116.480151, 39.998453], [116.480784, 39.998302], [116.480784, 39.998302], [116.481149, 39.998184], [116.481573, 39.997997], [116.481863, 39.997846], [116.482072, 39.997718], [116.482362, 39.997718], [116.483633, 39.998935], [116.48367, 39.998968], [116.484648, 39.999861]]'/> 

```


::: details 点击查看完整代码
```html


<template>
 <Map  :zoom="13" ref="MAP" id="history2" :center='[116.478935, 39.997761]'>
      <Liner :path="lineArr" />
         <MoveAnimation ref='hMoveAnimation' :lineArr='lineArr' id=''/> 
    </Map>
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="pauseAnimation">暂停动画</el-button>
    <el-button @click="resumeAnimation">继续动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const lineArr = ref();
const hMoveAnimation = ref();
setTimeout(() => {
  lineArr.value=[[116.478935, 39.997761], [116.478939, 39.997825], [116.478912, 39.998549], [116.478912, 39.998549], [116.478998, 39.998555], [116.478998, 39.998555], [116.479282, 39.99856], [116.479658, 39.998528], [116.480151, 39.998453], [116.480784, 39.998302], [116.480784, 39.998302], [116.481149, 39.998184], [116.481573, 39.997997], [116.481863, 39.997846], [116.482072, 39.997718], [116.482362, 39.997718], [116.483633, 39.998935], [116.48367, 39.998968], [116.484648, 39.999861]]
  
}, 3000);
function startAnimation() {

  hMoveAnimation.value.startAnimation();
}
function pauseAnimation() {
  hMoveAnimation.value.pauseAnimation();
}
function resumeAnimation() {
  hMoveAnimation.value.resumeAnimation();
}
function stopAnimation() {
  hMoveAnimation.value.stopAnimation();
}
function jump() {
  hMoveAnimation.value.startAnimation();
}

</script>
```
:::


## MoveAnimation属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| lineArr      | 显示的轨迹，路径 | Array         |    [[lng,lat]]   |[]  
| size      |  图标尺寸 (宽 ,高)    |  Array | -      | [50,50]    
| Icon  |点标记中显示的图标 |    string/null | |null
| offset  |偏移量 |  Array| - |[-13,0]

 
  ## MoveAnimation方法
 
| 方法名       | 说明                    | 参数         
| ----------|-------------|-----       
| startAnimation      |开始动画 | -   
| pauseAnimation      |暂停动画 | -   
| resumeAnimation      |继续动画 | -   
| stopAnimation      |停止动画 | -    
 
