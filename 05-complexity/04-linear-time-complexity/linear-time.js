/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

function sumArr(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum;
}
const arr1 = [1, 2, 3, 4, 5];

console.time("Sum Arr 1");
console.log(sumArr(arr1));
console.timeEnd("Sum Arr 1");
const arr2 = Array.from({ length: 500000000000000 }, (_, index) => index + 1);
console.time("Sum Arr 2");
console.log(sumArr(arr2));
console.timeEnd("Sum Arr 2");
