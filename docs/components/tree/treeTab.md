# 车辆Tabs组件 (TreeTab)

增加可搜索功能

默认单选模式，监听方法使用 @node-click='nodeClick'

多选模式 :isCheck='true' ，监听方法使用  @node-check="nodeCheck"
## 示例
 



## 基础用法

```html
<!-- 一次性加载到车辆树 -->
  <treeTab :treeData="VehicleTreeInfoList" />

```



::: details 点击查看完整代码
```html
<!-- 异步加载车辆树 -->
<template>
    <treeTab :titles="treeTitle" 
       :lazy="divervehilceApi"
       :vehicleListApi="diverlistsApi"
       :selection="selection"
   :isCollection="false"
          :isOnlineStatus="false"
         vehicleListName="text"
         :otherParam="{categories:'2'}"
         @node-click='nodeClick'
        />
</template>
<script setup lang="ts">
  const treeTitle=['车辆树', '车辆列表',false ]
  const lazy="/basic/tree/findVehicleTreeInfoList"
   const diverlistsApi= "/basic/driver/findDriverMenuPage"
  const divervehilceApi='/basic/sysEnterprise/findEnterpriseTreeDriverList'
  const selection =[
        { label: "司机姓名", value: "username" },
        { label: "components.common.company", value: "enterpriseName" },
        { label: "components.common.plateCode", value: "plateCode" },
      ]
 
  function nodeClick(mess:{}){
    console.log(mess,'nodeClick')
  }
</script>
```
::: 




## TreeTab属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|titles      | 在线离线数据| array       |     -   |-
|selection      | 搜索下拉数据 | array       |     -   |[] 
|treeData      | 树的初始化数据 | array     |     -   |[] 
|name      | 车辆树显示节点时,将返回的text作为节点名称      |  string | -     | 'plateCode'
|vehicleListName      | 车辆列表列表显示节点时,将返回的text作为节点名称| array       |     -   |-
|showIcon      | 在线离线数据| array       |     -   |-
|isCheck      | 是否多选 | boolean  |-|true 
|isOnlineStatus      | 是否显示在线离线搜索条件      |  boolean | -     | true
|isCollection      | 是否显示收藏五角星 | boolean       |     -   |true 
|isVideo      | 是否展示视频摄像头 | boolean       |     -   |false
|lazy | 需要异步加载时传入的树的接口 | string       |     -   | 
|type      | 树的异步请求方式      |  string | -     |  'get'
|autoParam      | 异步加载时(点击节点)需要 自动提交父节点属性的参数|  array | -     |  ["id", "type"]
|otherParam      | 增加树基础传参 除了autoParam以外的参数 在这里传 | array       |     -   |[] 
|vehicleListApi      |车辆列表 搜索接口url | string     |     -   |-
|vehicleAttentionApi      |  车辆关注 搜索接口url  | string     |     -   |/basic/vehicle/insertVehicleAttentionInfo





  
 ## TreeTab事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| tree-loaded    |获取到data数据的回调| -  
| tree-ready     |树接受异步数据加载完成的回调| -    
| node-click     |  点击节点时触发，返回当前选中车辆数据对象| treeNode:{click:选中状态}
| node-check     |多选模式下，勾选和取消时触发，返回当前点击的所有车辆对象 |type,[treeNode,treeNode,treeNode... ]    
| checked-list     |多选模式下，勾选时触发,返回选中的所有车辆id数组 |[id,id,id...]   




