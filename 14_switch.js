// //switch(key){
// case value:
//     break;
// default:
//     break;
// }
const month = "mar"
switch(month){
    case "jan":
    console.log("jan")
    break;
    case "feb":
    console.log("feb")
    break;
    case "mar":
    console.log("march")
    break;
    case "apr":
    console.log("april")
    break;
    default:
    console.log("Nothing")
    
}

//++++++++++++Notes++++++++++++
//All are false- false , 0, -0, BigInt  0n, null, undefined ,NaN, ""(without space)
//Otherwise is true- [], "0", 'false', " "(space), {}, function(){}

const useremail=[]
if(useremail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}
if(useremail.length===0){
    console.log("array is empty")
}

//++++++++++Empty Object++++++++++++
const emptyObj={}
 if(Object.keys(emptyObj).length===0){
       console.log("object is empty");
 }
