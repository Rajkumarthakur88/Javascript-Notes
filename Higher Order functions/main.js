//let suppose we have an array of object

let users = [
  {
    name: "Abhijeet",
    age: 22,
    isMarried: false,
    Graduate: true,
    employed: false,
  },
  {
    name: "Ajay",
    age: 21,
    isMarried: true,
    Graduate: true,
    employed: true,
  },
  {
    name: "Yogen",
    age: 23,
    isMarried: false,
    Graduate: true,
    employed: false,
  },
  {
    name: "Rajkumar",
    age: 23,
    isMarried: false,
    Graduate: true,
    employed: false,
  },
  {
    name: "Sandeep",
    age: 24,
    isMarried: true,
    Graduate: true,
    employed: true,
  },
];

//.foreach
//we use foreach to print the iteration of any array, we can use this as an alternative of an for loop.
// users.forEach((user) => {
//   console.log(user);
// });

//.map
//we can use map to store the values of current array in an new array

// let GraduateEmployed = users.map((user) => {
//   return user.name;
// });
// console.log(GraduateEmployed);

// .filter
// we can use filter to filter the values from an existing array and store in an new array

// let GraduateEmployed = users.filter((user) => {
//   if (user.employed) {
//     return user.name;
//   }
// });
// console.log(GraduateEmployed);

// // .sort
let Arr = [1, 2, 8, 5];

// //Sorting of Array in Ascending Order
// let sortedArr = Arr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log(sortedArr);

// //Sorting of Array in Descending Order
// let sortedArr2 = Arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedArr2);

// .reduce
// let reduceArr = Arr.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(reduceArr);

let reduceArr = Arr.reduce((a, b) => {
  return (a + b) / 2;
}, 0);
console.log(reduceArr);

//////////////////////////////////////////////////////////////////////////////////////////////
// let variableName = 123
// const constantName = 123

// variableName = 321
// constantName = 321

// console.log(variableName);
// console.log(constantName);

// Data Types

// let string = "Shubham"
// let number = -123.1
// let boolean = true
// // let undefined
// let nothing = null
// let myArray = [1,2,3,4,5]
// let myObject = {
//     name : "Shubham",
//     age : 32,
//     isMarried : true,
//     pronouns : ["His" , "Him"]
// }

// console.log(myArray[0]);

// console.log(myObject.pronouns[0]);

// if(condition){
//     //statement
// }else if(condition 2){
//     //statement
// }else{
//     // default statement
// }

// let shubham = "ijk"
// let zaid = 26

// if(shubham > zaid){
//     console.log("Shubham Bada Hai");
// }else if(zaid > shubham){
//     console.log("Zaid Bada Hai");
// }else if (zaid === shubham){
//     console.log("Dono Bhai Hai");
// }else{
//     console.log("Invalid");
// }

// Switch Case

// let day = "123"

// switch(day){
//     case "MONDAY" :
//         console.log("Its Monday");
//     break;

//     case "FRIDAY" :
//         console.log("It's Friday");
//     break;

//     case "SUNDAY" :
//         console.log("It's Sunday");
//     break;

//     default :
//         console.log("Invalid Entry");
//     break;
// }

// Functions

// function greetingFunc(name){
//     console.log("Good Morning" + " " + name);
// }

// greetingFunc("Shubham")

// function addValue(x,y){
//     console.log(x+y);
// }

// addValue(5,10)

// Arrow Functions

// const addValue = (x,y) => {
//     console.log(x+y);
// }

// addValue(5,10)

// Array

// let users = [
//     {
//         id : 1,
//         name : "Shubham",
//         age : 24,
//         isMarried : true
//     },
//     {
//         id : 2,
//         name : "Ashish",
//         age : 14,
//         isMarried : false
//     }
// ]

// console.log(users.length);

// push : Insert Value From Behind

// users.push({
//     id : 3,
//     name : "Om",
//     age : 22,
//     isMarried : true
// })

//pop : Remove Value From Behind

// users.pop()

//unshift : Insert Value From Front(start)

// users.unshift({
//     id : 3,
//     name : "Om",
//     age : 22,
//     isMarried : true
// })

// shift : Removes Value From Front(Start)

// users.shift()

// console.log(users);

// Loop

