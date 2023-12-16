function reverseString(str) {
  let revered = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revered += str[i];
  }
  return revered;
}

module.exports = reverseString;
