# `sum`数组中值总和

```js
sum(value1, value2, value3)
```

**参数**

-   `value1 value2 value3`要迭代的数字

**示例**

```js
sum(1, 2, 3, 4)
sum(...[1, 2, 3, 4])
// => 10
```

**源码**

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0)
```