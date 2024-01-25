# 联动树（InputLinkTree）
内部组件，本公司和车组的联动定制树




## 基础用法

```html

    <InputLinkTree :modelFormObj="ruleForm" 
        :treeData="OrganizationTreeList"
        :lazy='lazy'  
      
        />

```


::: details 点击查看完整代码
```html
<template>
   <InputLinkTree :modelFormObj="ruleForm" 
        :treeData="OrganizationTreeList"
         :lazy2='lazy'  
       @tree-ready="treeReady"
       @current-change="currentChange"
        />
</template>

<script setup lang="ts">
import { ref } from "vue";
 import findEnterpriseOrganizationTreeList from './data.json'
 const {OrganizationTreeList}=findEnterpriseOrganizationTreeList
 const lazy2="/basic/fleet/findFleetTreeList"

const ruleForm = reactive({
   enterpriseId: '',//4811864113058280
   fleetId:''
})

//节点变化时触发
function currentChange(){

}
</script>
```
:::



## InputLinkTree属性
| 属性        | 说明                    | 类型  | 可选值  | 默认值           
| ----------|-------------|-----       | ------------- |-------------
| currentValue      | 初始化选中数据(可用于修改) | object       |     -   |{enterpriseId:''，fleetId:''}
|treeData      | 第一个下拉框内树的初始化数据 | array     |     -   |[] 
|lazy |  第二个下拉框内，需 要异步加载的接口 | string       |     -   | 
|name      | 显示节点时,将返回的text作为节点名称      |  string | -     | 'text'
|showIcon      | 是否显示图标 | boolean       |     -   |true 




  
 ## InputLinkTree事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| tree-ready     |  树接受数据加载完成的回调| -    
| current-change     |当选中节点发生变化时触发事件 |[value1,value2]



