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
