# 方法

## 对象相关

### Object.defineProperty()

`Object.defineProperty()` 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回此对象
它接收了三个参数：

- 要给其添加属性的对象
- 属性的名称
- 描述对象

```js
const user = {
  name: '张同学',
  age: 38,
}

Object.defineProperty(user, 'friend', {
  configurable: true, // 是否可以通过 delete 删除
  enumerable: true, // 是否可以循环
  writable: true, // 是否可以修改
  value: [1, 2, 3, 4], // 添加的值
})

console.log(user) // {name: '张同学', age: 38, friend: Array(4)}
```

### Object.defineProperties()

`Object.defineProperties()` 方法和 `Object.defineProperty()` 方法有点类似，`Object.defineProperty()` 只是可以在对象上定义一个属性，而 `Object.defineProperties()` 则可以定义多个

```js
const obj = {}

Object.defineProperties(obj, {
  name: {
    value: '张同学',
    configurable: true,
  },
  age: {
    value: 12,
  },
})

console.log(obj) // {name: '张同学', age: 12}
```

### Object.assign()

`Object.assign()` 可以将对象进行合并，它接收一个目标对象和一个或多个源对象作为参数进行合并

```js
const obj1 = { a: 1 }
const obj2 = { b: 2 }

Object.assign(obj1, obj2, { c: 12121 })

console.log(obj1) // {a: 1, b: 2, c: 12121}
```

如果源对象上有很多相同的属性，那么后面的属性会覆盖前面的属性

```js
const obj1 = { a: 1 }
Object.assign(obj1, { a: 12, b: 99 }, { b: 21 })

console.log(obj1) // {a: 12, b: 21}
```

### Object.is()

`Object.is()` 和 `===` 有点相似

```js
console.log(true === 1) // false
console.log({} === {}) // false
```

但是有些情况下就会出乎我们的意料

```js
console.log(+0 === -0) // true
console.log(+0 === 0) // true
console.log(-0 === 0) // true
```

为了改善这种情况，ES6 新增了 `Object.is()`，可以接收两个参数

```js
console.log(Object.is({}, {})) // false
console.log(Object.is(+0, -0)) // false
console.log(Object.is([], [])) // false
console.log(Object.is('1', 1)) // false
```

### Object.getPrototypeOf()

用于获取对象的原型，这是标准的方法，`__proto__` 本来就是浏览器实现的，所以不是规范的写法，虽然 `__proto__` 和 `Object.getPrototypeOf()` 方法都可以正常工作，不过建议使用 `Object.getPrototypeOf()`

```js
const obj = {}

console.log(obj.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Object.getPrototypeOf(obj)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

> 不过现在主流的浏览器都已经更新了，对象中不再存在 `__proto__` 属性，而是改为了 `[[Prototype]]`

### Object.entries()

`Object.entries` 方法可以将对象中的每个键和值转换为数组形式，**返回一个给定对象自身可枚举属性的键值对数组**

```js
const obj = {
  name: '张同学',
  age: 39,
}

for (const item of Object.entries(obj)) {
  console.log(item)
}
// ['name', '张同学']
// ['age', 39]
```

### Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()` 方法可以得到对象属性特征的描述，接收两个参数，第一个是对象名，第二个是对象的属性名

```js
const obj = {
  name: '张三',
  age: 21,
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {value: '张三', writable: true, enumerable: true, configurable: true}

// value - 属性值
// writable - 是否可以修改
// enumerable - 是否可以遍历
// configurable - 是否可以被删除或重新配置
```

### Object.getOwnPropertyDescriptors()

上面 `Object.getOwnPropertyDescriptor()` 方法可以获取对象中单个键的属性特征描述，那么想要获取对象中所有属性的描述，需要使用 `Object.getOwnPropertyDescriptors()` 方法，该方法接收一个参数为对象名

```js
const obj = {
  name: '张三',
  age: 21,
}

console.log(Object.getOwnPropertyDescriptors(obj))

// {name: {…}, age: {…}, arr: {…}}
```

