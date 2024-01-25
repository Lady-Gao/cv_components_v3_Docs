# 矢量图形（EditPlugin) 


<Map :zoom="13">
        <EditPlugin
        :type="fenceManageType"
        :edit="edit"
        :overlayOptions="overlayOptions"
        @end='endCallback'
      /> 
    </Map>
    <div>
      <el-button @click="and('polyline')">显示 折线</el-button>
      <el-button @click="and('polygon')"> 显示多边形</el-button>
      <el-button @click="and('rectangle')"> 显示矩形</el-button>
      <el-button @click="and('circle')">显示 圆</el-button>
      <el-button @click="and('marker')">显示点</el-button>
     <el-button @click="changeedit(true)">开启编辑状态</el-button>
       <el-button @click="changeedit(false)">关闭编辑状态</el-button>
        <el-button @click="cleanOverlay">关闭并清除覆盖物</el-button>
    </div>

<script setup lang="ts">
import { ref } from "vue";
const fenceManageType = ref<String>("");
const overlayOptions = ref();
const edit = ref<boolean>(false);
let path = [
  [116.362209, 39.887487],
  [116.422897, 39.878002],
  [116.372105, 39.90651],
  [116.428945, 39.89663],
];


function changeedit(val: boolean) {
  edit.value = val;
}
function cleanOverlay(){
   edit.value =false
  fenceManageType.value=''
}
function and(val: string,flag?:boolean) {
  //编辑打开
  switch (val) {
    case "marker":
      overlayOptions.value = {
        position: [116.428945, 39.89663],
        icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
       
      };
      break;
    case "polyline":
      overlayOptions.value = {
        path,
      };
      break;
    case "polygon":
      overlayOptions.value = {
        path,
      };
      break;
    case "rectangle":
      overlayOptions.value = {
        southWest: [116.356449, 39.859008],
        northEast: [116.417901, 39.893797],
      };
      break;
    case "circle":
      overlayOptions.value = {
        center: [116.433322, 39.900255],
        radius: 1000, //半径
      };
      break;
  }

  fenceManageType.value = val; //更改类型]
   if(flag){
    edit.value=true
  }
}

function endCallback(val:Event){
console.log(val,'endCallback')
}

</script>


#### 基础用法
```html

    <EditPlugin
        type="marker"
        :overlayOptions="{ position: [116.428945, 39.89663]}"
      /> 
```


#### 基础用法


::: details 点击查看完整代码
```html {5}
<template>
   <Map :zoom="13" ref="MAP" id="fenceManage">
       <EditPlugin
        :type="fenceManageType"
        :edit="edit"
        :overlayOptions="overlayOptions"
      /> 
    </Map> 
    <div>
      <el-button @click="showFun('marker')">显示点</el-button>
      <el-button @click="showFun('polyline')">显示 折线</el-button>
      <el-button @click="showFun('polygon')"> 显示多边形</el-button>
      <el-button @click="showFun('rectangle')"> 显示矩形</el-button>
      <el-button @click="showFun('circle')">显示 圆</el-button>
      <el-button @click="changeedit(true)">开启编辑状态</el-button>
      <el-button @click="changeedit(false)">关闭编辑状态</el-button>
      <el-button @click="cleanOverlay">关闭并清除覆盖物</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const fenceManageType = ref<String>("");
const overlayOptions = ref();
const edit=ref(false)

function showFun(val: string) {
  switch (val) {
    case "marker":
      overlayOptions.value = {
        position: [116.428945, 39.89663],
        icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
       
      };
      break;
    case "polyline":
      overlayOptions.value = {
        path,
      };
      break;
    case "polygon":
      overlayOptions.value = {
        path,
      };
      break;
    case "rectangle":
      overlayOptions.value = {
        southWest: [116.356449, 39.859008],
        northEast: [116.417901, 39.893797],
      };
      break;
    case "circle":
      overlayOptions.value = {
        center: [116.433322, 39.900255],
        radius: 1000, //半径
      };
      break;
  }
 
  fenceManageType.value = val; //更改类型]
 
}
//开启编辑状态/关闭编辑状态
function changeedit(val:boolean){
  edit.value=val
}
//关闭并清除覆盖物
function cleanOverlay(){
   edit.value =false
  fenceManageType.value=''
}
</script>
```
:::
<Map :zoom="13" id='demo2'>
       <EditPlugin
        :type="circle"
        :edit="true"
        :overlayOptions="{
        center: [116.433322, 39.900255],
        radius: 1000,
      }"
      /> 
</Map> 


### EditPlugin属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| type      | 操作的矢量图形类型 | string         |  [type](#type属性类型) |marker 
| edit      |是否开启编辑模式      |  boolean | true/false    | false 
|overlayOptions|矢量图形的参数      |  object |-     | -  
 

 
 ### EditPlugin事件
 
| 事件名        | 说明                    | 回调参数         
| ----------|-------------|-----       
| endCallback      |矢量图形编辑结束时之后触发事件 | -    

## type属性类型
| 属性        | 说明                  
| ----------|-------------
| marker      | 点标记 
| polyline      | 折线覆盖物 
| polygon      | 多边形覆盖物 
| rectangle      | 圆形覆盖物 
| circle      | 矩形覆盖物 