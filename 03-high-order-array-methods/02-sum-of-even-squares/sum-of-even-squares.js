function sumOfEvenSquares(nums) {
  const evenSqrs = nums
    .filter((n) => n % 2)
    .map((n) => n ** 2)
    .reduce((acc, sq) => acc + sq, 0);

  return evenSqrs;

  return;
}

module.exports = sumOfEvenSquares;