### Object.preventExtensions()

`Object.preventExtensions()` 方法可以禁止向对象内添加内容

```js
const obj = {
  name: '张三',
  age: 21,
}

Object.preventExtensions(obj)
obj.a = '1'
console.log(obj) // {name: '张三', age: 21}
```

### Object.seal()

封闭对象，**configurable = false**不可以被删除或重新配置

可以使用 `Object.isSealed()` 方法判断当前对象是否处于封闭状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21,
}

Object.seal(obj)
// 封闭对象，configurable = false

console.log(Object.isSealed(obj)) // true
```

### Object.freeze()

冻结对象，不能删除或重新配置，也不可以修改

可以使用 `Object.isFrozen()` 方法判断当前对象是否处于冻结状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21,
}

Object.freeze(obj)
// 冻结对象，configurable = false，writable = false

console.log(Object.isFrozen(obj)) // true
```

## 数组相关

### ...

`...` 展开数组（ES6）

比如，在之前，我们想要合并两个数组，可以通过 `for of` 遍历进行操作：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
for (const value of arr2) {
  arr1.push(value)
}
console.log(arr1)
// (5) ["js", "css", "java", "python", "c"]
```

那么通过 **ES6** 的数组展开语法，上述操作就变的非常简单了：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
const newArr = [...arr1, ...arr2]
console.log(newArr)
// (5) ["js", "css", "java", "python", "c"]
```

展开语法在函数中的使用，比如下方计算加和：

当一个函数需要接收到多个，并且不固定数量的参数时，之前接收的方法可能是这样的：

```js
function fun(a, b, c, d) {
  return a + b + c + d
}
console.log(fun(1, 2, 3, 4))
// 10
```

那么有了展开语法，就会显然解决了参数不固定的问题

```js
function fun(...num) {
  let a = 0
  for (let i = 0; i < num.length; i++) {
    a += num[i]
  }
  return a
}
console.log(fun(1, 2, 3, 4))
// 10
```

展开运算符不仅仅适用于数组，对象有可以使用：

```js
const obj1 = { left: 100, top: 200 }
const obj2 = { width: 200, height: 200 }

const obj3 = {
  ...obj1,
  ...obj2,
}

console.log(obj3)
// {left: 100, top: 200, width: 200, height: 200}
```

### push()

`push()` 向数组的末尾添加元素

向数组末尾添加元素是方法有很多，比如使用 arr[] 来添加

```js
const arr = ['css', 'html', 'js']
arr[3] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

或者比上述方法更好的还有使用 `.length` 方法进行添加：

```js
const arr = ['css', 'html', 'js']
arr[arr.length] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

但是使用数组的 `push()` 会更简单清晰：

```js
const arr = ['css', 'html', 'js']
arr.push('vue')
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

`push()` 也可以同时添加多个值

```js
const arr = ['css', 'html', 'js']
arr.push('vue', 'java')
console.log(arr)
// (5) ["css", "html", "js", "vue", "java"]
```

### join()

`join` 把数组转换为字符串数组 || 配置数组中每一项直接的连接符

```js
// 把数组转换为字符串数组
let arr = [1, 2, 3, 4, 5]
console.log(arr.join())
// 1,2,3,4,5

