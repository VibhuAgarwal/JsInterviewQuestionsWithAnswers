const arr = [1, 2];
const arr2 = [3, 4, 5];
const addToArray = (arr, el) => {
  //   arr.push(3);
  return [...arr, arr2];
};
const newArray = addToArray(arr, 3);
console.log("New Array : ", newArray);
console.log("Original Array : ", arr);
//Output - [1, 2, 3] without changing the elements in original array.

const arr1 = [1, 2, 3];
const append = (arr, el) => {
  arr.push(el);
  return arr;
};
const newAppend = append(arr, 3);
console.log("New Array : ", newAppend);
console.log("Original Array : ", arr1);
//Output - [1, 2, 3, 3] with changing the elements in original array.

console.log("------------------------------------------");

//push method mutates array itself, thats why arrr1 got updated when .push() method is used.
const mergeArray = (arrr1, arrr2) => {
  arrr1.push(...arrr2);
  return arrr1;
};
const arrr1 = [1, 2, 3];
const arrr2 = [4, 5, 6];
const newMergeArray = mergeArray(arrr1, arrr2);
console.log("NewArray :", newMergeArray); //Output - [1, 2, 3, 4, 5, 6]
console.log("Old Array1 : ", arr1); //Output - [1, 2, 3]

const mergeArrays = (ar, ar1) => {
  return ar.concat(...ar1);
  // return [...ar, ...ar1]; // Same approach without mutating the array.
  // ar.concat(ar1, ar2, ar3); Any number of arrays can be concatenated.
};
const ar = [1, 2, 3];
const ar1 = [4, 5, 6];
const newMergeArrays = mergeArrays(ar, ar1);
console.log("NewArray : ", newMergeArray); //Output - [1, 2, 3, 4, 5, 6]
console.log("Old Array 1 : ", ar); //Output - [1,2,3]
console.log("Old Array 2 : ", ar1); // Output - [4,5,6]

console.log("------------------------------------------");

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

const ifNameExist = users.filter((user) => {
  return user.name === "Vibhor" ? user.id : null;
});
console.log(ifNameExist);

const IfName = (name, users) => {
  const user1 = users.find((user) => user.name === name);
  return Boolean(user1);
};
console.log(IfName("Vibhor", users));
//Output - true

const IfName1 = (name, users) => {
  const user2 = users.findIndex((user) => user.name === name);
  return user2 >= 0;
};
console.log(IfName1("Vibhor", users));
//Output - true

console.log("--------------------------------------------");
