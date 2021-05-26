# `cloneArray`克隆数组

浅拷贝一份数组副本

**参数**

-   `array`要复制的数组

**示例**

```js
cloneArray([1, 24])
// => [1, 24]
```

**源码**

```js
// ES6 ...
const cloneArray = arr => [...arr]

// ES6 Array.from
const cloneArray = arr => Array.from(arr)

// concat()
const cloneArray = arr => [].concat(arr)

// map()
const cloneArray = arr => arr.map(x => x)

cloneArray([1, 24]) // [1, 24]
```