// 配置数组中每一项直接的连接符
let arr = [1, 2, 3, 4, 5]
console.log(arr.join('--'))
// 1--2--3--4--5
```

### Array.from()

`Array.from()` 将字符串转换为数组

```js
const str = '这是一段文字'
console.log(Array.from(str))
// (6) ["这", "是", "一", "段", "文", "字"]
```

> 注意：使用 `Array.from()` 转换前，必须要确保这个值是有长度的，例如：

```js
const str = '这是一段文字'
console.log(str.length) // 6
```

字符串是可以使用 `.length` 方法得到长度度的，但是如果要是使用 `Array.from()` 转换对象的话是转换不出来的

```js
// 因为对象不能使用 .leghtn 方法得到长度
const obj = {
  name: '小明',
  age: 12,
}
console.log(obj.length) // undefined
console.log(Array.from(obj)) // []
```

但是如果给对象加入了 `length` ，名字再变成数值之后就可以实现了：

```js
const obj = {
  0: '小明',
  1: 12,
  length: 2,
}
console.log(obj.length) // 2
console.log(Array.from(obj)) // ["小明", 12]
```

**注：对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较**

### pop()

`pop()` 删除数组的末尾元素

```js
const arr = ['java', 'python', 'c']
arr.pop()
console.log(arr)
// (2) ["java", "python"]
```

### unshift()

`unshift()` 在数组开头添加元素

```js
const arr = ['java', 'python', 'c']
arr.unshift('c++')
console.log(arr)
// (4) ["c++", "java", "python", "c"]
```

> 注：支持多个添加

### shift()

`shift()` 删除数组开头的元素

```js
const arr = ['java', 'python', 'c']
arr.shift()
console.log(arr)
// (2) ["python", "c"]
```

### slice()

`slice()` 数组截取

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2, 4)
console.log(arr2)
// (2) ["js", "java"]
```

`slice()` 可以传入两个参数，根据索引进行截取，分别是：

> 第一个参数是：从第几个开始截取（包括开始元素索引元素）
>
> 第二个参数是：截取到第几个元素（不包括结束元素索引元素）

如果传递了一个参数：那就代表从指定位数截取到结尾（不包括开始元素）

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2)
console.log(arr2)
// (3) ["js", "java", "html5"]
```

如果不传参数，就截取整个数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice()
console.log(arr2)
// (5) ["css", "html", "js", "java", "html5"]
```

> 注：`slice()` 方法不会改变原数组，而是会创建一个新的数组

### splice()

`splice()` 数组 截取 || 添加数据 || 移除 || 替换

同样都是数组截取，`slice()` 和 `splice()` 还是有区别的

`splice()` 不仅仅有截取的方法，还可以添加、移除、替换 等操作，下面分别来说说：

- 截取：

`splice()` 也是通过索引进行截取，里面包含两个参数：

> 第一个参数是：从第几个开始截取（包括当前索引元素）
>
> 第二个参数是：截取几个元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.splice(0, 3)
console.log(arr2)
// (3) ["css", "html", "js"]

// 截取完之后会改变原数组，原数组剩下未截取的部分
console.log(arr)
// (2) ["java", "html5"]
```

- 添加：

上述例子中，通过传递两个参数，截取了制定的元素，可以继续通过添加参数的方法来往**原数组中**添加元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.splice(0, 3, 'javascript', 'node')

// 截取出来的数组
console.log(arr2) // (3) ["css", "html", "js"]

// 原数组 - 截取的元素 + 添加的新元素
console.log(arr) // (4) ["javascript", "node", "java", "html5"]
```

- 移除

比如这里想把 `js` 移除，那么通过传递两个参数

> 第一个参数：移除元素的索引：2
>
> 第二个参数：移除的数量：1

所以就是：

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2, 1)
console.log(arr)
// (4) ["css", "html", "java", "html5"]
```

- 替换

和移除类似，比如：

把 `js` 移除了之后，想要替换成 `javascript` 那么仅需要在后面加上一个参数即可：

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2, 1, 'javascript')
console.log(arr)
// (5) ["css", "html", "javascript", "java", "html5"]
```

### includes()

`includes()` 方法，查找数组中是否包含某元素

> 该方法返回布尔类型

```js
const arr = [1, 3, '7', 5]

console.log(arr.includes(1))
// 数组中包含 1 所以返回 true

console.log(arr.includes(99))
// 数组中不包含 99 所以返回 false
```

那么 `includes()` 方法的实现原理是什么呢？详见下面实例

```js
const arr = [1, 3, 6, 5]

// array 是要查找的数组
// value 是要查找的元素
function includes(array, value) {
  // 通过 for of 遍历数组中的每一项
  // 如果有和 value 值一样的，就返回 true 否则返回 false
  for (const val of array) {
    if (val === value) {
      return true
    }
  }
  return false
}

console.log(includes(arr, 6))
```

