const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
console.log(obj1);
console.log(obj2);

const obj3 = { obj1, obj2 };
console.log(obj3);
console.log(typeof obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
console.log(typeof obj4);

const obj5 = Object.assign(obj1, obj2);
console.log(obj5);
console.log(typeof obj5);

console.log(Object.keys(obj5));

console.log(Object.values(obj5));

console.log(Object.entries(obj5));

const course = {
  name: "JS In Hindi",
  price: "999",
  instructor: "Hitesh Choudhary",
};

const { instructor: courseInstructor } = course;
console.log(courseInstructor);
