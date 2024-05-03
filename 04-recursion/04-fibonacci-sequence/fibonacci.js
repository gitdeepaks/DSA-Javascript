// function fibonacci(num) {
//   console.log(`Calculating fibinacci(${num})`);
//   if (num < 2) {
//     return num;
//   }

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));

module.exports = fibonacci;