还有些要注意：

`includes()` 方法只能查找基本类型的元素，对于引用类型是查找不到的，例如：

```js
const arr = [{ a: 'css' }, { b: 'js' }, { c: 'html' }]

console.log(arr.includes({ b: 'js' }))
// 虽然查找的是 { b: 'js' } 看似的一样，但是内存地址的不一样的，所以返回 fasle
```

上述方法和下面实例是一样的：

```js
const a = []
const b = []
console.log(a === b)

const c = {}
const d = {}
console.log(c === d)
// 引用类型看似是一样，但是内存地址不一样，所以全部返回 fasle

const e = []
const f = e
console.log(f === e)
// 这样把e 赋值给了 f 那么就全等了，返回 true
```

## 数组进阶

### filter()

`filter` 方法，用于对数组进行**过滤**，查找满足条件的所有元素 **返回数组**

该方法中可以有三个参数，分别是：**每一项元素、索引、原数组**

```js
const arr = ['12', '13', '14', '15']
arr.filter((item, index, arr) => {
  console.log(item)
  console.log(index)
  console.log(arr)
})
// 12
// 0
// (4)["12", "13", "14", "15"]
// 13
// 1
// (4)["12", "13", "14", "15"]
// 14
// 2
// (4)["12", "13", "14", "15"]
// 15
// 3
// (4)["12", "13", "14", "15"]
```

它可以遍历出数组中的每一项，返回**布尔值**

如果返回真，那么数组中是元素就全部返回，否则就返回空数组

```js
// 为真 全部返回
const arr1 = ['12', '13', '14', '15', '16', '17', '18']
const res = arr1.filter((item) => {
  return true
})
console.log(res)
// (7) ["12", "13", "14", "15", "16", "17", "18"]

// 为假 返回空数组
const arr1 = ['12', '13', '14', '15', '16', '17', '18']
const res = arr1.filter((item) => {
  return false
})
console.log(res)
// []
```

- 实例，返回数组中大于 15 的元素，组成新的数组

```js
const arr = ['12', '13', '14', '15', '16', '17', '18']
const res = arr.filter((item) => {
  return item > 15
})
console.log(res)
// (3) ["16", "17", "18"]
```

> 所以这个函数对于取到一部分的值，进行过滤处理，是非常友好的。

那么过滤函数是怎么实现的呢？下面是自己封装的一个过滤函数，用于深入了解过滤函数实现原理：

```js
const hd = [1, 2, 3, 4]
// array 原数组
// except 过滤掉的元素
function filter(array, except) {
  const newArray = []
  for (const value of array) {
    // 判断如果传递来的数组中没有循环数组中的元素，那么就将其放在新数组中
    if (except.includes(value) === false) {
      newArray.push(value)
    }
  }
  return newArray
}

// 这里想把 2,3 过滤掉掉
console.log(filter(hd, [2, 3]))
// (2) [1, 4]
```

### map()

`map()`方法用于映射数组

可以在不改变原数组的情况下，复制出来一个新的数组

```js
const arr = ['js', 'jquery', 'css']

const res = arr.map((item) => {
  return (item = item + '123')
})

console.log(res) // (3) (3) ["js123", "jquery123", "css123"]
console.log(arr) // (3) ['js', 'jquery', 'css']
```

> 类似克隆出来一个数组，不会影响原数组

### find()

`find`方法，可以查找出数组中的每一项

```js
const arr = [1, 3, 6, 5]

arr.find(function (item) {
  console.log(item)
})
// 1 3 6 5
```

查找满足条件的第一个单个元素 **返回布尔值**，找到符合条件的元素，然后返回该元素，没有符合条件的，则返回 undefined

```js
const arr = [12, 13, 14, 15, 16, 17, 128]
function changeArr() {
  return arr.find((n) => {
    return n > 14
  })
}
console.log(changeArr())
// 15
```

- filter 和 find 结合实例

