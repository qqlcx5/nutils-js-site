# `takeLastArray`截取数组末尾元素

从 array 数组的最后一个元素开始提取 n 个元素

```js
takeLastArray(array, n)
```

**参数**

-   `array`要检索的数组。
-   `n=`要提取的元素`n`个数。

**示例**

```js
takeArray([2, 3, 1], 2)
// => [3, 1]
```

**源码**

```js
const takeLastArray = (arr, n = 1) => arr.slice(0, -n)
```
