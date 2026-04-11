//Singleton
//objects literals
//Object.create

const mysym=Symbol("key1")

const jsuser={
    name:"hitesh",
    "full_name":"Priyanshi Sharma",
    [mysym]:"key1",//v.imp using symbol in array ,if we dont use [] it behaves as a string
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isloggedin:["Monday"]
}
// console.log(jsuser["email"])
// console.log(jsuser.email)
// console.log(jsuser["full_name"])
// console.log(jsuser[mysym])
jsuser.email="hites@chatgptgmail.com"
//Object.freeze(jsuser)
jsuser.email="priya.com"
console.log(jsuser)
jsuser.greeting =function(){
    console.log("Hello js user")
}
console.log(jsuser.greeting())
console.log(jsuser.greeting)


jsuser.greeting2=function(){
    console.log(`Hello Priyanshi,${this.name}`)
}
console.log(jsuser.greeting2())


