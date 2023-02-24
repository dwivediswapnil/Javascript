//We denote strings via ""/'' in JS.
const name="Swapnil"
const age=30
console.log(name+age);
console.log(name+age+age);
console.log(age+age+name);
console.log(`Hi my name is ${name} and age is ${age}`)
//another way to declare string 
const name2= new String("Swapnil Test")
console.log(name2)
const name3="ishaan"
console.log(name3)
console.log(name2.charAt(2))
console.log(name3.indexOf('a'))

const croppedName=name3.substring(0,4)
// console.log(croppedName)
console.log("====")
//We can give negative values in slice 
console.log(name3.slice(-5,3))//(three characters from last)
//(In slice method , last character is given -1 index)
console.log(name3.replace('s','Po'))
console.log(name3)
console.log(name3.includes('s'))
