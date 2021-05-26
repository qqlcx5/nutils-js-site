# `padStart`遮住字符串

```js
padStart(value, n, maskChar)
```

**参数**

-   `value` 要遮住字符串
-   `n = 4` 填充的长度
-   `maskChar` 填充字符

**示例**

```js
padStart('18659808664')
// => 1865*******
```

**源码**

```js
const padStart = (str, n = 4, maskChar = '*') => str.slice(0, n).padStart(str.length, maskChar)
```
