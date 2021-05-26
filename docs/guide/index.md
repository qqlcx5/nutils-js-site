# Javascript 前端高效开发工具库

**加入前端有道交流群、技术探讨、学习**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat_m.png)

[![npm](https://img.shields.io/npm/v/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)
[![LICENSE MIT](https://img.shields.io/npm/l/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)

:rocket: `nutils-js` 是一套在开发中实践积累起来的实用 JavaScript 工具库。其次为学习而生，在当今有很多类似库，基本教我们如何去使用它，作为工具我觉得最最要一点是理解工具的精髓，它是如何去实现的。

作为Web开发人员，在日常开发中难免遇到`Array` `Object` `String` `Number`等数据处理，或者是`防抖节流函数`等性能优化亦或者` URL参数处理` `类型判断 `等等这些都是使用率较高的 JavaScript 模块，避免在不同项目中复制粘贴的麻烦，发布在 npm 上，如果你有好的建议或者想为本项目贡献一份力的话，欢迎为本项目提交 pr，一起探讨和交流学习。

## :arrow_down: 安装

```bash
npm i --save nutils-js
```

## :beers: 使用

```js
const nutils = require('nutils-js')
nutils.chunk([1, 2, 3], 2)
```
