console.log("Hello, World!");
console.log("Hello, World!");
const accountId = 100;
let accountEmail = "priyanshi@gmail.com";
var accountPassword = "12345";
let accountCity = "Etawah";
//accountId=67; //not allowed
accountEmail = "geekforgeek.com";
accountPassword = "789";
accountCity = "Delhi";
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountPassword, accountEmail, accountCity]);
// Prefer not to use var because of issue in block scope and functional scope
 let accountState;
 console.log(accountState)
