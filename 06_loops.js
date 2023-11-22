// for of

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`Each Char is ${greet}`);
}

// Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
for (const [key, value] of map) {
  console.log(key, " - ", value);
}

const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift By Apple",
};
// for (const key of myObj) {
//   console.log(key);
// }

for (const key in myObj) {
  console.log(`${key} shortcut For ${myObj[key]}`);
}

const programming = ["JS", "RB", "PY", "CPP", "Java"];
for (const key in programming) {
  console.log(key);
}

for (const key in map) {
  console.log(key);
}

const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach((val, key, arr) => {
  console.log(val, key, arr);
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = nums.filter((num) => {
  return num >= 5;
});
console.log(ans);
ans = nums
  .map((i) => i * 10)
  .map((i) => i + 1)
  .filter((i) => i > 40);
console.log(ans);

const temp = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(temp);
