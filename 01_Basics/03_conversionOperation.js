let score = 22
console.log(typeof score);
console.log(typeof (score));

//String being converted to number.
let score2 = "55"
console.log(typeof score2);
console.log(typeof (score2));
let valueInNumber = Number(score2)
console.log(typeof valueInNumber);

//alphanumeric being converted to number.
let score3 = "22sfd"
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2)
console.log( valueInNumber2)
//This above statement will result in Nan(Not a number).
//even if we encounter a string that cannot be converted into numbers ,
// then also we'll get "Nan" as an output.

//Null being converted to Number.
let score4= null
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log( valueInNumber4)
//Null value will result in the value '0'.

//Undefined being convereted to nuimber.
let score5= undefined
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)
console.log( valueInNumber5)

//"33"=>33
//"33abc"=>Nan
//true=>1, false=>0

//Number being converted to boolean.
let isLoggedIn = 1
let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);

//Empty spaces being converted to boolean
let isLoggedIn2 = ""
let booleanIsloggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsloggedIn2);

//String being converted boolean.
let isLoggedIn23 = "Swapnil"
let booleanIsloggedIn23 = Boolean(isLoggedIn23);
console.log(booleanIsloggedIn23);

//1=>true,0=>false
//""=false
//"Swapnil"=>true


//Number being converted to String.
let num3=33
let stringNumber=String(num3)
console.log(typeof stringNumber)
console.log(stringNumber)