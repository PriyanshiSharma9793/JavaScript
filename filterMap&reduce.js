// const coding=["js","ruby","java","os"]
// const values=coding.forEach((item)=>{
//    // console.log(item);
//     return item
// })
// console.log(values);
const mynums=[1,2,3,4,5,6,7,8,9]
const newnums=mynums.filter((num) => { // if we using scope{} then we use return keyword
    return num>4})
//console.log(newnums);

//Same way by using foreach
const newnumber=[]
mynums.forEach((num) =>{
    if(num>4){
        newnumber.push(num)
    }
})
console.log(newnumber)

const counting =[1,2,3,4,5,6,7,8,9]
//const newnum = counting.map( (NUM)=> { return NUM+10 })
const newnum= counting
              .map((num)=>num*10)
               .map((num)=>num+1)
               . filter((num)=>num>=40)
console.log(newnum);

//************Chaining**************** */
