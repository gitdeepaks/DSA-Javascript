// function arrayIntersection(arr1, arr2) {
//   const intersection = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const current = arr1[i];
//     if (arr2.includes(current)) {
//       intersection.push(current);
//     }
//   }
//   return intersection;
// }
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);

  const intersectionArr = [];
  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }
  return intersectionArr;
}

module.exports = arrayIntersection;
