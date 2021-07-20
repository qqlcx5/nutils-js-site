# `isObjectEqual`检查两个对象各项值相等

**参数**

-   `object`待检索的对象
-   `object2`待检索的对象

**例子**

```js
isObjectEqual({ a: 2, b: 4 }, { b: 4, a: 2 })
// => true
isObjectEqual({ a: 2, b: 4, c: 6 }, { b: 4, a: 2 })
// => false
```

**源码**

```js
function isObjectEqual(obj1, obj2, has = true) {
    // 判断类型
    const o1 = obj1 instanceof Object
    const o2 = obj2 instanceof Object
    if (!o1 || !o2) return obj1 === obj2
    // 判断长度
    const keys1 = Object.getOwnPropertyNames(obj1)
    const keys2 = Object.getOwnPropertyNames(obj2)
    if (keys1.length !== keys2.length) return false
    // 各项对比
    for (let o in obj1) {
        let t1 = obj1[o] instanceof Object
        let t2 = obj2[o] instanceof Object
        if (t1 && t2) {
            has = diffByObj(obj1[o], obj2[o])
        } else if (obj1[o] !== obj2[o]) {
            has = false
            break
        }
    }
    return has
}
```