// for(let i = 0 ; i < 100 ; i++){
//     console.log( i +  " " + "Hello World");
// }

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i*9);
// }

// for(let i = 0 ; i < users.length ; i++){
//     console.log(users[i].name);
// }

// users.forEach((user)=>{
//     console.log(user.name);
// })

/////
// Basics

// Number
// var number = 56

// var numberTwo = 44

// console.log(number * numberTwo)

// var principal = 1000
// var rate = 5
// var time = 1

// var si = principal*rate*time/100

// console.log(si)

// var sita = 20
// var gita = 23

// if(sita>gita)
// {
//     console.log("Sita is greater than gita")
// }
// else
// {
//     console.log("Gita is greater than sita")
// }

// if(true){
//     // This statement will run
// }else{
//     // This statement will run
// }

// var isLoggedIn = false;

// if (isLoggedIn) {
//   console.log("User Logged In");
// } else {
//   console.log("User Is Not Logged In");
// }

// var temprature = 0

// if(temprature >= 40){
//     console.log("Hot Weather")
// }else if(temprature >= 20 ){
//     console.log("Good Temprature")
// }else if(temprature  >= 10){
//     console.log("Cool Temprature")
// }else{
//     console.log("Wrong Temprature")
// }

// let shubham = 18

// if(shubham >= 18){
//     console.log("You can vote!!")
// }else{
//     console.log("You Can't Vote Only Note")
// }

// let firstName = "Imran"
// let lastName = "Khan"

// Concatenation

// console.log("My Name is" + " " +   firstName + " " +lastName)

// var F = 100;

// var C = (F-32)*5/9
// console.log(C)

// if(C > 40){
//     console.log("Hot")
// }else if(C > 20){
//     console.log("Normal")
// }else{
//     console.log("Cold")
// }

// var a = 5
// var b = 5

// if(a !== b){
//     console.log("No Equal")
// }else{
//     console.log("Equal")
// }

// var day = "SUNDAY";

// switch (day) {
//   case "MONDAY":
//     console.log("Its monday");
//     break;
//   case "TUESDAY":
//     console.log("Its tuesday");
//     break;
//   case "WEDNESDAY":
//     console.log("Its wednesday");
//     break;
//   case "THURSDAY":
//     console.log("Its thursday");
//     break;
//   case "FRIDAY":
//     console.log("Its friday");
//     break;
//   case "SATURDAY":
//     console.log("Its saturday");
//     break;
//   case "SUNDAY":
//     console.log("Its sunday");
//     break;

//   default:
//     console.log("Invalid Day")
//     break;
// }

// var shubham = [1,"2",3,4,5,6,7,8,9, true]

// console.log(shubham[1]);
// console.log(shubham.length)

// var myObj = {
//     name : "Imran",
//     age : 24,
//     isMarried : true
// }

// console.log(myObj.isMarried)

// var users = [
//     {
//         name : "Shubham",
//         age : 12
//     },
//     {
//         name : "Ankit",
//         age : 24
//     },
//     {
//         name : "HariOm",
//         age : 30
//     }
// ]

// console.log(users[0].name)

// var myValue  = 15

// switch (myValue) {
//     case 5 :
//         console.log("Winner")
//     break;

//     case 10 :
//         console.log("Close Call")
//     break ;

//     case 15 :
//     console.log("Too Far ")
//     break;

//     default :
//     console.log("Invalid")
//     break;
// }

// var greeting = "GOOD EVENING"

// switch(greeting){

//     case "GOOD MORNING" :
//     console.log("Its Morning")
//     break

//     case "GOOD EVENING" :
//     console.log("Its EVENING")
//     break

//     case "GOOD AFTERNOON" :
//     console.log("Its AFTERNOON")
//     break

//     case "GOOD NIGHT" :
//     console.log("Its NIGHT")
//     break

//     default :
//     console.log("Invalid")
//     break
// }

// Functions

// Declare the function
// function greetingFunction(name){
//     console.log("Hello" + " " + name)
// }

// Call the function
// greetingFunction("Shubham")

// function doubleFunc(value){
//     console.log(value*2)
// }

// doubleFunc(10)

// function calcSi(p,r,t){
//     console.log("Simple Interest :"  + " " + p*r*t/100)
// }

// calcSi(1000 , 5 , 1)

