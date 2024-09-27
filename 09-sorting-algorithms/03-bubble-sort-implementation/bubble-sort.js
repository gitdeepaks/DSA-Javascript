// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         const temp = array[j];

//         array[j] = array[j + 1];

//         array[j + 1] = temp;
//       }
//     }
//   }

//   return array;
// }

function bubbleSort(arr) {
  let swapt = false;

  while (!swapt) {
    swapt = true;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapt = false;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
