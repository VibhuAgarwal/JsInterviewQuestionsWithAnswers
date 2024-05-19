//Mapping users to get username

const users = [
  {
    id: 1,
    name: "Vibhor",
    age: 29,
    isActive: true,
  },
  {
    id: 2,
    name: "Draco",
    age: 25,
    isActive: true,
  },
  {
    id: 3,
    name: "Deepak",
    age: 24,
    isActive: false,
  },
];

const data = users
  .sort((a, b) => (a.age > b.age ? 1 : -1))
  // .filter((user) => user.isActive)
  .map(
    (user) => user.name + " " + user.age + " " + user.id + " " + user.isActive
  );
console.log("Sorted data", data);
console.log(
  "--------------------------------------------------------------------------"
);

// Difference bw null and undefined
let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);
console.log(
  "--------------------------------------------------------------------------"
);

let fool = 1;
console.log("foooooooo-", fool);
//Outputs - cannot access fool before initialization.

console.log("fooooooool1-", fool1);
var fool1 = 1;
// Outputs - undefined

fooo = 3;
console.log(fooo);
var fooo;
// Outputs - 3

console.log(bar);
const bar = 1;
// Outputs - cannot access bar before initialization

hoo();
function hoo() {
  console.log("Hoo");
}

console.log(
  "--------------------------------------------------------------------------"
);

// Hoisting
var a;
function foo() {
  a = 20;
  console.log(a);
  return a;
}
console.log(a);
b = foo();
console.log(a);
//Output undefined 20 20 - a is already declared outside the function but assigned in the function.
//So, it is hoisted and gets 20 as value.

// Hoisting
var a;
function foo() {
  var a = 20;
  console.log(a);
  return a;
}
console.log(a);
b = foo();
console.log(a);
//Output undefined 20 undefined - a ia already declared outside, but again a is declared inside the function.
//So the assigned value will not be hoisted and it will be undefined.

console.log(
  "--------------------------------------------------------------------------"
);
