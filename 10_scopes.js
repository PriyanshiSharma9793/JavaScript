//var c=7000
//{}-scope
let a=600
if(true){
   let a=10;
const b=5;
console.log("Inner:",a);
//c=30//var c=30;
}
console.log(a)
//console.log(b)
//console.log(c)

//*******Nested Scope**********
function one(){
    const user="priya"
    function two(){
       const website="utube"
       console.log(user)
    }
   //console.log(website)
   two()
}
one()
if(true){
    const username = "Priyanshi"
    if(username === "Priyanshi"){
        const website =" Utube"
        console.log(username + website)
    }

    //console.log(website) scope ke bahar access nhi hoga
}
//console.log(username) scope ke bahar access  nhi hoga

//++++++++++++ interesting++++++++++++++
console.log(addone(6))//it will access before function declaration
function addone(num){
      return num +1
}
//addone(6)
//expression ,store in variable
// it will not accesible before function declaration we generally known as hoisting
//console.log(addtwo(7))
const addtwo =function(num){
    return num+2;
}
//addtwo(7)
