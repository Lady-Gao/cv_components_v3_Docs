import{f as m,g as c,r as o,o as v,c as b,d as s,w as p,b as a,a as t,e as h,_ as g}from"./app-LhQIQCaP.js";const _=t("h1",{id:"折线-liner",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#折线-liner","aria-hidden":"true"},"#"),a(" 折线（Liner)")],-1),y=t("p",null,"折线组件",-1),f=t("h2",{id:"示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),a(" 示例")],-1),L=h(`<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Liner</span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[[111.497428, 39.20923],[125.397428, 37.20923]]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>点击查看完整代码</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>[111.497428, 39.20923]<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Liner</span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>options<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Map</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> path<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">113.001181</span><span class="token punctuation">,</span><span class="token number">23.120518</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">112.985037</span><span class="token punctuation">,</span><span class="token number">23.15046</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">113.890205</span><span class="token punctuation">,</span><span class="token number">22.798043</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">110.361899</span><span class="token punctuation">,</span><span class="token number">20.026695</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">113.682288</span><span class="token punctuation">,</span><span class="token number">34.618975</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">121.434529</span><span class="token punctuation">,</span><span class="token number">31.215641</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">109.488707</span><span class="token punctuation">,</span><span class="token number">18.309754</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.682502</span><span class="token punctuation">,</span><span class="token number">28.011099</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.68556</span><span class="token punctuation">,</span><span class="token number">30.912366</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">126.687123</span><span class="token punctuation">,</span><span class="token number">45.787618</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.48506</span><span class="token punctuation">,</span><span class="token number">30.053066</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">103.970724</span><span class="token punctuation">,</span><span class="token number">30.397931</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">117.270073</span><span class="token punctuation">,</span><span class="token number">37.96162</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">117.212164</span><span class="token punctuation">,</span><span class="token number">31.831641</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">120.256218</span><span class="token punctuation">,</span><span class="token number">31.882242</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> options <span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token literal-property property">borderWeight</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 线条宽度，默认为 1</span>
          <span class="token literal-property property">strokeColor</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 线条颜色</span>
          <span class="token literal-property property">lineJoin</span><span class="token operator">:</span> <span class="token string">&#39;round&#39;</span> <span class="token comment">// 折线拐点连接处样式</span>
        <span class="token punctuation">}</span> 
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="liner属性" tabindex="-1"><a class="header-anchor" href="#liner属性" aria-hidden="true">#</a> Liner属性</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>path</td><td>polyline 路径</td><td>array</td><td>-</td><td>[]</td></tr><tr><td>options</td><td>线条的属性配置</td><td>object</td><td>-</td><td><a href="#options%E5%B1%9E%E6%80%A7%E5%8F%82%E6%95%B0">options</a></td></tr></tbody></table><p>##Liner方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>removeLiner</td><td>移除Liner对象</td><td></td></tr></tbody></table><h2 id="liner事件" tabindex="-1"><a class="header-anchor" href="#liner事件" aria-hidden="true">#</a> Liner事件</h2><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>鼠标左键单击事件</td><td>-</td></tr></tbody></table><h2 id="options属性参数" tabindex="-1"><a class="header-anchor" href="#options属性参数" aria-hidden="true">#</a> options属性参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">borderWeight</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 线条宽度，默认为 1</span>
          <span class="token literal-property property">strokeColor</span><span class="token operator">:</span> <span class="token string">&quot;#28F&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 线条颜色</span>
          <span class="token literal-property property">strokeWeight</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span><span class="token comment">//轮廓线宽度</span>
          <span class="token literal-property property">strokeOpacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>     <span class="token comment">//线透明度</span>
          <span class="token operator">...</span>
        <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),q=m({__name:"Liner.html",setup(x){const n=c(),l=c();function i(){n.value=[[113.001181,23.120518],[112.985037,23.15046],[113.890205,22.798043],[110.361899,20.026695],[113.682288,34.618975],[121.434529,31.215641],[109.488707,18.309754],[120.682502,28.011099],[120.68556,30.912366],[126.687123,45.787618],[120.48506,30.053066],[103.970724,30.397931],[117.270073,37.96162],[117.212164,31.831641],[120.256218,31.882242]]}function u(){n.value=[]}function r(){if(!n.value)return alert("请先添加");n.value=[[113.001181,23.120518],[112.985037,23.15046],[110.361899,20.026695],[113.682288,34.618975],[109.488707,18.309754],[120.682502,28.011099],[126.687123,45.787618],[103.970724,30.397931],[117.270073,37.96162],[120.256218,31.882242]]}return(C,w)=>{const k=o("Liner"),d=o("Map"),e=o("el-button");return v(),b("div",null,[_,y,f,s(d,{center:[113.001181,23.120518]},{default:p(()=>[s(k,{path:n.value,ref_key:"LinerRef",ref:l,options:{strokeWeight:8,strokeColor:"#AF5"}},null,8,["path"])]),_:1}),s(e,{onClick:i},{default:p(()=>[a("添加Liner")]),_:1}),s(e,{onClick:r},{default:p(()=>[a("修改Liner")]),_:1}),s(e,{onClick:u},{default:p(()=>[a("删除Liner")]),_:1}),L])}}}),j=g(q,[["__file","Liner.html.vue"]]);export{j as default};