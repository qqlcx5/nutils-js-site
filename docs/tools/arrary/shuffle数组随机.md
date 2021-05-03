# `shuffle`数组随机

创建一个随机的数组，使用`Fisher-Yates`算法随机排序数组的元素

```js
shuffle(array)
```

**参数**

-   `array` 要随机的数组

**示例**

```js
shuffle([2, 3, 1])
// => [3, 1, 2]
```

**源码**

```js
const shuffle = ([...arr]) => {
    let m = arr.length
    while (m) {
        const i = Math.floor(Math.random() * m--)
        ;[arr[m], arr[i]] = [arr[i], arr[m]]
    }
    return arr
}
```