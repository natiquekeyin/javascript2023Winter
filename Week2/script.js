// console.log("Start of Week2");

// // var, let, const ... ???

// // var :
// var fname = "Alan";
// console.log(fname);

// fname = "John";
// console.log(fname);

// // without initializing

// var lname;
// console.log(lname);

// // When you dont give a value to a variable, you get undefined

// // We can use only letters, numbers, _, $

// var name1; //legal name
// // var 1name;  // Illegal name... never start with number

// var first_name; //valid
// var first$name; // valid BUT DONT DO IT...
// var firstName; //
// var $first; // DONT DO THAT...

// //let: is same as var BUT scope wise its different..

// let name2;
// name2 = "Strong";
// console.log(name2);

// name2 = "Else";
// console.log(name2);

// // const:

// const name3 = "John";
// console.log(name3);

// // name3 = "Alex";
// // console.log(name3);

// // Exception: REMEMBER...ARRAY, STRINGS ...

// const ages = [19, 20, 21, 18];
// console.log(ages);
// CANNOT DO THIS ages=[1,2,3,4] BUT
// ages[0]=210;
// ages.push(23);
// console.log(ages);

// ages.pop();
// console.log(ages);

// Data types in JavaScript:
// Primitive & Reference Type:
//  Primitive:
// Stored directly on the location the variable accesses
// STORED IN THE STACK...

// Reference Data Types:
// Accessed by reference...
// They are STORED IN HEAP (MEMORY AREA)

// PRIMITIVE DATA TYPES:
// 1. string, 2. Number, Boolean, Null, Undefined,Symbols.

// REFERENCE DATA TYPES:
// 1.Arrays, 2. Object Literals, Functions, Dates, Our own reference dataypes etc...

// PRIMITIVE EXAMPLES
// string
// var any = "Hello";
// console.log(typeof any);
// // numbers
// var age = 20.3;
// console.log(typeof age);

// // Boolean
// var login = true;
// console.log(typeof login);

// // Null
// var hobbies = null;
// console.log(typeof hobbies);

// // Symbol
// var sym = Symbol();

// console.log(typeof sym);

// var something;
// console.log(typeof something);

// // REFERENCE DATATYPES
// // Arrays
// const marks = [23, 25, 12, 14];
// console.log(marks);
// console.log(marks[0]);

// // Object literals
// const address = {
//   city: "Kitchener",
//   province: "Ontario",
// };

// console.log(address.city);
// console.log(address.province);

// // Date:

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// Some predefined functions with different datatypes:

// let age = "20"; //casting of a variable..

// console.log(age);
// console.log(typeof age);
// console.log(age.length);

// let fname =
//   "Alex Singletonsdfgdsfdsfsdfsdfsdfdfsdfdsfdsfdsfsdfdsfdsfdsfdsfb sdfsdfsdfsdf";

// console.log(fname);
// console.log(typeof fname);
// console.log(fname.length);

// let val = String(2 + 29);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// Date to String:

// val = String(new Date());
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = [1, 2, 3, 5];
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = String([1, 2, 3, 5]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = (5).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = true.toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = Number("235.5");
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// // NaN .. Not  A  Number.... (which is not a number...)

// val = "890";
// val = Number(val);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// String concatenation...
// var val;
// const fName = "Alex";
// const lName = "Smith";
// const age = 20;

// val = fName + lName; //concatenated
// val = fName + " " + lName;
// val = "Welcome " + fName + "!" + lName;
// console.log(val);

// Operators:

// +, -, * , /, % ( Modulus)- Remainder Operator

// let val1 = 10;
// let val2 = 22;

//console.log(val2 % val1);

// if (val1 % 2 == 0) {
//   console.log("Even number");
// } else {
//   console.log("Not even number ");
// }

// Increment/ decrement oprator:
//  ++, --

// let x = 10;
// // add 1 to x and save it back in x

// //x = x + 1; // add 1 to x and store it in x...
// //x += 1; // addition assignment operator...

// // x++; // increments the x with 1...

// // console.log(x);

// // 2 types of increment/decrement operators:
// //  Pre increment, Post increment...

// console.log(x++); //post increment...
// console.log(++x); //pre increment..
// console.log(x--); // 12.. (internally it became..)
// console.log(x); //11
// console.log(--x); //10

// == equality operator..
// coersion... changing the type before comparing...

// let age = 27;

// if (age == 20) {
//   console.log("Welcome");
// } else {
//   console.log("Underage");
// }

// strict equality - almost ALWAYS use strict equality operator in JS... because of coersion.. ===

// && AND... || OR operator...

// BINARY OPERATOR: a +b always needs two operands...
// Unary operator: ++a, a-- makes complete sense..

// TERNARY OPERTOR

//   ? :

// condition ? value_if_true : value_if_false

// let age = 20;
// let message;

// // age === 20 ? console.log("Welcome") : console.log("UnderAge");

// message = age === 10 ? "Welcome" : "UnderAge";
// console.log(message);
// // one-liner if else statemetns....

// switch statment:

// let grade = "X";

// switch (grade) {
//   case "A+":
//     console.log("Congrats! You got A+ grade");
//     break;
//   case "A":
//     console.log("You got A grade");
//     break;
//   case "B":
//     console.log("You got B grade");
//     break;
//   case "F":
//     console.log("Bad you got F");
//     break;
//   default:
//     console.log("Wrong entry");
// }

// write a switch staement to print about the weather of the month...

// let month = "March";

// switch(month){

// }
// Practice of Switch statment...

// FOR LOOP:

// for (var i = 0; i < 10; i++) {
//   console.log("Hello " + i);
// }

/* 

for(initialization ; condition ; inc/dec)
{   true

}

1. intialization happens.. var i=0;
2. check condition .. if true  execute the body.. if false exit out of loop...
3. Go to increment/decrement.... 
4. Again test the condition.. if true  execute the body.. if false exit out of loop...

*/

// 1. Sequential.. one after the other...
// 2. Conditional... on the basis of condition ...something exectus..if else... switch
// 3. Looping: a series of instructions are repeatedly executed... for  while....
// 4. Transfer: Jump to some particular code in a program... for this we use "functions"

// function add(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function add(a, b) {
//   return a > b ? a : b;
// }

// let result;
// result = add(13, 5);
// console.log(result);

// // THIS FUNCTION IS NOT RETURNING ANYTHING...
// function square(a) {
//   console.log(a * a);
//   return a;
// }

// console.log(square(4));
