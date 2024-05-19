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
};
const ar = [1, 2, 3];
const ar1 = [4, 5, 6];
const newMergeArrays = mergeArrays(ar, ar1);
console.log("NewArray : ", newMergeArray); //Output - [1, 2, 3, 4, 5, 6]
console.log("Old Array 1 : ", ar); //Output - [1,2,3]
console.log("Old Array 2 : ", ar1); // Output - [4,5,6]

console.log("------------------------------------------");
