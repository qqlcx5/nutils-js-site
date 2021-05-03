# `thousands`数字每隔三位数加分号

```js
thousands(number)
```

**参数**

-   `number` 数字或者浮点数

**示例**

```js
thousands(12255552323)
// => 12,255,552323
```

**源码**

```js
const thousands = num => num.toString().replace(num.toString().indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, '$1,')
```