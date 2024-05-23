const HashTable = require("./HashTable");

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/);

  const wordFrequency = new HashTable();

  const targetWord = word.toLowerCase();

  let count = 0;

  for (const currentWOrd of words) {
    if (currentWOrd === "") continue;

    if (wordFrequency.has(currentWOrd)) {
      wordFrequency.set(currentWOrd, wordFrequency.get(currentWOrd) + 1);
    } else {
      wordFrequency.set(currentWOrd, 1);
    }

    if (currentWOrd === targetWord) {
      count = wordFrequency.get(currentWOrd);
    }
  }

  return count;
}

module.exports = wordInstanceCounter;
