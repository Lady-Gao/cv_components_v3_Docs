import{f as T,h as v,g as m,r as a,o as P,c as k,a as s,d as e,w as n,b as r,_ as I}from"./app-G7DuI7lF.js";const M=s("h3",{id:"轨迹示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#轨迹示例","aria-hidden":"true"},"#"),r(" 轨迹示例")],-1),x={class:"realTime"},C=T({__name:"PathSimplifierIns_realTime.html",setup(S){const _=[[113.864691,22.942327],[120.412618,36.382612],[113.370643,22.938827],[113.001181,23.120518],[112.985037,23.15046],[113.890205,22.798043],[110.361899,20.026695],[113.682288,34.618975],[121.434529,31.215641],[109.488707,18.309754],[120.682502,28.011099],[120.68556,30.912366],[126.687123,45.787618],[120.48506,30.053066]],t=v({position:[],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",id:1}),p=m(),o=m(!1);function f(){o.value=!0,l()}function l(){o.value&&setTimeout(()=>{let i=Math.floor(Math.random()*30);t.position=_[i],l(),console.log("ss")},1e3)}function d(){o.value=!1}return(i,b)=>{const u=a("PathSimplifierIns"),h=a("Map"),c=a("el-button");return P(),k("div",null,[M,s("div",x,[e(h,{zoom:3,ref:"MAP",id:"realTime"},{default:n(()=>[e(u,{ref_key:"realTimeRef",ref:p,id:i.currentMarkerId,position:t.position,icon:t.icon,model:"realTime"},null,8,["id","position","icon"])]),_:1},512),e(c,{onClick:f},{default:n(()=>[r("开始动画")]),_:1}),e(c,{onClick:d},{default:n(()=>[r("停止动画")]),_:1})])])}}}),A=I(C,[["__file","PathSimplifierIns_realTime.html.vue"]]);export{A as default};
