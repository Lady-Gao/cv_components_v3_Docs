# 鼠标工具（MouseTool) 

通过用户在地图图面的鼠标操作，绘制相应的点、线、面覆盖物；

::: warning 提示
请在示例上点击！绘制多边形，并以双击结束
:::



## 示例

<div>
<Map :zoom="13" ref="MAP" id="fenceManage">
      <MouseTool :type='fenceManageType' ref='MapToolRef' @draw='draw' />
    </Map>
    <div>
      <el-button @click="change('polyline')"> 画折线</el-button>
      <el-button @click="change('polygon')"> 画多边形</el-button>
      <el-button @click="change('rectangle')"> 画矩形</el-button>
      <el-button @click="change('circle')"> 画圆</el-button>
      <el-button @click="change('marker')">画点</el-button>
      <el-button @click="remove"> 清除 </el-button>
      <el-button @click="close"> 关闭绘制 </el-button>
    </div>
</div>

<script setup lang="ts">
import { ref } from "vue";
const fenceManageType = ref<String>("");
const MapToolRef = ref();

function change(val: String) {
  fenceManageType.value = val;
}

function draw(val:any){
  console.log(val,'draw')
}

function remove() {
  MapToolRef.value.remove();
}

function close() {
  MapToolRef.value.close(false);
}
</script>

## 基础用法
```html

    <MouseTool type='marker' />

```


::: details 点击查看完整代码
```html
<template>
  <Map >
       <MouseTool :type='fenceManageType' ref='MouseToolRef' />
   </Map>

    <div>
      <el-button @click="changeType('marker')">画点</el-button>
      <el-button @click="changeType('polyline')"> 画折线</el-button>
      <el-button @click="changeType('polygon')"> 画多边形</el-button>
      <el-button @click="changeType('rectangle')"> 画矩形</el-button>
      <el-button @click="changeType('circle')"> 画圆</el-button>
      <el-button @click="remove"> 清除 </el-button>
      <el-button @click="close"> 关闭绘制 </el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fenceManageType = ref<String>("marker");
const MouseToolRef = ref();
//更改类型
function changeType(val: string) {
  fenceManageType.value = val; 
}
//清除
function remove() {
  MouseToolRef.value.remove();
}
//关闭绘制
function close() {
  MouseToolRef.value.close();
}
</script>
```
:::

 

## MouseTool属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| type      | 操作的矢量图形类型 | string       | [type类型](#mousetool属性-type类型) |  marker




## MouseTool方法
 
| 方法名       | 说明                    | 参数         
| ----------|-------------|-----       
|remove|清除所有绘制覆盖物 | -    
| close     |结束绘制 | -    true:清除覆盖物，false:不清除覆盖物

 
## MouseTool事件
 
| 事件名        | 说明                    | 回调参数         
| ----------|-------------|-----       
| draw      |鼠标工具绘制覆盖物结束时触发此事件 | obj(当前绘制对象),overlays(所有绘制的对象数组)     


 ## MouseTool属性-type类型
| 属性        | 说明                  
| ----------|-------------
| marker      | 点标记 
| polyline      | 折线覆盖物 
| polygon      | 多边形覆盖物 
| rectangle      | 圆形覆盖物 
| circle      | 矩形覆盖物 