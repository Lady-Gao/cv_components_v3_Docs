# 车辆列表（TreeList）

增加可搜索功能
## 示例
 



## 基础用法

```html
  <treeList  :ListApi="ListApi1" :isCollection="true"  :isEdit="true" :isDelete="true" 
    :collectionApi="collectionApi" :uncollectionApi="uncollectionApi"
   @clcik_collection='clcik_collection'/>

```



::: details 点击查看完整代码
```html
<template>
    <treeList  :ListApi="ListApi1" 
            :isCollection="true" :collectionApi="collectionApi" :uncollectionApi="uncollectionApi"
             @clcik_collection='clcik_collection'/>
</template>

<script setup lang="ts">
import { ref } from "vue";
const ListApi1='/basic/tree/getVehicleListByPlate'   
const collectionApi='/basic/vehicle/insertVehicleAttentionInfo'
const uncollectionApi='/basic/vehicle/deleteVehicleAttentionInfo' 
 // 收藏事件
function clcik_collection(row:{}){
}
// 编辑事件
function clcik_edit(row:{}){
}
// 删除事件
function clcik_delete(row:{}){
}
</script>
```
::: 




## TreeList属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|ListApi      | 搜索接口url | string     |     -   |-
|collectionApi      | 收藏接口url  | string     |     -   |/basic/vehicle/insertVehicleAttentionInfo
|uncollectionApi      | 取消收藏接口url | string     |     -   |/basic/vehicle/deleteVehicleAttentionInfo
|isCheck      | 是否多选 | boolean  |-|true 
|isOnlineStatus      | 是否显示在线离线搜索条件      |  boolean | -     | true
|isCollection      | 是否显示收藏五角星 | boolean       |     -   |true 
|isEdit | 是否显示收藏五角星 | boolean       |     -   | false
|isDelete      | 是否显示删除按钮|  boolean | -     | false
|selection      | 搜索下拉数据 | array       |     -   |[] 
|onlinection      | 在线离线数据| array       |     -   |-
|name      | 显示节点名称      |  string | -     | 'plateCode'
|otherParam      | 额外的参数 在这里传  | object       |     -   |-
|isVideo      | 是否展示视频摄像头 | boolean       |     -   |false





  
 ## TreeList事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| clcik_collection     |点击收藏/编辑图标时触发 | -    
| clcik_delete     |  点击删除图标时触发| -    
| node-click     |用于捕获节点被点击的事件回调函数 |treeNode：{click:是否选中}  
| node-check     |多选模式下，勾选和取消时触发，返回当前点击的所有车辆对象 |type,[treeNode]   
| current-change     |多选模式下，勾选时触发 |checked,[id,id,id.... ]    



