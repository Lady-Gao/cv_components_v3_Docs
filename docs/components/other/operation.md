# 头部权限（Operation）

基于OpretionTool封装的组件

一般用于表单的搜索，并带有权限，显示相应的按钮



## 基础用法

```html

  <Operation :powerTool="powerTool" :isSearch="true" @search="search" />

```



::: details 点击查看完整代码
```html
<template>
    <Operation :powerTool="powerTool" :isSearch="true" 
    @search="search" @import="importL" @add="add" @modify="modify" @export="exportL">
                <el-form-item label="起止时间">
                    <el-input v-model="formInline.time" placeholder="Approved" />
                    </el-form-item>
                     <el-form-item label="姓名">
                    <el-input v-model="formInline.name" placeholder="Approved" />
                    </el-form-item>
                <template #header>
                    <el-form-item label="报警类型">
                    <el-select v-model="formInline.type" placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                    </el-form-item>
                </template>
            </Operation>
   
</template>

<script setup lang="ts">
import { ref } from "vue";
 const powerTool=["add","import","export"]
 const formInline=reactive({
     time:"",
     name:"",
     type:""
 })
function search(){
  console.log('search-')
}
function add(){
  console.log('add-')
}
function modify(){
  console.log('modify-')
}
function importL(){
  console.log('import-')
}
function exportL(){
  console.log('exportL-')
}

</script>
```
::: 




## Operation属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|span      | 对搜索条件和按钮的分配比例 | array     |     -   |[16,8]
|isSearch      | 是否显示搜索按钮 | boolean     |     -   |true
|searchLoading      | 搜索按钮的loading | boolean     |     -   |false
|powerTool      | 所有按钮的权限(不包括搜索按钮) | array     |     -   |[]



  
 ## Operation事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| search   |搜索|-
| add      |添加|-
| import   |导入|-
| export   |导出|-

## Operation插槽
| 插槽名        | 说明                   
| ----------|-------------  
| -      |自定义默认内容  
|header      |展示折叠收起，折叠里的内容