// function changeValue(value){
//     greeting = value
// }

// changeValue("GOOD EVENING")

// switch(greeting){

//     case "GOOD MORNING" :
//     console.log("Its Morning")
//     break

//     case "GOOD EVENING" :
//     console.log("Its EVENING")
//     break

//     case "GOOD AFTERNOON" :
//     console.log("Its AFTERNOON")
//     break

//     case "GOOD NIGHT" :
//     console.log("Its NIGHT")
//     break

//     default :
//     console.log("Invalid")
//     break
// }

// const x = 0

// x = 5

// x = 10

// // 299792458/ms

// console.log(x)

// for(let i = 0 ; i < 100 ; i++){
//     console.log("I Love Programming")
// }

// let number = 10

// for(let i = 1 ; i < 10 ; i++)
// {
//     console.log(number*i)
// }

// let numbers = [1,2,3,4,5,7,8,9,10]

// for(let i = 0 ; i < numbers.length ; i++)
// {
//     console.log(numbers[i])
// }

// let users = [
//   {
//     id: 1,
//     name: "Imran Khan",
//     isMarried: true,
//     age: 27,
//     start: 2016,
//     end: 2026,
//   },
//   {
//     id: 2,
//     name: "Zaid Sherry",
//     isMarried: false,
//     age: 24,
//     start: 2018,
//     end: 2030,
//   },
//   {
//     id: 3,
//     name: "Shubham Chouhan",
//     isMarried: true,
//     age: 23,
//     start: 2000,
//     end: 2020,
//   },
//   {
//     id: 4,
//     name: "Shubham Sharma",
//     isMarried: false,
//     age: 27,
//     start: 2012,
//     end: 2025,
//   },
//   {
//     id: 5,
//     name: "Harim Om Rathore",
//     isMarried: true,
//     age: 26,
//     start: 2024,
//     end: 2050,
//   },
//   {
//     id: 6,
//     name: "Ashwin Rathore",
//     isMarried: false,
//     age: 22,
//     start: 2008,
//     end: 2020,
//   },
//   {
//     id: 7,
//     name: "Raj Kumar",
//     isMarried: false,
//     age: 17,
//     start: 2015,
//     end: 2026,
//   },
//   {
//     id: 8,
//     name: "Yogen Thakur",
//     isMarried: false,
//     age: 16,
//     start: 2020,
//     end: 2035,
//   },
// ];

// for(let i = 0 ; i < users.length ; i++){
//     console.log(users[i].name)
// }

// let marriedArray = []

// for(let  i = 0 ; i < users.length ; i++){
//     if(users[i].isMarried === true){
//         marriedArray.push(users[i])
//     }
// }

// console.log(marriedArray)

// let adultArray = []

// for(let  i = 0 ; i < users.length ; i++){
//     if(users[i].age >= 18){
//         adultArray.push(users[i].name)
//     }
// }

// console.log(adultArray)

// function printName(name , lastName){
//     // console.log(name + " " + lastName)
//     console.log(name*lastName)
// }

// printName(5,5)

// let userNames = []

// for(let i = 0  ; i < users.length ; i++){

//    userNames.push(users[i].name)

// }

// console.log(userNames)

// let marriedUsers = []

// for(let i = 0  ; i < users.length ; i++){

//    if(users[i].isMarried){
//     marriedUsers.push(users[i])
//    }

// }

// console.log(marriedUsers)

// .forEach

// users.forEach(function(user){
//     console.log(user.name)
// })

// users.forEach(function(user){
//     console.log(user.age)
// })

// Old Traditional Functions
// function funcName(param){
//     //statment
// }

// Arrow Function

// const funcName = (param) => {

// }

// users.forEach((user ,index)=>{
//     console.log(user.name + " " + index)
// })

// map

// const something = function something(){
//     return 123
// }

// console.log(something())

// const names = users.map((user)=>{
//    return user.name
// })

// console.log(names)

// const ages = users.map((user)=>{
//     return user.age
// })

// console.log(ages)

// const marriedArray = users.filter((user)=>{

//     if(user.isMarried){
//         return true
//     }

// })

// console.log(marriedArray)

// const experienced = users.filter((user)=>{

//     if(user.end - user.start >= 25){
//         return true
//     }

// })

// console.log(experienced)
