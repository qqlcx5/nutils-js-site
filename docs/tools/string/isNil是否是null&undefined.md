# `isNil`是否是`null`或`undefined`

```js
isNil(value)
```

**参数**

-   `value` 要检验的值

**示例**

```js
isNil(null)
isNil(undefined)
// => true
```

**源码**

```js
const isNil = val => val === undefined || val === null
```