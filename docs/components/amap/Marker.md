#  点标记 (Marker)
用于在地图上添加点状地图要素的类型
## 示例
<div>

<Map  :zoom="3" >
    <Marker  
        :size='[50,50]'
        :id="myMarker.id"
        :position="myMarker.position"
        :Icon="myMarker.icon"
        ref='markerRef'
        />
</Map>
<el-button @click="addMarker">添加marker</el-button>
<el-button @click="removemMarker">删除marker</el-button>
<el-button @click="movemMarker">移动marker</el-button>
</div>

<script setup lang="ts">
import {ref } from "vue";

const myMarker = ref({})
const markerRef=ref()
//添加marker
function addMarker(){
myMarker.value={ 
        id:1,
        position: [111.497428, 39.20923],
        icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
    }

}
//删除marker
function removemMarker(){
  myMarker.value.position=[]
// markerRef.value.removeMarker()
}

//移动
function movemMarker(){
    if(!myMarker.value.id)return alert('请先添加')
  myMarker.value.position=[111.237428, 39.30923]
}
</script>




## 基础用法

```html

    <Marker :position="[116.497428, 39.20923]"  :size='[50,50]' Icon='https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png' />
  
```


::: details 点击查看完整代码
```html
<template>
  <Map  >
    <Marker   
        v-for="item in MarkerList"
        :key="item.id" 
        :size='[50,50]'
        :id="item.id"
        :position="item.position"
        :Icon="item.icon"
        />
   </Map>
</template>

<script setup lang="ts">
import {reactive } from "vue";

const MarkerList = reactive([
    { 
        id:0,
        position: [113.597428, 36.20923],
        icon: null,
    },
      { 
        id:1,
        position: [111.497428, 39.20923],
        icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
    },
      { 
        id:2,
        position: [124.697428, 29.280923],
        icon: null,
    },
])
</script>
```
:::


## Marker属性
| 属性   | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| position      | 点标记在地图上显示的位置 | String         |     [lng,lat]   | []
| size      |  图标尺寸 (宽 ,高)    |  Array | -      | [32,32]    
| id    | 初始中心经纬度             |    Array | - | [116.397428, 39.90923]
| Icon  |点标记中显示的图标 |    string/null | |null
| usemoveTransform  |是否使用平滑移动 |    boolean | true/false |false
| offset  |偏移量 |  Array| - |[-13,0]
   
## Marker方法
| 方法名        | 说明                    |参数         
| ----------|-------------|-----       
| removeMarker      |移除marker对象 | 

#### Marker事件
| 事件名        | 说明                    | 回调参数         
| ----------|-------------|-----       
| click      |鼠标左键单击事件 | {id,lnglat} 
| moving      |点标记在执行moveTo动画时触发事件 | {id,lnglat}

