// //Singleton
// //objects literals
// //Object.create

// const mysym=Symbol("key1")

// const jsuser={
//     name:"hitesh",
//     "full_name":"Priyanshi Sharma",
//     [mysym]:"key1",//v.imp using symbol in array ,if we dont use [] it behaves as a string
//     age:18,
//     location:"jaipur",
//     email:"hitesh@gmail.com",
//     isloggedin:["Monday"]
// }
// // console.log(jsuser["email"])
// // console.log(jsuser.email)
// // console.log(jsuser["full_name"])
// // console.log(jsuser[mysym])
// jsuser.email="hites@chatgptgmail.com"
// //Object.freeze(jsuser)
// jsuser.email="priya.com"
// console.log(jsuser)
// jsuser.greeting =function(){
//     console.log("Hello js user")
// }
// console.log(jsuser.greeting())
// console.log(jsuser.greeting)


// jsuser.greeting2=function(){
//     console.log(`Hello Priyanshi,${this.name}`)
// }
// console.log(jsuser.greeting2())

//Singleton ,constructor
//const tinder=new Object() //singleton
//console.log(tinder)
const tinder2={}; //Non Singleton

tinder2.id="123456";
tinder2.name="priya";
console.log(tinder2)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Priyanshi",
            lastname:" Sharma"
    }
}
}
console.log(regularuser.fullname.userfullname.firstname)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)
const obj4={...obj1,...obj2}
console.log(obj4)
const user=[
    {id:1,
    email:"h@gmail.com"
    }
]
console.log(user.email)
console.log(Object.keys(tinder2))
console.log(Object.values(tinder2))
console.log(Object.entries(tinder2))
console.log(tinder2.hasOwnProperty('islogged'))
