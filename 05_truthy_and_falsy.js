// const userEmail = "mohitagrawalhnd2003@gmail.com";
const userEmail = [];
if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't Have User Email");
}

// Falsy Values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Truthy Values
// Other then falsy all are truthy
// "0", 'false', " ", [], {}, function(){}

const array = [];
if (array.length === 0) {
  console.log("Array Is Empty");
} else {
  console.log("Array Is Not Empty");
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object Is Empty");
} else {
  console.log("Object Is Not Empty");
}

// Nullish Coalescing Operator (??): null undefined
let val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 34;
console.log(val1);
val1 = null ?? 34 ?? 56;
console.log(val1);

// Terniary Operator
// Condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More Than 80") : console.log("Less Than 80");
