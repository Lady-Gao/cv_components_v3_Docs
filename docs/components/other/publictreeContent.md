# 车辆布局组件 (PublictreeContent)

可收缩从侧边组件

默认单选模式，监听方法使用 @node-click='nodeClick'

多选模式 :isCheck='true' ，监听方法使用  @node-check="nodeCheck"

## 示例



## 基础用法

```html
  <PublicTreeContent :treeData="VehicleTreeInfoList"  @node-click='nodeClick'>
   </PublicTreeContent>

```



::: details 点击查看完整代码
```html
<template>
   <PublicTreeContent :treeData="VehicleTreeInfoList">
            <Operation :powerTool="powerTool1">
                <el-form-item label="起止时间">
                    <el-input v-model="formInline" placeholder="Approved" />
                    </el-form-item>
                     <el-form-item label="姓名">
                    <el-input v-model="formInline" placeholder="Approved" />
                    </el-form-item>
                <template #header>
                    <el-form-item label="报警类型">
                    <el-select v-model="formInline" placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                    </el-form-item>
                </template>
            </Operation>
  
        <template #main>
         

                <grid :data="tableData" class="bgr" :renderArr="columnList" >
  <el-table-column prop="date" label="Date" width="180"  align="center"  header-align="center"/>
    <template #opertion>
  
     <el-table-column   label="操作" width="180"  align="center"  header-align="center" >
         <el-button>dr</el-button>
         </el-table-column>
           </template>
            </grid> 
           
        </template> 
        </PublicTreeContent>
</template>

<script setup lang="ts">
  import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
import { ref } from 'vue';
   const {VehicleTreeInfoList}=findVehicleTreeInfoList
   const powerTool=["deactivate", "add", "export", "offline", "remove", "unbind", "replace", "modify", "import", "modifycomp", "modifyplat"]
     const formInline=ref()
 const powerTool1=["add","modify","import"]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
 
]
const columnList=ref([
        { label: 'label', prop: "name" },
        { label: 'labelmber', prop: "address" },
        { label: 'labelcE', rop: "date" },
        { label: 'labeltecode', prop: "terminalCode",width:120 },
        { label: 'labelc', prop: "realMobileCode" },
        { label: 'labelus', prop: "isLogout",formatter:filterLogStuas },
])
function filterLogStuas(item:{}){
console.log(item)
}
 
</script>
<style lang="scss" scoped>
.publictreeContentView{
    height: 100%;
    position: relative;
    .header{
        height:65px;
    }
  
}
</style>
```
::: 




## PublictreeContent属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|treeData      | 树的初始化数据 | array     |     -   |[] 
|name      | 显示节点时,将返回的text作为节点名称      |  string | -     | 'text'
|isCheck      | 是否多选 | boolean  |-|true 
|lazy | 需要异步加载时传入的树的接口 | string       |     -   | 
|autoParam      | 异步加载时(点击节点)需要 自动提交父节点属性的参数|  array | -     |  ["id", "type"]
|otherParam      | 增加树基础传参 除了autoParam以外的参数 在这里传 | array       |     -   |[] 
|isVideo      | 是否展示视频摄像头 | boolean       |     -   |false




  
 ## PublictreeContent事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| tree-loaded    |获取到data数据的回调| -  
| tree-ready     |树接受异步数据加载完成的回调| -    
| node-click     |  点击节点时触发，返回当前选中车辆数据对象| treeNode:{click:选中状态}
| node-check     |多选模式下，勾选和取消时触发，返回当前点击的所有车辆对象 |type,[treeNode,treeNode,treeNode... ]    
| checked-list     |多选模式下，勾选时触发,返回选中的所有车辆id数组 |[id,id,id...]   

## PublictreeContentOperation插槽
| 插槽名        | 说明                   
| ----------|-------------    
| -      |自定义默认内容    
