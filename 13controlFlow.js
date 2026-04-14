// //if statement
// // if(2=="2"){
// //    console.log("executed")
// // }else{
// //     console.log("not executed")
// // }
// // console.log("Not executed")

// const balance=1000
// //if(balance>500) console.log("test"),console.log("hii"); aise nhi krna h

// if(balance<500){
//     console.log("less then 500");
// } else if(balance<750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }

//Real life uasage
const userloggedin=true
const debit_card=true
const loggedinfromgoogle=false
const loggedinfromemail=true
if(userloggedin && debit_card){
    console.log("allow to buy course")
}
if(loggedinfromemail || loggedinfromgoogle){
    console.log("user logged in ")
}

