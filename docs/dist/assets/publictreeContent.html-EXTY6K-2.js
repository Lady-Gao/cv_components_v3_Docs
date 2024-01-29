import{_ as n,o as a,c as s,e as t}from"./app-G7DuI7lF.js";const p={},e=t(`<h1 id="车辆布局组件-publictreecontent" tabindex="-1"><a class="header-anchor" href="#车辆布局组件-publictreecontent" aria-hidden="true">#</a> 车辆布局组件 (PublictreeContent)</h1><p>可收缩从侧边组件</p><p>默认单选模式，监听方法使用 @node-click=&#39;nodeClick&#39;</p><p>多选模式 :isCheck=&#39;true&#39; ，监听方法使用 @node-check=&quot;nodeCheck&quot;</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PublicTreeContent</span> <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VehicleTreeInfoList<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@node-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nodeClick<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PublicTreeContent</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看完整代码</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PublicTreeContent</span> <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VehicleTreeInfoList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Operation</span> <span class="token attr-name">:powerTool</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>powerTool1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>起止时间<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formInline<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Approved<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>姓名<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formInline<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Approved<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>报警类型<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formInline<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Activity zone<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Zone one<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shanghai<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Zone two<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beijing<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Operation</span><span class="token punctuation">&gt;</span></span>
  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#main</span><span class="token punctuation">&gt;</span></span>
         

                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bgr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:renderArr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columnList<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Date<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">header-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#opertion</span><span class="token punctuation">&gt;</span></span>
  
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>   <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>操作<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">header-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>dr<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
           <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid</span><span class="token punctuation">&gt;</span></span> 
           
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span> 
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PublicTreeContent</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> findVehicleTreeInfoList <span class="token keyword">from</span> <span class="token string">&#39;@/utils/findVehicleTreeInfoList.json&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span>VehicleTreeInfoList<span class="token punctuation">}</span><span class="token operator">=</span>findVehicleTreeInfoList
   <span class="token keyword">const</span> powerTool<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;deactivate&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;export&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;offline&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;remove&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;unbind&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;modify&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;import&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;modifycomp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;modifyplat&quot;</span><span class="token punctuation">]</span>
     <span class="token keyword">const</span> formInline<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token keyword">const</span> powerTool1<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;modify&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;import&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-03&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-03&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-02&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 
<span class="token punctuation">]</span>
<span class="token keyword">const</span> columnList<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;labelmber&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;labelcE&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">rop</span><span class="token operator">:</span> <span class="token string">&quot;date&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;labeltecode&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;terminalCode&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">120</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;labelc&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;realMobileCode&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;labelus&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;isLogout&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">formatter</span><span class="token operator">:</span>filterLogStuas <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">filterLogStuas</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.publictreeContentView</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token selector">.header</span><span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span>65px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="publictreecontent属性" tabindex="-1"><a class="header-anchor" href="#publictreecontent属性" aria-hidden="true">#</a> PublictreeContent属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>treeData</td><td>树的初始化数据</td><td>array</td><td>-</td><td>[]</td></tr><tr><td>name</td><td>显示节点时,将返回的text作为节点名称</td><td>string</td><td>-</td><td>&#39;text&#39;</td></tr><tr><td>isCheck</td><td>是否多选</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>需要异步加载时传入的树的接口</td><td>string</td><td>-</td><td></td></tr><tr><td>autoParam</td><td>异步加载时(点击节点)需要 自动提交父节点属性的参数</td><td>array</td><td>-</td><td>[&quot;id&quot;, &quot;type&quot;]</td></tr><tr><td>otherParam</td><td>增加树基础传参 除了autoParam以外的参数 在这里传</td><td>array</td><td>-</td><td>[]</td></tr><tr><td>isVideo</td><td>是否展示视频摄像头</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="publictreecontent事件" tabindex="-1"><a class="header-anchor" href="#publictreecontent事件" aria-hidden="true">#</a> PublictreeContent事件</h2><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tree-loaded</td><td>获取到data数据的回调</td><td>-</td></tr><tr><td>tree-ready</td><td>树接受异步数据加载完成的回调</td><td>-</td></tr><tr><td>node-click</td><td>点击节点时触发，返回当前选中车辆数据对象</td><td>treeNode:{click:选中状态}</td></tr><tr><td>node-check</td><td>多选模式下，勾选和取消时触发，返回当前点击的所有车辆对象</td><td>type,[treeNode,treeNode,treeNode... ]</td></tr><tr><td>checked-list</td><td>多选模式下，勾选时触发,返回选中的所有车辆id数组</td><td>[id,id,id...]</td></tr></tbody></table><h2 id="publictreecontentoperation插槽" tabindex="-1"><a class="header-anchor" href="#publictreecontentoperation插槽" aria-hidden="true">#</a> PublictreeContentOperation插槽</h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>自定义默认内容</td></tr></tbody></table>`,14),o=[e];function l(c,u){return a(),s("div",null,o)}const r=n(p,[["render",l],["__file","publictreeContent.html.vue"]]);export{r as default};
