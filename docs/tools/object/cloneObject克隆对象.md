# `cloneObject`克隆对象

浅拷贝一份对象副本

```js
cloneObject(object)
```

**参数**

-   `object`要复制的对象

**示例**

```js
const a = { x: 1, y: 1 }
const b = cloneObject(a)
// => a !== b
```

**源码**

```js
// ES6 ...
const cloneObject = (obj, temp = {}) => (temp = { ...obj })

// Object.assign()
const cloneObject = obj => Object.assign({}, obj)
```