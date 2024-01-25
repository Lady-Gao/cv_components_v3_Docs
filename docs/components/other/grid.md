# 表格（Grid）

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。



## 基础用法

```html

   <grid :data="tableData"  :renderArr="columnList" >
   </grid> 

```



::: details 点击查看完整代码
```html
<template>
   <grid :data="tableData" v-loading="loading"  :renderArr="columnList" >
    </grid> 
</template>

<script setup lang="ts">
import { ref } from "vue";
const tableData = ref({})
const loading = ref(true)
const columnList=ref([
        { label: 'plateCode', prop: "plateCode",filter:true,},
        { label: '所属公司', prop: "enterpriseName",filter_input:true},
        { label: '车牌頗色', prop: "plateColorName",filter:true,filters:filter},
        { label: '持续时间', prop: "alarmDurationStr",sortable:true},
        { label: '报警类型', prop: "alarmTypeName"},
        { label: '在线状态', prop: "isLogout",filter:true,
        formatter:filterLogStuas,
        filtertext:LogStuasfiltertext
     },
])
function filterLogStuas  (row:any) {
  return row.isLogout?'在线':'离线'
 
}
function LogStuasfiltertext(item:any){
  return {text:item?'在线':'离线',value:item}
}
function loadTable(val={}){
  loading.value=true
   findAlarmPolymerizationInfoList(Object.assign(params,val) ).then(res=>{
   tableData.value=res.data
    loading.value=false
})
}
</script>
```
::: 




## Grid 属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|data      | 表格显示的数据 | object/array     |    [参数说明](#data参数)   |-
|renderArr      | 显示的column模板      |  Array< [Row](#renderarr参数) >| [参数说明](#renderarr参数)    | -
|selection      | 是否启用复选表格 | boolean       |     -   |fasle 
|expandKeyID      | 行数据的 Key，用来优化 Table 的渲染；唯一值   |  string | -  |  id



  
 ## Grid 事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| loadTable    |页码大小和当前页变动 |{current,size}
| row-click     |当某一行被点击时会触发该事件 | row, column, event   
| selection-change     | 当选择项发生变化时会触发该事件| selection   
| expand-change    |当用户对某一行展开或者关闭的时候会触发该事件 |row,expanded


 ## data参数

##### Object
传入对象类型，是带分页的情况，接口返回的数据在records内
::: details 点击查看完整代码
```js
tableData ={
    current: 1,
    orders: [],
    pages: 3,
    records: [
        {date: '2016-05-04',
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
        ...
    ],
    searchCount: true,
    size: 10,
    total: 26
}
```
 :::
##### Array
传入数组类型，一般用于数据的全部展示
::: details 点击查看完整代码
```js
tableData = [
  {
    date: '2016-05-04',
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
  {
    date: '2016-05-04',
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
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
```
:::

## renderArr参数
::: details open 点击查看完整代码
```js
columnList=[
        { label: 'plateCode', prop: "plateCode",filter:true,},
        { label: '所属公司', prop: "enterpriseName",filter_input:true},
        { label: '车牌頗色', prop: "plateColorName",filter:true,filters:filter},
        { label: '持续时间', prop: "alarmDurationStr",sortable:true},
        { label: '报警类型', prop: "alarmTypeName"},
        { label: '在线状态', prop: "isLogout",filter:true,
        formatter:(row:any)=> {
            return row.isLogout?'在线':'离线'
        },
        filtertext:(item:any)=>{
            return {text:item?'在线':'离线',value:item}
            }
        }
]
```
:::

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|label      | column 的 key | string       |     -   |- 
|prop      | 字段名称 对应列内容的字段名 | string       |     -   |- 
|width      | 对应列的宽度 | string / number       |     -   |- 
|formatter      | 用来格式化内容 | function(row, column, cellValue, index)  |     -   |-  
|sortable      | 对应列是否可以排序 | boolean / string       |   true / false / 'custom'   |- 
|filter_input      | 开启该列的筛选(input框的展示形式) | boolean       |     -   |- 
|input_text      | filter_input=true,筛选条件文本 | string       |     -   |- 
|filter      | 是否开启该列的筛选(勾选的展示形式) | boolean       |     -   |- 
|filters      | 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性| Function(){return array[{ text:itme , value:itme }]}      |     -   |- 
|filtertext      | 勾选_该列的筛选数据需要做转换，显示的文字更改 | Function (){return { text:自定义, value:itme}}      |     -   |- 
