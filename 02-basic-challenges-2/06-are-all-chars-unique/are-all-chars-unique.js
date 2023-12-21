// function areAllCharactersUnique(str) {
//   let chars = {};
//   for (let i = 0; i < str.length; i++) {
//     if (chars[str[i]]) {
//       return false;
//     }
//     chars[str[i]] = true;
//   }
//   return true;
// }

//

function areAllCharactersUnique(str) {
  const charCount = new Set();
  for (let i = 0; i < str.length; i++) {
    if (charCount.has(str[i])) {
      return false;
    }
    charCount.add(str[i]);
  }
  return true;
}
module.exports = areAllCharactersUnique;
