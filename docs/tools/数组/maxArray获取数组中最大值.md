# `maxArray`数组中最大值

过滤原数组中所有的非假值元素，返回数组中的最大值

```js
maxArray(array)
```

**参数**

-   `array`待处理的数组

**示例**

```js
maxArray([0, -1, -2, -3, false])
// => 0
```

**源码**

```js
const maxArray = arr => Math.max(...arr.filter(v => Boolean(v) || v === 0))
```