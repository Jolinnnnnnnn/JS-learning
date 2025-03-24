//学习资料https://www.bilibili.com/video/BV15L14y1a7or?spm_id_from=333.788.videopod.episodes&vd_source=29a644edf31ccb340789ff33bdae73e5&p=1
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

//这是对象数组
const todos = [
    {
      id: 1,
      text: "Take out trash",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Meeting with boss",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Dentist appt",
      isCompleted: false,
    },
  ];
  
  console.log(todos);
  console.log(todos[1].text);

//JSON格式，key是双引号
//打印JSON格式
//JSON中大括号保存对象：{ "键1": "值1", "键2": "值2" }
//JSON中方括号保存数组：[ "值1", "值2", "值3" ]
  const todoJSON =JSON.stringify(todos);
  console.log(todoJSON);

//js条件语句，==表示值相同，类型可以不同(比如字符串“10”与数字10)；===表示值与类型都相同； 
//三元运算符，color = x>10 ? "red" : "blue", 条件为真时/条件为假时

const x =10;
const color = x>10?"red":"blue";
switch(color){
    case"red":
    console.log("color is red");
    break;
    case"blue":
    console.log("color is blue");
    break;
    default:
    //哪种情况都不符合
    console.log("color is Not red or blue");
}

//for循环和while循环
for (let todo of todos){
    console.log(todo);
    console.log(todo.id);
}
