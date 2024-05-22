function longestConsecutiveSequence(nums) {
  const numset = new Set(nums);

  let logestSequesnce = 0;

  for (const num of numset) {
    if (!numset.has(num - 1)) {
      let currentNum = num;

      let currentSequence = 1;

      while (numset.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      logestSequesnce = Math.max(logestSequesnce, currentSequence);
    }
  }

  return logestSequesnce;
}

module.exports = longestConsecutiveSequence;
