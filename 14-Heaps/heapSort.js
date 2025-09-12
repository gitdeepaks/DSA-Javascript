let arr = [1, 4, 10, 5, 3, 6, 7, 9, 2, 0, -8, -1, 27, 99, 101];

function heapSort(arr) {
  let n = arr.length;
  //create a maxHeap
  for (let i = Math.floor(n / 2) - 1 - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }
  // Sort the Array
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;

  let leftChildIndex = 2 * i + 1;
  let rightChildIndex = 2 * i + 2;

  if (leftChildIndex < n && arr[leftChildIndex] > arr[largest]) {
    largest = leftChildIndex;
  }
  if (rightChildIndex < n && arr[rightChildIndex] > arr[largest]) {
    largest = rightChildIndex;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

const sortedArr = heapSort(arr);
console.log(sortedArr);
