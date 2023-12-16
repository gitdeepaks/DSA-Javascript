const { switchCase } = require("@babel/types");

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }
  return result;
}

module.exports = calculator;
