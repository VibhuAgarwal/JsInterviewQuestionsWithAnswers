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
