const hello = require("./hello");
test("Returning 'Hello world' as a string", () => {
  const result = hello();
  expect(result).toBe("Hello World");
});
