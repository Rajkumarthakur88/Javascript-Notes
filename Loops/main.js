// ARRAY OF OBJECT

// let ArrObj = [
//   {
//     name: "Rajkumar Thakur",
//     age: 23,
//     isMarried: false,
//   },
//   {
//     name: "Rupali_Thakur",
//     age: 20,
//     isMarried: false,
//   },
//   {
//     name: "Uday_Singh_Thakur",
//     age: 50,
//     isMarried: true,
//   },
//   {
//     name: "Kaushallya_Thakur",
//     age: 45,
//     isMarried: true,
//   },
//   {
//     name: "Mangal_Thakur",
//     age: 21,
//     isMarried: false,
//   },
//   {
//     name: "Bulbul_Thakur",
//     age: 19,
//     isMarried: false,
//   },
//   {
//     name: "Manohar_Thakur",
//     age: 47,
//     isMarried: true,
//   },
//   {
//     name: "Mamta_Thakur",
//     age: 40,
//     isMarried: true,
//   },
//   {
//     name: " Chandar_Bai_Thakur",
//     age: 56,
//     isMarried: false,
//   },
//   {
//     name: "Shanta_Bai_Thakur",
//     age: 65,
//     isMarried: true,
//   },
//   {
//     name: "Daulat_Singh_Thakur",
//     age: 80,
//     isMarried: true,
//   },
// ];
// console.log(ArrObj);
// console.log(ArrObj.length);

// LOOPS

// WE CAN PRINT THE DATA OF ARRRAY BY RUNNING AN LOOP
// for (let i = 0; i < ArrObj.length; i++) {
//   console.log(ArrObj[i]);
// }

// WE CAN ALSO PRINT THE PARTICULAR ELEMENT OF AN ARRAY BY USING LOOP
// for (let i = 0; i < ArrObj.length; i++) {
//   console.log(ArrObj[i].name);
//   console.log("End");
// }

//
// for (let i = 0; i < ArrObj.length; i++) {
//   if (ArrObj[i].age >= 25) {
//     console.log(ArrObj[i]);
//   }
// }
// //
// for (let i = 0; i < ArrObj.length; i++) {
//   if (ArrObj[i].isMarried === true) {
//     console.log(ArrObj[i].name);
//   }
// }

// let x = 1,
//   y = 2;
// let operator = "Mul";
// console.log("The Value of X and Y are :" + " " + x + " " + "and" + " " + y);

// switch (operator) {
//   case "Add":
//     console.log("Addition is :-" + " " + (x + y));
//     break;
//   case "Sub":
//     console.log("Subtraction is :-" + " " + (x - y));
//     break;
//   case "Div":
//     console.log("Division is :-" + " " + x / y);
//     break;
//   case "Mul":
//     console.log("Multiplication is :-" + " " + x * y);
//     break;

//   default:
//     console.log("Invalid Entry");
//     break;
// }

//////Sorting of Array using for loop

let Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 1; i < Arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (Arr[i] < Arr[j]) {
      let SortArr = Arr[i];
      Arr[i] = Arr[j];
      Arr[j] = SortArr;
    }
  }
}
let Asc = [];
Asc.push(Arr);
console.log(Asc + " " + "Hello World");
