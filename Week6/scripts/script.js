/* 

1. Split the string into an Array of separate rows (i.e., an Array with rows separated by \n). 
2.Each row contains information user info: ID, Name, Phone Number, and Height info all separated by commas. Split each row into an Array with all of its different fields. You need to deal with extra and/or no whitespace between the commas.
3.Get rid of any extra spaces around the Name field
4. Using a RegExp, extract the Area Code from the Phone Number field. All Phone Numbers are in one of two formats: "555-555-5555" or "5555555555". And show only area code..
5. Check if the Height field has "cm" at the end. If it does, strip that out, convert the number to inches, and turn it into a String in  the form "xx inches". For example: "152 cm" should become "59 inches".
6. After doing all of the above steps, create a new record with ID, Name, Area Code, Height In Inches and separate them with commas
7. Combine all these processed records into a new CSV formatted string, with rows separated by \n.


*/

var csvData = `0123,      Alan       Smith,555-567-3458,62 inches
0124                          ,         Mark       Lee    ,5554673452,         149 mm
0125,            Bob          Lee       ,                                    2268889999, 138 cm              `;

function splitIntoRows(s) {
  return s.split(/\r?\n/); //for linux purpose..
}

function removeExtraWhiteSpace(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);
  return matches ? matches[1] : phoneNumber; //this part... ternary opertaor...
}

function normalizeHeight(height) {
  // if height is alreay in inhes return it
  if (height.endsWith("inches")) {
    return height;
  }
  let cm = parseFloat(height); //take out the number from height.. JUST THE NUMBER...139cm... will produce 139.. BUT if it is cm124 Wont work...
  let inches = cm * 0.39;

  return `${inches} inches`;
}

function rowToFields(row) {
  //Split on , with or without whitespace on either side...
  let fields = row.split(/\s*,\s*/);

  // console.log(fields[1]);
  //fields[1] = fields[1].replace(/\s+/, " ");
  fields[1] = removeExtraWhiteSpace(fields[1]);

  //   Extract Area code from 555-555-5555 or 5555555555
  //   let phoneNumber = fields[2];
  //   let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);
  //   //   console.log(matches);

  //   if (matches) {
  //     fields[2] = matches[1];
  //   }

  fields[2] = extractAreaCode(fields[2]);

  fields[3] = normalizeHeight(fields[3]);

  // console.log(fields.join(","));

  return fields.join(",");
}

function processCSV(csv) {
  // Step1 - break csv into rows

  let rows = splitIntoRows(csv);

  //   Step2 - split all rows into array of fields

  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);

  //     //Add this set of fileds to our data..
  //     data.push(fields);

  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  //   this is by using function expression!

  //   let data = rows.map(function (row) {
  //     return rowToFields(row);
  //   });

  //   by using arrow function...in arrow functions if there is only one return statement, we can take out { } as well as return keyword... and function will be exactly the same as below...

  let data = rows.map((row) => rowToFields(row));

  return data.join("\n"); //join actually converts an array to a string... connecting the array fields with given string "\n"
}

var processed = processCSV(csvData);
console.log(csvData);
console.log("---------------------------------");
console.log(processed);
