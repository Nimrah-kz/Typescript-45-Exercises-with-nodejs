"use strict";
// lower case
let personName = "Nimrah";
console.log("lowercase:", personName.toLowerCase());
//Upper case
console.log("uppercase:", personName.toUpperCase());
//Title  case
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
