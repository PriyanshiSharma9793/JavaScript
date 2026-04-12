const a={
    username:"Priyanshi",
    Price:999,
    welcomeMess:function(){
        console.log(`${this.username} ,Welcome to website`)
        console.log(this)
    }
  
}
//a.welcomeMess()
//a.username="sam"
//a.welcomeMess()
//console.log(this) 

// function chai(){
//     let u="Priya"
//     console.log(this.u)
// }
// chai()
// Same code but doifferent way to define function
// const chai= function(){
//    let u ="Priya"
//     console.log(this.u)
//  }
// chai()

 const chai= ()=>{
    let u ="Priya"
    console.log(this)
  }
chai()

//++++++++++Arrow Function+++++++++++
//Basic 
const add2=(num1,num2) =>{
    return num1+num2;
}
console.log(add2(3,4))

//implicit return
const addtwo=(num1,num2)=>(num1+num2)
console.log(addtwo(5,7))
