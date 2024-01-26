import{_ as d,r as n,o,c,d as a,w as r,a as t,b as s,e as l}from"./app-LhQIQCaP.js";const i={},u=t("h1",{id:"搜索树-treesearch",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#搜索树-treesearch","aria-hidden":"true"},"#"),s(" 搜索树（TreeSearch）")],-1),k=t("p",null,"增加可搜索功能",-1),h=t("h2",{id:"示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),s(" 示例")],-1),v=l(`<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tree-search</span> <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      {text: &#39;父节点1&#39;, 
        id:999,
        children: [
            {text: &#39;子节点1&#39;,id:1},
            {text: &#39;子节点2&#39;,id:2}
        ]
      }
    ]<span class="token punctuation">&quot;</span></span> 
     <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看完整代码</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tree-search</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tvalue<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>OrganizationTreeList<span class="token punctuation">&#39;</span></span>  <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">@node-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>nodClick<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Tvalue<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OrganizationTreeList<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;父节点1&quot;</span><span class="token punctuation">,</span> 
       <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">999</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;子节点1&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;子节点2&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//点击节点触发</span>
<span class="token keyword">function</span> <span class="token function">nodClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="treesearch属性" tabindex="-1"><a class="header-anchor" href="#treesearch属性" aria-hidden="true">#</a> TreeSearch属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>currentValue</td><td>初始化选中id</td><td>-</td><td>-</td><td>null</td></tr><tr><td>treeData</td><td>树的初始化数据</td><td>array</td><td>-</td><td>[]</td></tr><tr><td>name</td><td>显示节点时,将返回的text作为节点名称</td><td>string</td><td>-</td><td>&#39;text&#39;</td></tr><tr><td>open</td><td>是否保持展开</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>showIcon</td><td>是否显示图标</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>isCheck</td><td>是否多选</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>需要异步加载时传入的树的接口</td><td>string</td><td>-</td><td></td></tr><tr><td>type</td><td>树的异步请求方式</td><td>string</td><td>-</td><td>&#39;get&#39;</td></tr><tr><td>autoParam</td><td>异步加载时(点击节点)需要 自动提交父节点属性的参数</td><td>array</td><td>-</td><td>[&quot;id&quot;, &quot;type&quot;]</td></tr><tr><td>otherParam</td><td>增加树基础传参 除了 autoParam以外的参数 在这里传</td><td>array</td><td>-</td><td>[]</td></tr><tr><td>limitCheck</td><td>beforeCheck点击选中之前的事件,return true/false (是否勾选)</td><td>Function</td><td>-</td><td>null</td></tr><tr><td>nodeFilter</td><td>树上的节点筛选 return [条件, 符合的结果]</td><td>array</td><td>-</td><td>[&quot;type&quot;, 4]</td></tr></tbody></table><h2 id="treesearch事件" tabindex="-1"><a class="header-anchor" href="#treesearch事件" aria-hidden="true">#</a> TreeSearch事件</h2><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>clear</td><td>输入框清除时触发</td><td>-</td></tr><tr><td>tree-loaded</td><td>获取到data数据的回调</td><td>-</td></tr><tr><td>tree-ready</td><td>树接受异步数据加载完成的回调</td><td>-</td></tr><tr><td>node-click</td><td>用于捕获节点被点击的事件回调函数</td><td>treeNode：{click:是否选中}</td></tr><tr><td>node-check</td><td>多选模式下，勾选 或 取消勾选的事件回调函数</td><td>{checked：选中的状态,treeNode：当前选中的对象,checkedList：被选中的数组对象, allList：所有已勾选的id数组 }</td></tr><tr><td>right-click</td><td>用于捕获 zTree 上鼠标右键点击之后的事件回调函数</td><td>event,treeId,treeNode</td></tr></tbody></table>`,7);function m(b,g){const e=n("tree-search"),p=n("ClientOnly");return o(),c("div",null,[u,k,h,a(p,null,{default:r(()=>[a(e,{treeData:[{text:"父节点1",id:999,children:[{text:"子节点1",id:1},{text:"子节点2",id:2}]}]})]),_:1}),v])}const q=d(i,[["render",m],["__file","treeSearch.html.vue"]]);export{q as default};
