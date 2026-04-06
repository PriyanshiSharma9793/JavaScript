console.log("2"<3)
console.log(null>0)
console.log(null<0)
console.log(null==0)
console.log(null>=0)
console.log(null<=0)
console.log(undefined<0)
console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined<=0)

//===
console.log("2"===2)
console.log("2"==2)

//Primitive is call by value datatype
//7 types: String,Number,Undefined,Null,Boolean,Symbol,BigInt

//Non Primitive  is call by reference datatype
//Array,Objects,Functions

const id =Symbol('123')
const id2=Symbol('123')
console.log(id===id2)

//Array
const heroes=["Priya","nandini","kratika"]
//Objects
let Myobj={
    name:"Priya",
    class:"seventh",
}
//Functions
const myfunction= function(){
    console.log("HII")
}
