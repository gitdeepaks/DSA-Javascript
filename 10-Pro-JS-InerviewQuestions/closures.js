const getVal = function () {
  let score = 10;
  return () => score++;
};

const val = getVal();

console.log(val());
console.log(val());
