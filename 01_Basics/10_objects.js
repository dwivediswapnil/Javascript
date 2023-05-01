//singleton: Object created from a constructor 
//singleton cannot  be created from literals
//Object creation via constructor -->singleton
//Object literals 

//symbol declaration
mySym = Symbol("key1")

const jsUser = {
    name : "Swapnil",
    [mySym]:"Brits",
    age:32,
    location:"Lucknow",
    email: "lp@gmail.com",
    isLoggedIn : false,
    lastLoginDays :['Monday','Tuesday']
} //Object created 

//---------------------------------
console.log(jsUser["email"])
console.log(jsUser.email)
//---------------------------------
//These both ways aren't correct

console.log(jsUser[mySym])

//If we wish to override the value
jsUser.email = "p21234@cpt.com"
console.log(jsUser["email"])
//Now if i wish to lock the object , then
// Object.freeze(jsUser)

// Functions
jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting())
console.log(jsUser.greeting)//-->will return the reference
//of the function

//String interpolation
jsUser.greeting = function(){
    console.log(`Hello JS user,${this.email}`);
}
console.log(jsUser.greeting())






