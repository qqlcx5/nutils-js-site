# `descArr`数组降序

返回降序后的新数组

```js
descArray(array)
```

**参数**

-   `array` 要检查的排序数组

**示例**

```js
descArr([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
```

**源码**

```js
const descArr = arr => [...arr].sort((a, b) => b - a)
```