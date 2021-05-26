# `allEqual`检查数组各项相等

检查数组各项是否一致。

**参数**

-   `array` 要检查的数组

**示例**

```js
allEqual([1, 2, 3, 4, 5, 6])
// => false

allEqual([1, 1, 1, 1])
// => true
```

**源码**

```js
const allEqual = arr => arr.every(val => val === arr[0])
```