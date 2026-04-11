const myArr=["Priya",1,2,3,4,5,6]
//Array is resizable in js , datatypes is different,not a associative array
//shallow copy - share the same reference
//deep copy -do not share the same reference
console.log(myArr[0])

//Array Methods
myArr.push(7)
myArr.unshift(0)
console.log(myArr)
console.log(myArr.includes(7))
console.log(myArr.indexOf(78)) // if element isnot present then gives -1
console.log(myArr.indexOf(5))

const newarray = myArr.join()
console.log(myArr)
console.log(typeof(newarray))

//slice splice 
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)
const myn2=myArr.splice(1,3)

console.log("C",myArr)
console.log(myn2)


//Slice is not manipulated of original array
//Splice is manipulated of original array 
// Slice range(1,3) it does not include last  op-1,2
//Splice range(1,3) it include op-1,2,3
const marvel_heroes = ["thor","aryan","spiderman"]
const dc=["superman","flasman"]
//marvel_heroes.push(dc)
//console.log(marvel_heroes);
//a=marvel_heroes.concat(dc)
//console.log(a)
//spread
const all=[...marvel_heroes,...dc]
console.log(all)

const another=[1,2,3,4,5,[8,9,6],[[8,5,3],3]]
const real =another.flat(Infinity);
console.log(real)

console.log(Array.isArray("hites"))
console.log(Array.from("hites"))
console.log(Array.from({name:"hitesh"})) //interesting
let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3))
