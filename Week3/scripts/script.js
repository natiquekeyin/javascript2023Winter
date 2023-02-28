// Functions:
// A function is a subprogram, or a smaller portion of the code that can be called(invoked) by another part of the program...
// If I need to add two numbers multiple times in my program... I might write the same code to add 2 number smultiple times... BUT by using functions, we can write once the code to add 2 numbers and call it as many times as we want....

// What is an expression?????
//let x = y + 5; //equation...
// two expressions...
// AN expression is something that evaluates to a value...
// let x = 5;
// if(x === 5) ;//return either true or false..

// Functions are the first-class members of JS..We will acutally write multiple functions and together they will make up a JS program...
// 1. User-defined Functions (UDF)
// 2. Pre-defined Functions (PDF)

// 1. User-defined Functions:
//  i)Function Declarations, ii) Function Expressions, and iii) Arrow Functions...

// i) Function Declarations: When we use "funtion" keyword followed by the name of the function and parameter list in paranthesis... followed by the body of the function inside "{ }"

// function noop() {}
// function square(n) {
//   return n * n;
// }
// function add(a, b) {
//   return a + b;
// }

// // ii)Function Expressions: When we define a variable and assign it an "Annonymous" Function to it...
// // IN JS we can use functions as normal variables because of expressions syntax..

// let noop1 = function () {}; //anonymous functions...
// let square1 = function (n) {
//   return n * n;
// };
// let add1 = function (a, b) {
//   return a + b;
// };

// // console.log(typeof add1);
// // console.log(add1);
// // console.log(add1(1, 2));

// // iii) Arrow Functions (ES6):

// let noop2 = () => {}; // this is called arrow functions...
// let square2 = (n) => n * n;
// // if it is only returning.. we can use the above syntax.. :)
// let add2 = (a, b) => a + b;

// console.log(add2(1, 3));

// Parameter and arguments...

// function myLog(a) {
//   console.log(a);
// }

// myLog("Hello");
// myLog("Hello", "Alex");
// myLog();

// Built in object which is called "arguments".Eacch function has an implicit arugments variable available to it.. which is an arry like object containing all the arguments passed to the function....and we can use arguments.length to obtain the acutal number of arguments  passed to the function at runtime....;

// function myLog(a) {
//   console.log(a, arguments.length, arguments[0]);
// }

// // arguments[0] = first argument
// // arugments[1]= second argument.. and so on ...

// myLog("Hello");
// myLog("Hello", "Alex");
// myLog("a", "b", "c");

function sum() {
  var count = arguments.length;
  var total = 0;
  for (var i = 0; i < count; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6));
