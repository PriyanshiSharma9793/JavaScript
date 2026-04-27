//for of loop
//[" "," "," ",""]
//[{},{],{}]
const arr=[1,2,3,4,5]
for(const  num of arr){
    console.log(num);
}
const greetings = "Hello World!"
for(const greet of greetings){
  console.log(`Each char is ${greet}`)
}

//Maps - It store only unique pair
const map =new Map()
map.set('In',"India")
map.set('Ca',"Canada")
map.set('Fr',"France")
map.set('Ca',"Canada")
console.log(map);
// We are not using for in loop in map
// for(const [key,value] of map){
//     console.log(key,':-',value);
// }
const myobj={
    game1:'NFS',
    game2 :'Spiderman',
    game3 :'Luckyman'
}
// It is not iterable by for of 
// for(const [key,value] of myobj){
//     console.log(key ,'->', value)
// }
//for in loop is used for onject
for (const key in myobj) {
  console.log(`${key} Shortcut is for ${myobj[key]}`);
}
// for in loop used in array-it don't give value only key is given
const arr1=["hindi","eng","math","sst","gk"]
for (const key in arr1){
    console.log(arr1[key]);
}
const coding=["js","ruby","java","os"]
// coding.forEach(function (val){
//   console.log(val);
// })
coding.forEach((item)=>{
  console.log(item);
})
//Another method 
// function primeme(item){
//   console.log(item);
// }
// coding.forEach(primeme)

coding.forEach((item,index,arr)=>
{
  console.log(item,index,arr)
})

const mycode=[
  {
   langname:"javascript",
   langfile:"js"
},
{
   langname:"python",
   langfile:"py"
},
{
   langname:"database",
   langfile:"db"
},
]
mycode.forEach((item) => {
  console.log(item)
})





