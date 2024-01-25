# 基础树（Tree）
所有的树组件的封装都是基于z-Tree进行

## 示例
<ClientOnly>
<Tree :treeData="[
      {text: '父节点1', 
      id:999,
        children: [
            {text: '子节点1',id:1},
            {text: '子节点2',id:2}
        ]
      }
    ]" />

</ClientOnly>

## 基础用法

```html
<Tree :treeData="[
      {text: '父节点1', 
      id:999,
        children: [
            {text: '子节点1',id:1},
            {text: '子节点2',id:2}
        ]
      }
    ]" />
  

```



::: details 点击查看完整代码
```html
<template>
   <Tree   :treeData='OrganizationTreeList'  @node-click='nodClick' />
</template>

<script setup lang="ts">
import { ref } from "vue";

const OrganizationTreeList=ref([
      {text: "父节点1", 
      id:100,
        children: [
            {text: "子节点1"id:1,},
            {text: "子节点2" id:2,}
        ]
      }
    ])

//点击节点触发
function nodClick(){

}
</script>
```
::: 




## Tree属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|treeData      | 树的初始化数据 | array     |     -   |[] 
|name      | 显示节点时,将返回的text作为节点名称      |  string | -     | 'text'
|showIcon      | 是否显示图标 | boolean       |     -   |true 
|isCheck      | 是否是多选还是单选模式 true(多选)   |  boolean | -  |  false
|isCopy      | 拖拽时，是否复制节点，false为移动节点 | boolean|     -   |false
|isEdit      | 设置 zTree 是否处于编辑状态      |  boolean | -     |  false
|isRemoveBtn      | 是否显示删除按钮 | boolean       |     -   |false 
|isRenameBtn | 是否显示编辑名称按钮      |  boolean | -     |  false
|isMove | 拖拽时，设置是否允许移动节点 | boolean       |     -   |false
|iconsFilter | 树上的节点图标更改方法 val.iconSkin = 'camera' |  Function | -  | null
|isContextmenu | 是否开启右击功能 | boolean       |     -   |false
|isExpand | 是否默认打开根节点      |  boolean | -     |  true
|isFreeze | 是否冻结根节点 | boolean       |     -   |false
|lazy | 需要异步加载时传入的树的接口 | string       |     -   | 
|type      | 树的异步请求方式      |  string | -     |  'get'
|autoParam      | 异步加载时(点击节点)需要 自动提交父节点属性的参数|  array | -     |  ["id", "type"]
|otherParam      | 增加树基础传参 除了autoParam以外的参数 在这里传 | array       |     -   |[] 
|limitCheck      | beforeCheck点击选中之前的事件,return true/false (是否勾选) | Function       |     -   |null 
|nodeFilter      | 树上的节点筛选 return [条件, 符合的结果] | array  |-|["type", 4] 
|hoverOperation      | 用于当鼠标移动到节点上时，页面显示的用户自定义控件      |  Function | -     |  Function




  
 ## Tree事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| tree-loaded    |获取到data数据的回调| -  
| tree-ready     |树接受异步数据加载完成的回调| -    
| node-click     |用于捕获节点被点击的事件回调函数 |click,treeId,type,treeNode       
| node-check     |用于捕获 checkbox / radio 被勾选 或 取消勾选的事件回调函数 |checked,treeNode,checkedList, allList   
| right-click     |用于捕获 zTree 上鼠标右键点击之后的事件回调函数 |event,treeId,treeNode    



