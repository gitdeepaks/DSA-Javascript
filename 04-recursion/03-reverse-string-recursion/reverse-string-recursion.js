const reverseString = (str) =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
//   if (str === "") {
//     return "";
//   }
//   console.log(str.substr(1));
//   return reverseString(str.substr(1)) + str.charAt(0);

module.exports = reverseString;
