/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/
function sumArr(arr) {
  let sum = 0;
  let sum2 = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];

    for (let jindex = 0; jindex < arr.length; jindex++) {
      sum2 += arr[jindex];
    }
  }

  return sum + sum2;
}

const arr1 = [1, 2, 3, 4, 5];

console.time("Sum Arr 1");
console.log(sumArr(arr1));
console.timeEnd("Sum Arr 1");

const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);
console.time("Sum Arr 2");
console.log(sumArr(arr2));
console.timeEnd("Sum Arr 2");
