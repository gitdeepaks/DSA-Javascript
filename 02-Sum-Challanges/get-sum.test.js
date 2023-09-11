const getSums = require("./get-sum");

test("CalCulate the sum of two numbers", () => {
  const num1 = 54;
  const num2 = 23;

  //call the function
  const res = getSums(num1, num2);

  expect(res).toBe(77);
});