有一个数组 arr1 和 arr2 现在想要得到 arr1 - arr2 的数据，并且返回一个新的数组

```js
const arr1 = [
  { name: '小明', id: 1 },
  { name: '小张', id: 2 },
  { name: '小例', id: 3 },
  { name: '小李', id: 4 },
  { name: '小赵', id: 5 },
  { name: '小萌', id: 6 },
]

const arr2 = [
  { name: '小例', id: 3 },
  { name: '小萌', id: 6 },
]

function changeArr() {
  return arr1.filter((item1) => {
    return !arr2.find((item2) => {
      return item1.id === item2.id
    })
  })
}
console.log(changeArr())

// 结果为：
// [
//   {name: "小明", id: 1},
//   {name: "小张", id: 2},
//   {name: "小李", id: 4},
//   {name: "小赵", id: 5}
// ]
```

### every()

`every()` 方法返回布尔值，**遍历出的每一项必须全部为真，才返回真，否则返回假**

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 },
]

const res = user.every(function (item) {
  return false // 根据条件返回 true 或 false
})
console.log(res) // false
```

可以使用这个方法，来调查分数及格的情况：

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 },
]

const res = user.every(function (item) {
  item.fen >= 60
})

console.log(res ? '全部及格' : '有些没有及格')
```

### some()

`some()` 方法返回布尔值，**遍历出的每一项只要有一项为真，就返回真；如果为假，则每一项都遍历一次**

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 },
]

const res = user.some(function (item) {
  console.log(item)
  return false
})
// {name: "小明1", fen: 78}
// {name: "小明2", fen: 92}
// {name: "小明3", fen: 37}
// {name: "小明4", fen: 56}
```

如果第一项判断为真了，就不继续向下判断了，直接返回第一项：

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 },
]

const res = user.some(function (item) {
  console.log(item)
  return true
})
// {name: "小明1", fen: 78}
```

## 数学对象

### Math.max()

`Math.max()` 获取最大值

```js
console.log(Math.max(12, 3, 56))
// 56
```

### Math.min()

`Math.min()` 获取最小值

```js
console.log(Math.min(12, 3, 56))
// 3
```

### Math.ceil()

`Math.ceil()`向上取整

```js
console.log(Math.ceil(3.5655))
// 4
```

### Math.floor()

`Math.floor()`向下取整

```js
console.log(Math.floor(3.5655))
// 3
```

### Math.random()

`Math.random()` 随机数

```js
console.log(Math.random())
```

> 随机数是 >=0 ~ <1 之间是数

- 要获取一个 1 ~ x 的一个整数随机数，可以通过下面公式直接获取

```js
// 这里想获取一个 1 ~ 10 的随机数
console.log(Math.ceil(Math.random() * 10))
```

公式为：`Math.ceil(Math.random() * 最大值)`

- 要获取一个区间的随机数，可以通过下面公式直接获取

```js
// 这里想取到 2 - 5 直接是随机数
console.log(2 + Math.ceil(Math.random() * (5 - 2)))
```

公式为：`最小值 + Math.ceil(Math.random() * (最大值 - 最小值))`

那么通过上面的随机数方法，我们可以做一个简易的点名系统

```html
<p class="name"></p>
<script>
  const arr = ['小张', '小李', '小明', '小红', '小强', '小周']

  const name = document.querySelector('.name')

  const length = arr.length // 获取数组的长度
  const num = Math.floor(Math.random() * length)
  name.innerHTML = arr[num]
</script>
```

## 日期对象

### new Date()

可以通过 `new Date()` 获取当前时间

```js
const date = new Date()
console.log(date)
```

### Date.now()

`Date.now()` 获取当前时间戳

```js
console.log(Date.now())
```

