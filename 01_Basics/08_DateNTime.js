let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
//In Js , months start from 0.
let myCreatedDate = new Date(2023,0,24)
console.log(myCreatedDate)
let myCreatedDate2 = new Date(2023,0,24,5,6)
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3 = new Date("01-03-2023")
console.log(myCreatedDate3.toLocaleString())
let myTimeStamp = Date.now();
console.log(myCreatedDate3.getTime())
console.log(Math.floor(Date.now)/1000)
let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))