const score=400
console.log(score)

//defining a new object whose type is number.
const score2 = new Number(300)
console.log(score2)
console.log(score2.toString())
console.log(score2.toString().length)//Post conversion to string count chars
console.log(score2.toFixed(2))

const score3=23.456
console.log(score3.toPrecision(9))

const hundreds=100000000
console.log(hundreds.toLocaleString())
//By default the comma will be acc. to US standards
//so we give them what is intended 
console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-3))//only -ve values change to +ve.
console.log(Math.round(3.6))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.1))
console.log(Math.min(3,1,3,5,0))
console.log(Math.max(3,1,3,5,0))