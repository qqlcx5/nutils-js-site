# `uniqueArray`数组去重

创建一个去重后的 array 数组副本

```js
uniqueArray(array)
```

**参数**

-   `array` 要去重的数组

**示例**

```js
uniqueArray([1, 2, 2, 3, 4, 4, 5])
// => [ 1, 2, 3, 4, 5 ]
```

**源码**

```js
const uniqueArray = (...arr) => [...new Set(arr)]

const uniqueArray = (...arr) => Array.from(new Set(arr))
```