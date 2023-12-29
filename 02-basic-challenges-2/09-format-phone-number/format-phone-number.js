// function formatPhoneNumber(numbers) {
//   const aearCode = numbers.slice(0, 3).join("");
//   const preFix = numbers.slice(3, 6).join("");
//   const lineNumber = numbers.slice(6).join("");
//   return `(${aearCode}) ${preFix}-${lineNumber}`;
// }
function formatPhoneNumber(numbers) {
  const formatted = numbers.join("");
  return `(${formatted.slice(0, 3)}) ${formatted.slice(3, 6)}-${formatted.slice(
    6
  )}`;
}

module.exports = formatPhoneNumber;
