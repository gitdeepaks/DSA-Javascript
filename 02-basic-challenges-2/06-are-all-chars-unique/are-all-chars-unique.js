function areAllCharactersUnique(str) {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    }
    chars[str[i]] = true;
  }
  return true;
}

module.exports = areAllCharactersUnique;
