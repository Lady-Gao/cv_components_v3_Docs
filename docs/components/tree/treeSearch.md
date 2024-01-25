# 搜索树（TreeSearch）

增加可搜索功能
## 示例
<ClientOnly>
 <tree-search :treeData="[
      {text: '父节点1', 
        id:999,
        children: [
            {text: '子节点1',id:1},
            {text: '子节点2',id:2}
        ]
      }
    ]" 
     />
</ClientOnly>

## 基础用法

```html
 <tree-search :treeData="[
      {text: '父节点1', 
        id:999,
        children: [
            {text: '子节点1',id:1},
            {text: '子节点2',id:2}
        ]
      }
    ]" 
     />

```



::: details 点击查看完整代码
```html
<template>
   <tree-search v-model="Tvalue"  :treeData='OrganizationTreeList'  :open="true"  @node-click='nodClick'/>
</template>

<script setup lang="ts">
import { ref } from "vue";
const Tvalue=ref(2)
const OrganizationTreeList=ref([
      {text: "父节点1", 
       id:999,
        children: [
            {text: "子节点1",id:1},
            {text: "子节点2",id:2}
        ]
      }
    ])

//点击节点触发
function nodClick(){

}
</script>
```
::: 




## TreeSearch属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|currentValue      | 初始化选中id | -     |     -   |null
|treeData      | 树的初始化数据 | array     |     -   |[] 
|name      | 显示节点时,将返回的text作为节点名称      |  string | -     | 'text'
|open      | 是否保持展开      |  boolean | -     | true
|showIcon      | 是否显示图标 | boolean       |     -   |true 
|isCheck      | 是否多选 | boolean  |-|true 
|lazy | 需要异步加载时传入的树的接口 | string       |     -   | 
|type      | 树的异步请求方式      |  string | -     |  'get'
|autoParam      | 异步加载时(点击节点)需要 自动提交父节点属性的参数|  array | -     |  ["id", "type"]
|otherParam      | 增加树基础传参 除了 autoParam以外的参数 在这里传 | array       |     -   |[] 
|limitCheck      | beforeCheck点击选中之前的事件,return true/false (是否勾选) | Function       |     -   |null 
|nodeFilter      | 树上的节点筛选 return [条件, 符合的结果] | array  |-|["type", 4] 






  
 ## TreeSearch事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| clear     |输入框清除时触发 | -    
| tree-loaded    |获取到data数据的回调| -  
| tree-ready     |树接受异步数据加载完成的回调| -    
| node-click     |用于捕获节点被点击的事件回调函数 |treeNode：{click:是否选中}       
| node-check     |多选模式下，勾选 或 取消勾选的事件回调函数 |{checked：选中的状态,treeNode：当前选中的对象,checkedList：被选中的数组对象, allList：所有已勾选的id数组  } 
| right-click     |用于捕获 zTree 上鼠标右键点击之后的事件回调函数 |event,treeId,treeNode  



