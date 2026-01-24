const numbers=[1,43,69]
// forEach
// arr.forEach(callback)

const callback=(value,index,arr)=>{
console.log(value,index,arr)
return value
}

// let res=numbers.forEach(callback)
// numbers.forEach((v,value)=>{
//     console.log(value)
// })
// console.log(res)

// map
let res=numbers.map((value,index,arr)=>{
    return 'x'
})
console.log(numbers)
console.log(res)
// filter
numbers.filter(()=>{})


// reduce
numbers.reduce((acc)=>{},0)
// all are higher order function

