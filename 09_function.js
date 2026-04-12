function myname(){
    console.log("P")
}
//myname()
function addtwono(a,b){
    c=a+b;
    console.log(c)
}
const result=addtwono(7,8)
//console.log("result :",result)  //intersting
//*******to solve the problem of undefined */
function addtwono1(a,b){
    let result1=a+b
    return result1 //returm ke baad kuch bhi print nhi hota h 
    //console.log("priya")
   // return a+b;
}
const result1=addtwono1(5878686,7)
//console.log("result :",result1)
//result1 in function and outside function is different

function loginusermess(username="Chetan"){
    if(username===undefined){ //(!username)
        console.log("Please enter a user name")
        return;
    }
      return `${username} just Logged in`
}
console.log(loginusermess("Priyanshi"))
console.log(loginusermess())




