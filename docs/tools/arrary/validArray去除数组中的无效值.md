# `validArray`去除数组中的无效值

创建一个新数组，包含原数组中所有的非假值元素。例如`false`, `null`,`0`, `""`, `undefined`, 和 `NaN` 都是被认为是“假值”。

```js
validArray(array)
```

**参数**

-   `array`待处理的数组

**示例**

```js
minArray([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```

**源码**

```js
const validArray = arr => arr.filter(Boolean)
```