通过时间戳，我们可以计算程序执行所用的时间，下面以 for 循环举例

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```

### getTime()

获取指定日期的时间戳 `getTime()`

```js
const time = new Date('2000-10-1 12:23:11') // 获取目标时间
console.log(time.getTime()) // 使用 getTime() 方法将时间转换为时间戳
// 下面三种方法也可以转换
console.log(time * 1)
console.log(Number(time))
console.log(time.valueOf())
```

> 以上转换的 4 种方法都可以使用

- 将时间戳转换为时间对象

```js
const time = new Date('2000-10-1 12:23:11')
const timeList = time.getTime()
console.log(new Date(timeList))
```

将时间戳转换为时间对象的方法也很简单，只有 `new` 一个新的日期对象，再把时间戳扔到括号里面即可

> new Date(时间戳)

- 获取当前时间的年月日时分秒

```js
const time = new Date() // 获取当前时间
const year = time.getFullYear() // 获取年份
const month = time.getMonth() + 1 // 获取月份
const day = time.getDate() // 获取日
const hour = time.getHours() // 获取小时
const minute = time.getMinutes() // 获取分钟
const res = `${year}-${month}-${day} ${hour}:${minute}`
console.log(res)
```

这么的写法比较麻烦，我们可以通过封装函数的方法，来实现上面代码段的重复利用

```js
// 获取到当前的时间
const time = new Date()

// 封装函数
// date 是当前的时间
// format 处理转换时间的格式
function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
  // 定义对象处理转换时间的格式
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getMinutes(),
  }
  // 用 for in 遍历出对象中的每一项 并使用 replace 替换
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

console.log(dateFormat(time, 'YYYY年-MM月-DD日'))
// 2021年-4月-3日

console.log(dateFormat(time, 'YYYY^MM^DD HH^mm^ss'))
// 2021^4^3 20^41^41
```

### toLocaleDateString()

`toLocaleDateString()` 方法可将 Date 对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```

## DOM 相关

### getAttribute()

`getAttribute()`方法可获取一个元素的属性值

```html
<img src="./src/壁纸.jpg" alt="" />

<script>
  const img = document.querySelector('img')
  const res = img.getAttribute('src')
  console.log(res)
  // ./src/壁纸.jpg
</script>
```

> 该方法仅可有一个参数

### setAttribute()

`setAttribute()`方法可更改一个元素的属性值

```html
<img src="./src/壁纸1.jpg" alt="" />

<script>
  const img = document.querySelector('img')
  img.setAttribute('src', './src/壁纸2.jpg')
</script>
```

### childNodes

`childNodes `方法可获取元素中内部的元素

```html
<body>
  <button>123</button>

  <ul>
    <li>哈哈哈</li>
  </ul>
  <script>
    console.log(document.body.childNodes)
    // NodeList(6) [text, button, text, ul, text, script]
  </script>
</body>
```

> childNodes 得到的结果并不是一个数组，但是它也有 `length` 属性，也可以使用数组的中括号方式通过索引获取里面的元素，使用 `Array.from()` 方法可以转换为真正的数组

### parentNode

`parentNode `方法可获取父级元素

> 仅会获得一个最近的亲父级标签元素

```html
<ul>
  <li>哈哈哈</li>
</ul>

<script>
  const li = document.querySelector('li')
  console.log(li.parentNode)
  // <ul>...</ul>
</script>
```

### children

`children `方法可获取子级元素

该方法可以获取到一个标签下的所有子集元素节点

```html
<ul>
  <li class="li1">
    <p>哈哈哈</p>
    <p>哈哈哈</p>
    <p>哈哈哈</p>
  </li>
  <li class="li2">222</li>
  <li class="li3">333</li>
</ul>

<script>
  const ul = document.querySelector('ul')
  console.log(ul.children)
  // 0: li.li1
  // 1: li.li2
  // 2: li.li3
</script>
```

> 该属性只返回元素节点

### nextElementSibling

`nextElementSibling`方法可获取一个元素的下一个元素

```html
<p class="title">哈哈哈</p>
<ul>
  <li>
    <p>1</p>
  </li>
</ul>

<script>
  const title = document.querySelector('.title')
  console.log(title.nextElementSibling)
  // <ul>...</ul>
</script>
```

> 或获得下一个元素及其下一个元素内包含的所有元素