const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

// const number = [1, 2, 3, 4, 5];

// const dubNumbers = numbers.map((n, i, arr) => {
//   console.log(i);
//   console.log(arr);
//   return n * 2;
// });

// console.log(dubNumbers);

// /**
//  * filter: Creates a new array with elements that satisfy a specified condition.
//  */

// const evenNum = numbers.filter((n) => {
//   return n % 2 === 0;
// });

// console.log(evenNum);

// /**
//  * reduce: Accumulates array elements into a single value using a provided function.
//  */

// const sum = numbers.reduce((acc, number) => {
//   return acc + number;
// });

// console.log(sum);

// /**
//  * forEach: Iterates through array elements and applies a function without creating a new array.


// numbers.forEach((element) => {
//   console.log(element);
// });



 /**
 * find: Returns the first array element that satisfies a specified condition.
 */


 const fundNum  = numbers.find((num) => num > 2)
//  console.log(fundNum);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const hasEvenNumber = numbers.some((num) => num %2 === 0)

// console.log(hasEvenNumber)
 

/**
 * every: Checks if all array elements satisfy a condition.
 */

const allNumsgreThn0 = numbers.every((num) =>  num > 0)

console.log(allNumsgreThn0)


