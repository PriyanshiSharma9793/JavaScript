let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate)) 
//Date is object in js

let mycreatedDate = new Date(2022,0,22)  //Month is started from 0
console.log(mycreatedDate.toISOString())
//22 Jan 2022 00:00 (IST)
//↓ minus 5 hours 30 minutes
//21 Jan 2022 18:30 (UTC)
console.log(mycreatedDate.toLocaleString())

let mycreatedDate2 = new Date("2022-01-22")  //Month is started from 0
//console.log(mycreatedDate2.toLocaleString())

let timestamp= Date.now()
console.log(timestamp)
//console.log(mycreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))
