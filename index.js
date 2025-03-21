console.log('Hello World');
console.log('变量与变量类型')
//var,let(value可以被修改),const不可以（数组是容器，其内容可变）？，这是变量类型
//const必须在申明变量时就初始化数值，否则就会报错

//变量类型有string，number不区分浮点与int，boolean，null浏览器输出为object，undefined
//typyof 返回类型 
//s.length返回字符串长度，空格，符号都算作1
//s.toUpperCase()全部大写，s.toLowerCase()
//s.substring（）输入两个参数（参数是索引），用于分隔字符
//连用s.substring(0,5).toUpperCase()
//s.split(", ")指定特殊字符分割，最小分割''输入空字符串
const username='lin'
const age =20

//link
console.log('my name is' + username+ "and i am age")
//js special
console.log(`my name is ${username} and i am ${age}`) 
const hello =`my name is ${username} and i am ${age}`
console.log(hello)

//创建数组
const numbers=new Array(1,2,3,4,5)
console.log(numbers)

const fruits =['apple','orange',10,true]//js中数组里数据类型可以不同
//const数组可以被改变部分值，如果全部改变/全部申明报错
console.log(fruits[1])//访问数组元素，中括号加索引
fruits[2]='pear'//重新赋值改变元素
fruits.push('mango')//数组末尾增加元素
fruits.unshift//开头增加新元素
fruits.pop()//删除末尾元素

console.log(Array.isArray(fruits))//得到ture，判断是否为数组
fruits.indexOf('apple')//找索引



