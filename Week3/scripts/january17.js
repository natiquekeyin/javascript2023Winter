// Practice of Functions and their types

// 1. Let's write a function to create a JavaScript library name generator: generateName("keyin") should return "keyin.js".

// Function Declaration
// function generateName(name) {
//   return name + ".js";
// }

// Function Expression

// let generateName = function (name) {
//   return name + ".js";
// };

// let generateName = function (name) {
//   if (name.endsWith(".")) {
//     return name + "js";
//   }
//   return name + ".js";
// };

// let generateName = function (name) {
//   return name.endsWith(".") ? name + "js" : name + ".js";
// };

// let name = "abc.";
// console.log(name, generateName(name));

// 2.A: A function to check if a number is between two other numbers INCLUSIVE:checkBetween(12,1,20) should return true and checkBetween(21,1,20) should return false....

// function checkBetween(value, low, high) {
//   if ((value) => low && value <= high) {
//     return true;
//   }
//   return false;
// }

// console.log(checkBetween(20, 1, 20));
// console.log(checkBetween(1, 1, 20));

// 2.B: A function to check if a number is between two other numbers, being inclusive if the final argument is true: checkBetween(12,1,20,true) should return true and checkBetween(21,1,20,true) should return false....

// // truthy and falsy...
// function checkBetween(value, low, high, inclusive) {
//   //   if (inclusive) {
//   //     return value >= low && value <= high;
//   //   }
//   //   return value > low && value < high;

//   return inclusive
//     ? value >= low && value <= high
//     : value > low && value < high;
// }

// let checkBetween1 = (value, low, high, inclusive) =>
//   inclusive ? value >= low && value <= high : value > low && value < high;

// console.log(checkBetween1(20, 1, 20, false));
// console.log(checkBetween(20, 1, 20, false));

// 3. A function to log all arguments larger than 255: showOutside(1000,5,123,233,266,267) should log 1000,266, 267..
// expand opertor for values...("...")

// let showOutside = function (...values) {
//   for (let i = 0; i < values.length; i++) {
//     let value = values[i];
//     if (value > 255) {
//       console.log(value);
//     }
//   }
// };

// let showOutside = function (low, high, ...values) {
//   for (let i = 0; i < values.length; i++) {
//     let value = values[i];
//     if (value > low && value < high) {
//       console.log(value);
//     }
//   }
// };

// showOutside(100, 5, 123, 2334, 266, 267);
// showOutside(1, 2, 355);

//console.log(showOutside(1, 100, 5, -3, 12, 20, 1, 50));

// -----------------------------------------------

// January 18,2023

// let showOutside = function (...values) {
//   let value = values.length;
//   for (let i = 0; i < value; i++) {
//     console.log(values[i]);
//   }
// };

// //showOutside();
// //showOutside("hello");
// showOutside("hello", "world", "welcome");
// showOutside(1, 2, 3, 2);

// let showOutside = function (low, high, ...values) {
//   let value = values.length;
//   for (let i = 0; i < value; i++) {
//     if (values[i] > low && values[i] < high) {
//       console.log(values[i]);
//     }
//   }
// };

// // showOutside("hello", "bye", "welcome", "anything");
// showOutside(2, 12, 3, 5, 13, 24, 6, 8);

// 4. Function to calculate HST on any amount...

// var defaultRate = 0.16;

// function calculateHST(amount, defaultRate) {
//   return amount * defaultRate;
// }

// console.log(calculateHST(25, defaultRate)); //NaN..Not A Number..some error happened in calculation...we are trying to multiply 25 with undefined...
// console.log(calculateHST(25, 0.17));

// Scope/Life of variables in JS:
// var, let... THEY ARE DIFFERENT IN TERMS OF SCOPE..

//  var str; //itself creates the variable...global instance..

function f() {
  var str; //hoisted str here....
  str = "hello";
  console.log(str);
  //var str; //hoists this line to line 132 before 133 here.???
}

//console.log(str);
// // because str is defined in the scopr of function f...

// f();

// hoisting is the process through which JS takes declaration of a variable to the top..or required level for it to be legal...
