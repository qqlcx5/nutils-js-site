# `haveArr`具有共同`array`值的数组

创建一个具有共同 array 值的数组，每个值包含在其他给定的数组中

```js
haveArr(array, array2)
```

**参数**

-   `array` 要检查的数组
-   `array2`要包含的数组

**示例**

```js
haveArr([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 1, 2 ]
```

**源码**

```js
const haveArr = (a, b) => {
    const s = new Set(b)
    return a.filter(x => s.has(x))
}
// ES6 includes
const haveArr = (arr, values) => arr.filter(v => values.includes(v))
```