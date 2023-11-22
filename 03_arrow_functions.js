const user = {
  name: "Mohit Agrawal",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.name} , Welcome To The Website`);
    console.log(this);
  },
  temp: () => {
    console.log(this);
  },
};

// user.welcomeMessage();
// user.name = "Kapil Sharma";
// user.welcomeMessage();
// console.log(this);
// user.temp();

// function chai() {
//   let name = "Mohit";
//   console.log(this);
//   console.log(this.name);
// }
// chai();

// const chai = () => {
//   let name = "Mohit";
//   console.log(this);
//   console.log(this.name);
// };
// chai();

// const addTwo = (num1, num2) => ({ num1: num2 });
const addTwo = (num1, num2) => {
  return { num1: num2 };
};
// console.log(addTwo(3, 4));

const myArray = [1, 2, 3, 4, 5];
myArray.forEach((ele) => {
  console.log(ele);
});
