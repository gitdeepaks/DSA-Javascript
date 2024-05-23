const HashTable = require("./HashTable");

function anagramGrouping(words) {
  const anagramGroups = new HashTable();

  for (const word of words) {
    const sortedCharts = word.split("").sort().join("");
    // console.log(sortedCharts);

    if (anagramGroups.get(sortedCharts)) {
      anagramGroups.get(sortedCharts).push(word);
    } else {
      anagramGroups.set(sortedCharts, [word]);
    }
  }
  return anagramGroups.getValues();
}

module.exports = anagramGrouping;
