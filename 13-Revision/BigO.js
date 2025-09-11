function logItem(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}
logItem(10);

const myArr = [11, 3, 23, 7, 17];

// console.log(myArr.push());

// console.log(myArr.pop());

// console.log(myArr.shift());
console.log(myArr.splice(1, 0, 'Hi'));
