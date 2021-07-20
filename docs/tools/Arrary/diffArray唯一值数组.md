# `difference`具有唯一`array`值的数组

创建一个具有唯一`array`值的数组，每个值不包含在其他给定的数组中。

**参数**

-   `array` 要检查的数组
-   `array2`要排除的数组

**示例**

```js
difference([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 6, 7 ]
```

**源码**

```js
const difference = (a, b) => {
    const s = new Set(b)
    let arr = a.filter(x => !s.has(x))
    return arr
}