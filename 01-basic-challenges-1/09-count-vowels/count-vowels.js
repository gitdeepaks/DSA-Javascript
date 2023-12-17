// function countVowels(str) {
//   let count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// Solution 2
function countVowels(str) {
  const formattedStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    if (
      formattedStr[i] === "a" ||
      formattedStr[i] === "e" ||
      formattedStr[i] === "i" ||
      formattedStr[i] === "o" ||
      formattedStr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
