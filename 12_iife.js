//Immediately Invoked function Expressions(IIFE)
//Global scope ke pollution ko hatane ke liye iife ka use krte h
(function chai(){
    console.log(`DB CONNECTED`)
})();//FOR ENDING THATS WHY WE USES;

( (name) =>{
    console.log(`DB CONNECTED ${name}`);
} )('Priya')
