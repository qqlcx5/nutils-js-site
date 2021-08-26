# `isEqual`检查两个对象各项值相等

**参数**

- `object`待检索的对象或数组
- `object`待检索的对象或数组

**例子**

```js
isEqual({ a: 2, b: 4 }, { b: 4, a: 2 })
// => true
isEqual({ a: 2, b: 4, c: 6 }, { b: 4, a: 2 })
// => false
```

**源码**

```js
isEqual = (obj1, obj2) => {
  let o1 = obj1 instanceof Object
  let o2 = obj2 instanceof Object
  // 判断是不是对象
  if (!o1 || !o2) return obj1 === obj2
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  let isDif = true
  for (let o in obj1) {
    let t1 = obj1[o] instanceof Object
    let t2 = obj2[o] instanceof Object
    if (t1 && t2) {
      isDif = isEqual(obj1[o], obj2[o])
    } else if (obj1[o] !== obj2[o]) {
      isDif = false
    }
    if (!isDif) break
  }
  return isDif
}
```
