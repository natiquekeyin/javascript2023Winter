// Regular Expressions:
// is a type of expression/statement that can be used i) to extract a particular string out of a big string.. ii) Also to match some particular input for validation etc... etc..

// colour... color(use this one..)
// colou?r .... color ... colour ..FINE...
// (519)1234567.. 5191234567, 519 123 4567

/* let re1 = /dog/;
undefined
let re2= new RegExp("dog");
undefined
re1
/dog/
re2
/dog/ */

// Special operators:

// * means aANY letter...
// [ ] set of letters.. one of them
// ^ is the negation of a set [^aeiou] anything but aeiou..
// \d any digit...
// \D NOT A DIGIT...
//  \ is for escape...
//  \w represents...[a-zA-Z_0-9] Just these letters are called a word \w.. THE OPPOSITE IS \W....

//  space is represented by \s
// ? optional character...
//  * means 0 or more ...occurences...
// + means 1 or more...
// {3} exactly 3...
// {3,5} between 3 to 5...
// {3,} any occurence from 3 onwards...
//  ^ ... look fro the beginning of the input string...
// $ match at the end of the input string...
//  ( ) it makes a capture group... it is very important...

// /(\(?\d{3}\)?[\s-]*)?\d{3}[\s-]*\d{4}/gi

//\w+@\w+\.+\w+/.test("abc@keyin.com");
// true
// /\w+@\w+\.+\w+/.test("abc@keyin");
// false
// /\w+@\w+\.+\w+/.test("@keyin.com");
// false/

// 'This is a string'.replace(" ","-");
// 'This-is a string'
// 'This is a string'.replaceAll(" ","-");
// 'This-is-a-string'
// 'This is a string'.replace(/\s/g,"-");
// 'This-is-a-string'
// 'This is a string'.replace(/\s/,"-");
// 'This-is a string'
// 'This is a string'.replace(/\s/g,"-");
// 'This-is-a-string'

// '1,       2,3,        4,5'.split(",");
// (5) ['1', '       2', '3', '        4', '5']0: "1"1: "       2"2: "3"3: "        4"4: "5"length: 5[[Prototype]]: Array(0)
// '1,       2,3,        4,5'.split(/,\s*/);
// (5) ['1', '2', '3', '4', '5']
// 'Alan     ,          Bob,     Christina       ,Doug'.splict(",");
// VM2758:1 Uncaught TypeError: "Alan     ,          Bob,     Christina       ,Doug".splict is not a function
//     at <anonymous>:1:54
// (anonymous) @ VM2758:1
// 'Alan     ,          Bob,     Christina       ,Doug'.split(",");
// (4) ['Alan     ', '          Bob', '     Christina       ', 'Doug']0: "Alan     "1: "          Bob"2: "     Christina       "3: "Doug"length: 4[[Prototype]]: Array(0)
// 'Alan     ,          Bob,     Christina       ,Doug'.split(/,\s*/);
// (4) ['Alan     ', 'Bob', 'Christina       ', 'Doug']
// 'Alan     ,          Bob,     Christina       ,Doug'.split(/\s*,\s*/);
// (4) ['Alan', 'Bob', 'Christina', 'Doug']

var csvData = `0123,Alan Smith,555-567-345,62 inches
0124,         Mark       Lee    ,5554673452,         149 cm
0125,            Bob Lee       ,2268889999, 138 cm`;

// Split the string in an array of separate rows(ie., an Array with rows separated by "\n")

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

// linux \r\n .. NEW LINE

var rows = splitIntoRows(csvData);
console.log(rows[0]);
console.log(rows[1]);
console.log(rows[2]);

// Each row contains information of user..ID, Name, Phone number, and height.. all separated by commas. Split each row into an Array with all of its different fields. And we need to deal with extra and/or no whitespace between the commas...

console.log(rows[1].split(","));
