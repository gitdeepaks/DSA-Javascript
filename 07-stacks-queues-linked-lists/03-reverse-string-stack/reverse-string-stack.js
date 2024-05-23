const Stack = require("./stack");

function reverseStringStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reveresedString = "";

  while (!stack.isEmpty()) {
    reveresedString += stack.pop();
  }

  return reveresedString;
}

module.exports = reverseStringStack;
