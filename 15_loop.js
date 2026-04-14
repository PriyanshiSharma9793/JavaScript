//********for loop with break and continue**************** 
//for

for(let i=0; i <= 10;i++){
    const element = i;
    if(element==5){
        //console.log("5 is best no.")
    }
    //console.log(element)
}
//console.log(element) outside scope not working

for(let i=1; i <= 10;i++){
    //console.log(`outer loop ${i}`)
    for(let j=1; j <= 10;j++){
    // console.log(`inner loop ${j} and inner loop ${i}`)
    //console.log(i + '*' + j + '=' + i*j)
}
}
