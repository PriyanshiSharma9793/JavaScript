//Immediately Invoked function Expressions(IIFE)
//Global scope ke pollution ko hatane ke liye iife ka use krte h
(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})();//FOR ENDING THATS WHY WE USES;

( (name) =>{
    //simple iife
    console.log(`DB CONNECTED ${name}`);
} )('Priya')
