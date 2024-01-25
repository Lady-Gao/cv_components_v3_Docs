# 表格权限（OpretionTool）

一般在表格内使用，显示表格内权限按钮


## 基础用法

```html

 <OpretionTool :Heard="false" :powerTool="powerTool" />

```



::: details 点击查看完整代码
```html
<template>
    <grid :data="tableData" class="bgr" >
                <el-table-column prop="date" label="Date"   align="center"  header-align="center"/>
                <el-table-column   label="操作"   align="center"  header-align="center" fixed="right">
                    <OpretionTool :Heard="false" :powerTool="powerTool" @look="lookL"/>
                </el-table-column>
     </grid> 
</template>

<script setup lang="ts">
import { ref } from "vue";
 const powerTool=["look"]

</script>
```
::: 




## OpretionTool属性

| 属性        | 说明       | 类型   | 可选值  | 默认值           
| ----------|-------------|-----  | ------ |------------
|powerTool      | 所有按钮的权限(不包括搜索按钮) | array     |     -   |[]
|Heard      | 是否为头部的搜索按钮 | boolean       |     -   |true 


  
 <!-- ## OpretionTool heard事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| search   |搜索|-
| add      |添加|-
| import   |导入|-
| export   |导出|- -->
 ## OpretionTool 事件
 
| 事件        | 说明                    | 回调参数         
| ----------|-------------|-----       
| look   |查看|-
| modify  |修改|-
| remove   |删除|-


## OpretionTool 其他权限

以下按钮在表格中自由判断 不放在组件内
```vue
<template>
  <grid :data="tableData" class="bgr" >
                <el-table-column prop="date" label="Date"   align="center"  header-align="center"/>
                <el-table-column   label="操作"   align="center"  header-align="center" fixed="right">
                     <template #default="{ row }">
                    <OpretionTool :Heard="false" :powerTool="route.meta.power">
                        <template #button="{ pxToolList }">
                            <div v-show="pxToolList.includes('modifycomp')" class="tagmore">修改公司</div>
                            <div v-show="pxToolList.includes('modifyplat')" class="tagmore">修改车牌号</div>
                            <div v-show="pxToolList.includes('deactivate')" class="tagmore">{{ !row.useStatus ? "停用" : "启用" }}
                            </div>
                            <span v-if="row.terminalCode">
                                <div v-show="pxToolList.includes('deactivate')" class="tagmore">解绑设备</div>
                                <div v-show="pxToolList.includes('deactivate')" class="tagmore">更换设备</div>
                            </span>
                            <div v-show="pxToolList.includes('deactivate')" v-if="!row.terminalCode" class="tagmore">
                                绑定设备
                            </div>
                     </template>
                    </OpretionTool>
                     </template>
                </el-table-column>
     </grid> 
</template>
 
<script setup lang="ts">
import { ref } from "vue";
 const powerTool=['deactivate', 'add', 'export', 'offline', 'remove', 'unbind', 'replace', 'modify', 'import', 'modifycomp', 'modifyplat']


</script>
```
| 名称        | 说明                      
| ----------|-------------
|resend         |-
|modifycomp     |修改公司
|modifyplat     |修改车牌号
|sendAdd        |-
|sendEdit       |-
|sendDown       |-
|reset          |重置
|deactivate     |停用
|offline        |车辆下线
|unbind         |解绑设备 绑定设备 更换设备
|deviceinfo     |设备信息
|logout         |-
|bound          |绑定车辆
|unbound        |解绑车辆
|apply          |应用
|processAlarm   |-
|removeAlarm    |-
