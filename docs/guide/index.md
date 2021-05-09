# Javascript 前端高效开发工具库

[![npm](https://img.shields.io/npm/v/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)
[![LICENSE MIT](https://img.shields.io/npm/l/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)

:rocket: `nutils-js` 是一个模块化、高性能的 JavaScript 实用工具库。

日常开发中难免遇到`Array` `Object` `String` `Number`等数据处理，或者是视图上`防抖节流函数`等性能优化亦或者` URL参数处理` `类型判断 `等等为避免不同项目复制粘贴的麻烦，将方法进行封装，发布在 npm 上，如果后续有更优的写法也会做进一步的更新。还有就是你有好的建议或者想为本项目贡献一份力的话，欢迎为本项目提交 pr，一起探讨和交流。

## :arrow_down: 安装

```bash
$ npm i --save nutils-js
```

## :beers: 使用

```js
const nutils = require('nutils-js')
nutils.multArray([1, 2, 3], 2)
```
