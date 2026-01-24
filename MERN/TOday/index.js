// console.log('TOday is Monday')
//var let const
// var a = 10
// a=43
// // var a='hello'
// //one line at at time and is a interpreter language
// console.log(a)
// let b = 19
// // let b = 'jf'
// b=34
// console.log(b)


const c=69
// c = 99//error
console.log(c)


//datatypes

//!string
let d='Abinash'
let e="Regmi"
let f=`${d}ho${e}
hora haina hola`
console.log(f)

//! number
let g=34
let h=44.5
console.log(g,h)

//! boolen
let i=true
let j=false
console.log(i,j)

//! undefined
let k;
console.log(k);

//! null
let l=null
console.log(l)

//!operators
//*arithmetic
//+-/%* **
//*
// console.log(2+2)
// console.log("Hello " + "World")
// console.log(2+"2")

//*assignment
// =, +=, -=,..
// let m= 20
// m=m+10
// m += 10

//*Comparision
// <> <= =>, !=, !==, ==,  ===
// let x='10'
// let y=10
// console.log(x==y)
// console.log(x===y)

// logical
// &&, ||, !
// let x = true
// let y = false
// console.log(x && y)//false
// console.log(x || y)
// console.log(!x)

//ternary operator
//condition ? <statement 1>: <statement2>
// let age = 18
// let res=age>=18 ? "Adult": "Minor"
// console.log(res);


//non primitive data type
//object
//{}
const person={
    name: 'Abinash',
    age: 22,
    email:"abinashregmi01234@gmail.com",
    password:"1233"


}

// *read
// dot notation 
// let person_name=person.name
// console.log(person_name)
// console.log(person.email)
// console.log(person.password, "\n", person.email)
// let key='age'
// // bracket notation[]
// console.log(person['password'])
// console.log(person[key])
// // add
// person.age=23
// console.log(person)
// // modify
// person.name="Hari"
// console.log(person)

// delete person.name
// console.log(person)

//array
// []
let numbers=[1,2,3,4,5]
// // Read
// // console.log(numbers)
// // console.log(numbers[0])
// // adding new element in the end
// numbers.push(7,8,9)
// console.log(numbers)
// //from first index
// numbers.unshift(0,-1,-2)
// console.log(numbers)
// //remove last element from first index
// numbers.pop()
// console.log(numbers)
// // remove first element
// fin=numbers.shift()
// console.log(fin);
// console.log(numbers);
// //from end index
// console.log(numbers.pop())
// console.log(numbers);
//* splice
// console.log(numbers);
// const result=numbers.splice(1,2,10,11,12)
// console.log(result);

// console.log(numbers);



//function
function tuesday(
    user
){
    console.log("Today is Aashutosh Birthday",user);
}

// tuesday();
// tuesday();
// tuesday();
// tuesday();
// tuesday();
// tuesday();
// tuesday();
// tuesday();
// tuesday();
// tuesday();

// function with parameter and arguments
// function tuesday(
//     user
// ){
//     console.log("Today is Aashutosh Birthday",user);

// // }
// // tuesday(
// //     'everyone'
// // );
// // tuesday(
// //     'Abinash'
// // );

// function add(
//     a,b,c
// ){
//     console.log("Today is Aashutosh'sirthday",a+b+c );
//     return a+b+c;
// }

// const result=add(65,3,1) //with return type
// console.log(result);

// function tuesday(
//     user="Guest"
// ){
//     console.log("Today is Aashutosh Birthday",user);
// }

// tuesday('everyone');
// tuesday();

// function expression
// const add=function (
//     a,b
// ){
    
//     return a+b;
// }

// const sum=add(4,5)
// console.log(sum);

// arrow function
// const add = (a,b) => {
//     return a+b;
// }

// const sum=add(10,15)
// console.log(sum);

// //! callback function
// const parent = (a) =>{
//     console.log("parent")
//     a(45)
//     console.log(a)

// }

// // const children = (b) =>{
// //     console.log("children",b)
// //     return 455
// // }

// // anonymous function
// // parent(children)
// parent(() =>{
//     console.log()
//     console.log("Hello")
//     return 455
// })
// let x = 30
// parent(30)

// parent(children)

// higher order function because the parent has more than one function and it retuns value as well

//
// const multiplier = (factor) =>{
//     const mulitpy=(b)=>{
//         return factor * b
//     }
//     return mulitpy
// }

// const double = multiplier(2)
// console.log(double(10))
// console.log(double(20))

// const multiply_by_5 = multiplier(5)
// console.log(multiply_by_5(3))

// const hof = (a,b,operation) =>
//     {
//         operation(a,b)
//     }

// const addition=(a,b,)=>{
//     console.log(a+b)
// }

// hof(12,4,addition)
// hof(12,3,(a,b,)=>{
//     console.log(a*b)
// })

