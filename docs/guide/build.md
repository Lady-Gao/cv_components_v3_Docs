# 打包与发布
### 打包
### components_v3_npm 终端

```
npm run librollup
```

在components_v3_npm/package下生成lib文件夹

### 配置
> components_v3_npm/package/package.json
```json
{
"version": "0.0.15",//每次发布前叠加版本号 
 "main": "lib/index.js"
 }
```
### 发布到 npm
> components_v3_npm/package 终端
```
npm publish 
```