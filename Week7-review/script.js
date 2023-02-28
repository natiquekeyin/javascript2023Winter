// // Problem 1: Hint is Problem 2 in Practice questions Feb 6. Replace 10 with "Ten".

// // function replace10(value) {
// //   //   let re = /10/g;
// //   //   let temp = value.replace(re, "Ten");
// //   //   return temp;

// //   return value
// //     .trim()
// //     .replace(/\s{2}/g, "*")
// //     .replace(/me/g, "xx")
// //     .replace(/av/g, "AV")
// //     .toUpperCase();
// // }

// // console.log(
// //   replace10("        I  have  10  cop10ies  of 10 something           ")
// // );

// // Problem 2:

function createPicture(src, alt, width) {
  //   let image = "<img src='" + src + "' alt ='" + alt + "'/>";
  let image;
  //   if (width > 0) {
  //     image = `<img src = "${src.trim()}" alt = "${alt}" width = "${width}"/> `;
  //   } else {
  //     image = `<img src = "${src.trim()}" alt = "${alt}"/> `;
  //   }

  if (alt === undefined) {
    image = `<img src="${src}"/>`;
  } else {
    image = `<img src="${src}" alt="${alt}/>`;
  }
  console.log(image);

  // return <img src={src} alt = {alt}/>
}

createPicture("./images/abc.jpg", "Tyler");

// Problem 3 & 4:

// function changeDate(date) {
//   // here you need to write a re for required date fromat....
//   if (/^\d\d-\d\d$/.test(date)) {
//     // let newDate = date.split("-");
//     // console.log(newDate);

//     let [day, month] = date.split("-");
//     console.log(day);
//     console.log(month);

//     let someDate = new Date();

//     someDate.setMonth(month);
//     someDate.setDate(day);
//     console.log(someDate);
//   } else {
//     console.log("Bad format");
//   }
//   //   let newDate = date.split("-");
// }

// // changeDate("2023-02-15");

// changeDate("26-23");

// Problem 5 & 6: coordinates...

// [-79.021,32.222]

// function changeCoordinates(value) {
//   if (value.startsWith("[")) {
//     // you need NOT to consider [ while extracting the lng and lat...string functionto neglect [ from the string...]
//     var [lng, lat] = value.split(/\s*,\s*/g);
//     console.log("Starts with [");
//     console.log(lng);
//     console.log(lat);
//   } else {
//     console.log("Does not start with [");
//   }

//   lat = parseInt(lat, 10);

//   if (lat < -90 || lat > 90) {
//     throw new Error("Invalid lattitude");
//   }
//   return `(${lat}, ${lng})`;
// }

// console.log(changeCoordinates("[123       ,       89]"));

// Problem 7:

// function giveMimeType(filename) {
//   // first of all you need to find out the extenstion  the give filename...???

//   let ext = filename.toLowerCase().split(".")[1]; // use some other string fucntions to extract out extension....FOR SOLVING QAP...

//   switch (ext) {
//     case "html":
//     case "htm":
//       return `text/html`;
//     case "css":
//       return `text/css`;
//     case "webp":
//       return `image/webp`;
//     default:
//       return `applicaton/octet-stream- corrupt extension`;
//   }
// }

// console.log(giveMimeType("style.HTML"));

// Problem 8:

// function generateLicenseLink(licenseCode, targetBlank) {
//   // Replace this comment with your code...
//   // extract the part of the string after first -...
//   let url = `https://creativecommons.org/licenses/${licenseCode.replace(
//     "CC-",
//     ""
//   )}/4.0/`;

//   let element = `<a href="${url}">${url}</a>`;
//   //  <a href="./pages/index.html">./page/index.html</a>

//   if (licenseCode == "CC-BY") {
//     licenseCode = `Creative Common License`;
//   } else if (licenseCode == "CC-BY-NC") {
//     licenseCode = `Non commercial`;
//   }

//   console.log(element);
//   return element;
// }

// console.log(generateLicenseLink("CC-BY-NC"));

// Problem 9: Part 1

// function pureBool(value) {
//   // first case covered...
//   if (typeof value === "boolean") {
//     return value;
//   }

//   if (typeof value === "number") {
//     if (value > 0) {
//       return true;
//     }
//     return false;
//   }

//   if (typeof value === "string") {
//     value = value.toLowerCase();
//     switch (value) {
//       case "yes":
//       case "oui":
//         return true;
//       case "no":
//       case "non":
//         return false;

//       default:
//         throw new Error("Invalid value");
//     }
//   }
// }

// console.log(pureBool("xyz"));

// Problem 9 Part 2:

// arguments...
// ...values...

// Problem 10.. DO YOURSELF BY MY PREVIOUS HINTS... :)
// PLEASE STILL ASK HOW...

function parseDateString(value) {
  var workingDatevalue = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;
  if (workingDatevalue.test(value) === false) {
    throw new Error(
      "Format of date is incorrect, please use the format of YYYY-MM-DD"
    );
  }
  var usualDate = value.split("-");
  let year = usualDate[0];
  let month = usualDate[1];
  let day = usualDate[2];
  let typedinDate = new Date();
  typedinDate.setFullYear(+year);
  typedinDate.setMonth(+month - 1);
  typedinDate.setDate(+day);

  return typedinDate;
}
//return typedinDate.toLocaleDateString("default",{year: "numeric", month: "long", day: "numeric"})}
// console.log(parseDateString("2004-04-02"));

function toDateString(value) {
  let year = value.getFullYear();
  let month = value.getMonth();
  let day = value.getDate();
  return `${year}-${month}-${day}`;
}
//console.log(toDateString(date))
console.log(parseDateString("2020-02-12"));
console.log(toDateString(parseDateString("2023-02-17")));
