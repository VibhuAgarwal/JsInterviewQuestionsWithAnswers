let a = 10;
let b = 10;

function multiply(a, b) {
  return a * b;
}
const z = multiply(a, b);
console.log(z);
//Output - 100

const multiplier = (a) => {
  return (b) => {
    return a * b;
  };
};

console.log(multiplier(10)(10));
//Output - 100

const multiplies = (a) => (b) => a * b;
console.log(multiplies(10)(10));
//Output - 100
