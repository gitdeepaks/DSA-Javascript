class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  extract() {
    if (this.heap.length < 1) return null;

    let minimum = this.heap[0];
    let lastIndex = this.heap.length - 1;

    this.heap[0] = this.heap[lastIndex];
    this.heap.pop();

    if (this.heap.length > 0) {
      this.heapifyDown(0);
    }

    return minimum;
  }

  heapifyDown(i) {
    let leftIndex = this.getLeftChildIndex(i);
    let rightIndex = this.getRightChildIndex(i);
    let n = this.heap.length;
    let smallest = i;

    if (leftIndex < n && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    if (rightIndex < n && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }
}

let heap = new MinHeap();

heap.insert(4);
heap.insert(1);
heap.insert(7);
heap.insert(10);
heap.insert(18);
heap.insert(6);
heap.insert(5);
heap.insert(0);

console.log('Peek:', heap.peek());
console.log('Extract:', heap.extract());
console.log('Extract:', heap.extract());
console.log('Final heap:', heap);
