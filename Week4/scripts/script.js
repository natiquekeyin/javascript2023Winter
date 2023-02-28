// // Hoisting: from previous week...

// // let... has a BLOCK level scope
// // var s = "Hello"; //global variable..
// // let x = 5;
// // function f() {
// //   let y = 10;
// //   console.log(s);
// //   for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //   }
// //   console.log("----------");
// //   console.log(x);
// //   console.log(y);
// // }

// // f();

// // SCOPE CHAINING...

// // var x; //globally x=1
// // function parent() {
// //   //var x = 2; //overrides/overwrites/shadows the value 1 from the global scope...
// //   //   x = 3;

// //   //   var x; //NOW JS will hoist "x"
// //   //   child(x) actually overrides/overwrites the value 2 from the function scope...
// //   function child() {
// //     console.log(x); //JS looks that whether x is defined within the child function scope or not..
// //   }
// //   child();
// // }

// // parent();

// // STRINGS AND ARRAYS IN JS:

// // let str1 = "hello";

// // let str2 = new String("world"); //this is actually creating a string by using "String" constructor(later on..)

// // string is an object data type... it contains the data as well as related functions inside itself...

// // Write a function that adds period to the end of the given string...

// let str = "The best. sound in. this world, is your. name";

// // function addPeriod(s) {
// //   return `${s}.`;
// // }

// function addPeriod(s) {
//   let lastPos = s.length - 1;
//   //   return s.charAt(lastPos) === "." ? s : `${s}.`;

//   return s.lastIndexOf(".") === lastPos ? s : `${s}.`;
// }

// console.log(addPeriod("hello."));
// console.log(addPeriod(str));

// // Tomorrow we will discuss about Arrays and Regular Expressions...
// str1.slice(2,7)
// let arr1 = str1.split("");
// // (3) ['he', '', 'o']
// "I2am2a2student".split("2");
// (4) ['I', 'am', 'a', 'student']
// "I am a student.".split(" ");
// (4) ['I', 'am', 'a', 'student.']

/*
"hello".replace("l","x");
'hexlo'
"hello".replaceAll("l","x");
'hexxo'
*/

// Arrays!

// let arr1 = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr3 = [0, "1", "another", true];

// let arr4 = [];
// arr4[3] = 45;
// arr4[2] = 55;

// // Properties and Methods..
// console.log(arr4.length);
// // methods

// arr4.push(10);
// arr4.pop();
// arr4.unshift(34);

// let arr = [];
// // to insert values at the end...
// arr.push(4);
// arr.push(5);
// arr.push(7);
// // to delete from the end
// arr.pop();
// // to insert in the beginning...
// arr.unshift(10);
// arr.unshift(20);
// // to delete from the beginning...
// arr.shift();

//arr.concat([7,8]);

// let arr=[1,2,3];
// undefined
// arr.includes(5);
// false
// arr.includes(2);

// let arr = [1, 2, 3];

// arr
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)
// arr.indexOf(3)
// 2
// arr.indexOf(5)
// -1

// myName
// (3) ['I', 'am', 'Noman']
// myName[0]
// 'I'
// myName[1]
// 'am'
// myName[2]
// 'Noman'
// let myNameStr = myName.join(" ");
// undefined
// myNameStr
// 'I am Noman'
// myName
// (3) ['I', 'am', 'Noman']

// Methods for Iterating accross the elements in an array..

// let list = [4, 5, 6, 7];
// let listCopy = [];

// by using for loop we are acheiving this....
// for (let i = 0; i < list.length; i++) {
//   let element = list[i];
//   element += 3;
//   listCopy.push(element);
// }

// BY using Array's forEach() method:

// 1. list.forEach();// for each value of list collection
// 2. list.forEach(function(element){});//run a function by storing each value of list in "element" variable...
// 3. { } run this function body for each value in the collection "list"

// list.forEach(function (element) {
//   element += 3;
//   listCopy.push(element);
// });

// list.forEach((element) => {
//   element += 3;
//   listCopy.push(element);
// });

// console.log(list);
// console.log(listCopy);

// Array's map( ) method...
// creates and returns a new array by applying the provided function...

let list = [4, 5, 6, 7];

// let listCopy = list.map(function (element) {
//   return (element += 3);
// });

let listCopy = list.map((element) => (element += 3));

console.log(list);
console.log(listCopy);

// forEach and map ... their difference..???
