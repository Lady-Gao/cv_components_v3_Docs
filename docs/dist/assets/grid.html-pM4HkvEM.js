import{_ as n,o as s,c as a,e as t}from"./app-G7DuI7lF.js";const p={},e=t(`<h1 id="表格-grid" tabindex="-1"><a class="header-anchor" href="#表格-grid" aria-hidden="true">#</a> 表格（Grid）</h1><p>用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">:renderArr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columnList<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid</span><span class="token punctuation">&gt;</span></span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看完整代码</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>grid</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">:renderArr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columnList<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>grid</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> columnList<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;plateCode&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;plateCode&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;所属公司&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;enterpriseName&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter_input</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;车牌頗色&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;plateColorName&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">filters</span><span class="token operator">:</span>filter<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;持续时间&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;alarmDurationStr&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">sortable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;报警类型&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;alarmTypeName&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;在线状态&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;isLogout&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formatter</span><span class="token operator">:</span>filterLogStuas<span class="token punctuation">,</span>
        <span class="token literal-property property">filtertext</span><span class="token operator">:</span>LogStuasfiltertext
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">filterLogStuas</span>  <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> row<span class="token punctuation">.</span>isLogout<span class="token operator">?</span><span class="token string">&#39;在线&#39;</span><span class="token operator">:</span><span class="token string">&#39;离线&#39;</span>
 
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">LogStuasfiltertext</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span>item<span class="token operator">?</span><span class="token string">&#39;在线&#39;</span><span class="token operator">:</span><span class="token string">&#39;离线&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span>item<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">loadTable</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token boolean">true</span>
   <span class="token function">findAlarmPolymerizationInfoList</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span>val<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
   tableData<span class="token punctuation">.</span>value<span class="token operator">=</span>res<span class="token punctuation">.</span>data
    loading<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="grid-属性" tabindex="-1"><a class="header-anchor" href="#grid-属性" aria-hidden="true">#</a> Grid 属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格显示的数据</td><td>object/array</td><td><a href="#data%E5%8F%82%E6%95%B0">参数说明</a></td><td>-</td></tr><tr><td>renderArr</td><td>显示的column模板</td><td>Array&lt; <a href="#renderarr%E5%8F%82%E6%95%B0">Row</a> &gt;</td><td><a href="#renderarr%E5%8F%82%E6%95%B0">参数说明</a></td><td>-</td></tr><tr><td>selection</td><td>是否启用复选表格</td><td>boolean</td><td>-</td><td>fasle</td></tr><tr><td>expandKeyID</td><td>行数据的 Key，用来优化 Table 的渲染；唯一值</td><td>string</td><td>-</td><td>id</td></tr></tbody></table><h2 id="grid-事件" tabindex="-1"><a class="header-anchor" href="#grid-事件" aria-hidden="true">#</a> Grid 事件</h2><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>loadTable</td><td>页码大小和当前页变动</td><td>{current,size}</td></tr><tr><td>row-click</td><td>当某一行被点击时会触发该事件</td><td>row, column, event</td></tr><tr><td>selection-change</td><td>当选择项发生变化时会触发该事件</td><td>selection</td></tr><tr><td>expand-change</td><td>当用户对某一行展开或者关闭的时候会触发该事件</td><td>row,expanded</td></tr></tbody></table><h2 id="data参数" tabindex="-1"><a class="header-anchor" href="#data参数" aria-hidden="true">#</a> data参数</h2><h5 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h5><p>传入对象类型，是带分页的情况，接口返回的数据在records内</p><details class="custom-container details"><summary>点击查看完整代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>tableData <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">orders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">records</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-04&#39;</span><span class="token punctuation">,</span>
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
        <span class="token operator">...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">searchCount</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token number">26</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h5 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h5><p>传入数组类型，一般用于数据的全部展示</p><details class="custom-container details"><summary>点击查看完整代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>tableData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-04&#39;</span><span class="token punctuation">,</span>
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
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-04&#39;</span><span class="token punctuation">,</span>
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
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-04&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token string">&#39;2016-05-01&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;No. 189, Grove St, Los Angeles&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="renderarr参数" tabindex="-1"><a class="header-anchor" href="#renderarr参数" aria-hidden="true">#</a> renderArr参数</h2><details class="custom-container details"><summary>open 点击查看完整代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>columnList<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;plateCode&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;plateCode&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;所属公司&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;enterpriseName&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter_input</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;车牌頗色&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;plateColorName&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">filters</span><span class="token operator">:</span>filter<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;持续时间&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;alarmDurationStr&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">sortable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;报警类型&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;alarmTypeName&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;在线状态&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&quot;isLogout&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">filter</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">formatter</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> row<span class="token punctuation">.</span>isLogout<span class="token operator">?</span><span class="token string">&#39;在线&#39;</span><span class="token operator">:</span><span class="token string">&#39;离线&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">filtertext</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span>item<span class="token operator">?</span><span class="token string">&#39;在线&#39;</span><span class="token operator">:</span><span class="token string">&#39;离线&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span>item<span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>column 的 key</td><td>string</td><td>-</td><td>-</td></tr><tr><td>prop</td><td>字段名称 对应列内容的字段名</td><td>string</td><td>-</td><td>-</td></tr><tr><td>width</td><td>对应列的宽度</td><td>string / number</td><td>-</td><td>-</td></tr><tr><td>formatter</td><td>用来格式化内容</td><td>function(row, column, cellValue, index)</td><td>-</td><td>-</td></tr><tr><td>sortable</td><td>对应列是否可以排序</td><td>boolean / string</td><td>true / false / &#39;custom&#39;</td><td>-</td></tr><tr><td>filter_input</td><td>开启该列的筛选(input框的展示形式)</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>input_text</td><td>filter_input=true,筛选条件文本</td><td>string</td><td>-</td><td>-</td></tr><tr><td>filter</td><td>是否开启该列的筛选(勾选的展示形式)</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>filters</td><td>数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性</td><td>Function(){return array[{ text:itme , value:itme }]}</td><td>-</td><td>-</td></tr><tr><td>filtertext</td><td>勾选_该列的筛选数据需要做转换，显示的文字更改</td><td>Function (){return { text:自定义, value:itme}}</td><td>-</td><td>-</td></tr></tbody></table>`,19),o=[e];function l(r,c){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","grid.html.vue"]]);export{u as default};
