const accountID =14455
//"const" are constant variables and cannot be changed.

let accountEmail = "s21dwivedi@gmail.com"
var accountPassword = "P123"
accountCity ="Jaipur"
let accountState

accountEmail = "s101dwivedi@gmail.com"
accountPassword = "P1235"
accountCity ="Bangalore"

console.table([accountEmail,accountPassword,accountCity,accountState])
/*
1.Prefer not to use "var" because of issue in block scope and functional scope.
2.Declaring any variable like "accountCity ="Jaipur" isn't a good way to declare but is not wrong either.
3.If i am declaring a variable like "let accountState" without initializing , it will give an output as "undefined".
*/