function countOccurrences(str, char) {
  const result = str.split(char).length - 1;

  return result;
}

module.exports = countOccurrences;
