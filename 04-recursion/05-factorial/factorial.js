function factorial(n) {
  if (n === 0 || 1) {
    return 1;
  }

  return n * fectorial(n - 1);
}

module.exports = factorial;
