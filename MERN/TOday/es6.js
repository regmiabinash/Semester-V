// let const'
// template literal

// // destructuring
let user = {
    name: "Abc",
    email: "abinash@gmail.com",
    age:23
}

// // let user_name=user.name
// let name=''
// let {name:user_name,email,age} = user
// console.log(user_name,email, age)

// let arr = [1,2,3,4,5]
// let [a,b,c]=arr
// console.log(arr[a])
// console.log(arr[b])
// console.log(arr[c])

// spread & rest operator (...)

// rest
let {name,...rest} = user
// let [a,...b]=arr

// console.log(rest)
// console.log(b)

// // 
// const add =(...numbers) =>{
//     // return a+b+c
// console.log(numbers)
//     return numbers.reduce((acc,val)=> {
//         return acc= acc+val

//     } ,0)
// }
// console.log(add(1,54,6,78))
// console.log(add(1,54,6,7,8,9))

//? spread (...)
// let arr=[1,2,3,4,5]
// console.log(...arr)
// console.log(arr)

// let arr2 = [...arr,33,69]
// let arr2=arr
// arr2.push(100)
// console.log(arr)
// console.log(arr2)

// let user1 = {password:"1234",...user}
// console.log(user)
// console.log(user1)

// console.log(Math.max(...arr))

// asynchronous
// timers
console.log("start")

// const timer_id= setTimeout(()=>{
//     console.log("processing")
// },2000)
// // clearTimeout(timer_id);

// let i=0
// let id=setInterval(()=>{
//     console.log(i++)
//     console.log(i)
//     if(i==10){
//         clearInterval(id)
//     }
// },1000)


// promise
// fetch()
// const api = () =>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{

//         const res = true
//         if(res){
//             resolve({message:'Promise fulfilled'})
//         }else{
//             reject({message: "Promise rejected"})
//         }
//     },2000)
// //     });
// // };

// // console.log(api())
// // promise handling
// // promise chain
// // api().then((data)=>{
// //     console.log('then')
// //     console.log(data)

// // }).catch((error)=>{
// //     console.log(error)
// // }).finally(()=>{
// //     console.log('finally');
// // }
// // )

// // fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
//     return
// })
// .catch((error)=>{
//     console.log(error)
// })


console.log("end");

// async await

const add = async() =>{
    return
}
const fetchpost = async () => {
    try{
           const response= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data= await response.json()
    console.log(data)
    }
 
     catch(error){
        console.log(error)
    }finally{
        console.log("finally")
    }
}
 fetchpost()

// async function


