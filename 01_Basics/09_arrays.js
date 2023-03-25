//array,
const myArr = [1,0,2,6,5,8]
console.log(myArr[2])

//shallow copy : share the same referrence point . That means whatever i am changing changes into original array
//as well.
//deep copy : do not shjare teh same referrence

const myHeroes = ["Shaktimann","Nagraj"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[1])

//Array methods
myArr2.push(6)
console.log(myArr2)

myArr2.pop()
console.log(myArr2)

myArr2.unshift(0)
// unshift is use to add the element in the start
console.log(myArr2)

myArr2.shift()
//remove the element from start
console.log(myArr2)

console.log(myArr2.includes(14))
console.log(myArr2.indexOf(14)) //will result in -1 (false)

const newArr = myArr.join()//array ius being converted to string 
console.log(typeof newArr)

//slice,splice

// console.log("A",myArr);
const myN1 = myArr2.slice(1,3)//3 won't be included.Array will not be affected
console.log("A ",myArr2)
console.log(myN1)

const myN2 = myArr2.splice(1,3)//array will be changed 
console.log("B ",myArr2)
console.log(myN2)



