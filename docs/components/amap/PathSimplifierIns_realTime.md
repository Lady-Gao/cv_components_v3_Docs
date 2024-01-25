### 轨迹示例


  <div class="realTime">
    <Map  :zoom="3" ref="MAP" id="realTime">
     <PathSimplifierIns ref="realTimeRef" :id='currentMarkerId' :position='realTimeData.position' :icon='realTimeData.icon'   model='realTime'/>
    </Map>
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
    
  </div>

<script setup lang="ts">
import { ref ,reactive} from "vue";
let icon1='https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png'
let icon2 ='https://fs.cvtsp.com/images-shihang-login.png'
 const listPoints=[
        [113.864691,22.942327],
        [120.412618,36.382612],
        [113.370643,22.938827],
        [113.001181,23.120518],
        [112.985037,23.15046],
        [113.890205,22.798043],
        [110.361899,20.026695],
        [113.682288,34.618975],
        [121.434529,31.215641],
        [109.488707,18.309754],
        [120.682502,28.011099],
        [120.68556,30.912366],
        [126.687123,45.787618],
        [120.48506,30.053066],
 ]
 const realTimeData=reactive({
  position:[],
    icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
    id: 1,
})
const realTimeRef=ref()

const stop=ref(false)

function startAnimation(){
  stop.value=true
 loop()
}
function loop(){
   if(!stop.value)return
  setTimeout(() => {
    let num = Math.floor(Math.random() * 30);
    realTimeData.position = listPoints[num]; //更换位置
  loop()
  console.log('ss')
}, 1000);
}
function stopAnimation() {
  stop.value=false
}
</script>