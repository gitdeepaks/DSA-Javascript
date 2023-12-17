// function removeDuplicates(arr) {
//   const uniqueArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArr.indexOf(arr[i]) === -1) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }

// Solution 2
function removeDuplicates(arr) {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

module.exports = removeDuplicates;
