// function findMissingNumber(arr) {
//   if (arr.length === 0) {
//     return 1;
//   }

//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((a, b) => a + b);
//   return expectedSum - actualSum;
// }
function findMissingNumber(arr) {
  if (arr.length === 0) {
    return 1;
  }

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
