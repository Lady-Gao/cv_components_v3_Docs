# 巡航器（PathSimplifierIns) 

PathSimplifier是一个轨迹展示组件




## 轨迹回放

### 轨迹示例


  <div class="history">
    <Map  :zoom="3" ref="MAP" id="history">
      <PathSimplifierIns ref="pRef" :position="hisdata"   model="history"  />
    </Map>
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="pauseAnimation">暂停动画</el-button>
    <el-button @click="resumeAnimation">继续动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
    
  </div>

<script setup lang="ts">
import { ref } from "vue";
let icon1='https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png'
let icon2 ='https://fs.cvtsp.com/images-shihang-login.png'
const hisdata=ref([
  { point: [111.497428, 39.20923], icon: icon2 },
  { point: [116.497428, 21.20923], icon: icon1 },
  { point: [113.597428, 36.20923], icon: icon2 },
  { point: [124.697428, 29.280923], icon: icon1 },
  { point: [125.397428, 37.20923], icon: icon2 },
])
const pRef=ref()
function startAnimation() {
 pRef.value.start()
}
function pauseAnimation() {
  pRef.value.pause()
}
function resumeAnimation() {
    pRef.value.resume()
}
function stopAnimation() {
  pRef.value.stop()
}
</script>




### 基础用法


```html

<Map id='his2'  :zoom="6" :center='[116.497428, 39.20923]'>
    <PathSimplifierIns model="history"
      icon='https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png'
      :position="[[116.497428, 39.20923],[113.597428, 36.20923],[115.397428, 37.20923],]"
         />
</Map>

```

::: details 点击查看完整代码
```html
  <template class="history">
    <Map  :zoom="3" ref="MAP" id="history">
      <PathSimplifierIns ref="pRef" :position="hisdata"   model="history"  />
    </Map>
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="pauseAnimation">暂停动画</el-button>
    <el-button @click="resumeAnimation">继续动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
  </template>

<script setup lang="ts">
import { ref } from "vue";
let icon1='https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png'
let icon2 ='https://fs.cvtsp.com/images-shihang-login.png'
const hisdata=ref([
  { point: [111.497428, 39.20923], icon: icon2 },
  { point: [116.497428, 21.20923], icon: icon1 },
  { point: [113.597428, 36.20923], icon: icon2 },
  { point: [124.697428, 29.280923], icon: icon1 },
  { point: [125.397428, 37.20923], icon: icon2 },
])
const pRef=ref()
function startAnimation() {
 pRef.value.start()
}
function pauseAnimation() {
  pRef.value.pause()
}
function resumeAnimation() {
    pRef.value.resume()
}
function stopAnimation() {
  pRef.value.stop()
}
</script>
```
:::


### position两种传入方式
#### 方式一
轨迹更新时，图标也需要更新时适用此方式
```html
 <PathSimplifierIns 
    model="history" 
   :position="[
    { point: [111.497428, 39.20923], icon: icon2 },
    { point: [116.497428, 21.20923], icon: icon1 },
    { point: [113.597428, 36.20923], icon: icon2 },
    { point: [124.697428, 29.280923], icon: icon1 },
    { point: [125.397428, 37.20923], icon: icon2 },
  ]" 
   />
```
#### 方式二
适用于图标不变的场景
```html
 <PathSimplifierIns 
    model="history" 
   :position="[ [111.497428, 39.20923], [116.497428, 21.20923], [125.397428, 37.20923] ]" 
   :icon= icon2
   />
```


## 动态巡航 

###  [动态巡航示例](./PathSimplifierIns_realTime.md)




### 基础用法

```html

   <PathSimplifierIns    
     model='realTime' 
    :position='[116.497428, 39.20923]' 
    :icon='realTimeDataIcon'   
   />

```


::: details 点击查看完整代码
```html
<template>
  <Map  :zoom="3" ref="MAP" id="realTime">
     <PathSimplifierIns ref="realTimeRef" :id='currentMarkerId' :position='realTimeData.position' :icon='realTimeData.icon'   model='realTime'/>
    </Map>
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
</template>

<script setup lang="ts">
import { ref ,reactive} from "vue";
let icon1='https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png'
let icon2 ='https://fs.cvtsp.com/images-shihang-login.png'
 const listPoints=[
        [113.864691,22.942327],
        [120.412618,36.382612],
        [113.370643,22.938827],
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
 ]
 const realTimeData=reactive({
  position:[],
    icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
    id: 1,
})
const realTimeRef=ref()

const stop=ref(false)

function startAnimation(){
  stop.value=true
 loop()
}
function loop(){
   if(!stop.value)return
  setTimeout(() => {
    let num = Math.floor(Math.random() * 30);
    realTimeData.position = listPoints[num]; //更换位置
  loop()
  console.log('ss')
}, 1000);
}
function stopAnimation() {
  stop.value=false
}
</script>
```
:::




## PathSimplifierIns属性

| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| model      | 巡航方式（realTime实时/history轨迹） | string         |    realTime/ history  |realTime  
| position  |位置信息（model为realTime，改值为单数组，model为history，数组对象或者双重数组）|    Array |  []
| icon      | 巡航图标      |  string | -     | -    
| id        |巡航器更换标识，id改变，将重置巡航器|string | -|-
|speed| 巡航速度，单位千米/小时|number | -|0



## PathSimplifierIns事件

| 事件名        | 说明                    | 回调参数         
| ----------|-------------|-----       
| moveing      | 移动时的触发 | [lng, lat]    
| pointClick      |鼠标点击节点区域时触发  | event , info （相关的轨迹信息）