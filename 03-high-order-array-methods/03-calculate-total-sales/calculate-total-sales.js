function calculateTotalSalesWithTax(prods, taxRt) {
  const totalSales = prods.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0
  );

  const taxAmount = (totalSales * taxRt) / 100;

  const totalSalesWithTax = totalSales + taxAmount;

  return parseFloat(totalSales.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
