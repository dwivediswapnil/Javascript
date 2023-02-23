//Based on how the data is stored and accessed in memory,
//they are classified into 2 types.
//1: Primitive data types(7types)
//(when copying , original data's reference is not 
//given infact a copy is given to you for making changes)=CALL BY VALUE
//String,boolean,Number,null(means empty),undefined,Symbol,BigInt

//Reference Type(Non-primitive)
//Array, Objects, Functions

//JS is synamically typed language
//this means you can just assign anything 
//you want to the variable and it will work.
const score=100
const scoreValue=109.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;//leaving it like this will make the value as undefined.
const bigNumber=1223213434323443443n

const heroes=['Batman','Deadpool','wolverine']
//We define objects in {//key:value pairs}
let myobj={
    name:'Swapnil',
    age:30
}
//function definition
//function(){}
//storing the function in a variable
const funct=function(){
    console.log("Hello World")
}
console.log(typeof(heroes))
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object