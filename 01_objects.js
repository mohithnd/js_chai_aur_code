// Singleton
// Object.create()

// Object Literals
const user = {
  name: "Mohit",
  "Full Name": "Mohit Agrawal",
  age: 20,
  location: "Jaipur",
  email: "mohitagrawalhnd2003@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(user.email);
// console.log(user["email"]);

// console.log(user["Full Name"]);

console.table(user);
// Object.freeze(user);
user.email = "a@b.com";
console.table(user);

user.greeting = function () {
  console.log("Hello JS User...");
};

user.greeting();

user.greeting2 = function () {
  console.log(`Hello JS User : ${this.name}`);
  console.log(`Hello JS User : ${this["Full Name"]}`);
};

user.greeting2();
