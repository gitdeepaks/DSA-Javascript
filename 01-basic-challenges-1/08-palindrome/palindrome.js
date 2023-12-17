function isPalindrome(str) {
  // Solution 1
  //   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //   const reversedStr = formattedStr.split("").reverse().join("");
  //   return formattedStr === reversedStr;

  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reversedStr = reverseString(formattedStr);
  return formattedStr === reversedStr;
}

function removeNonAlphanumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}
function isAlphaNumeric(params) {
  const code = params.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
module.exports = isPalindrome;
