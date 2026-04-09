const name="Priya"
const repo=23;
console.log(`hello my name is ${name} and my repository are ${repo}`) //String Interpolation

const game=new String("Priy-ans-hi")
console.log(game[0])
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('n'))
const newString =game.substring(0,5) //last value not include
console.log(newString)
const anotherString=game.slice(-6,-1) // unique bcoz add negative value
console.log(anotherString)
const another = "      Priyanshi      "
console.log(another)
console.log(another.trim()) // Remove spaces
const url="https://priya.com"
console.log(url.replace('priya','chetan'))
console.log(url.includes("ch"))
console.log(game.split('-'))
