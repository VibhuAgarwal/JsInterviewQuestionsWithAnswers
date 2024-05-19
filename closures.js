// Create a counter function and getValue functionality
const privateCounter = () => {
  let count = 0;
  return {
    increment: (val = 5) => {
      count += val;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();
counter.increment(4);
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
console.dir(counter.getValue);
console.log("------------------------");
//Outputs  - 4 9

const secretFn = () => {
  let secret = "foo";
  return () => secret;
};
const getSecret = secretFn();
console.log(getSecret());
//Outputs - foo
