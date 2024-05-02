function analyzeCarMileage(cars) {
  const totalMilag = cars.reduce((sum, car) => sum + car.mileage, 0);

  const avgMileage = totalMilag / cars.length;

  const highestMilage = cars.reduce(
    (highest, car) => (car.milage > highest.milage ? car : highest),
    cars[0]
  );
  const lowestMilage = cars.reduce(
    (highest, car) => (car.milage < lowest.milage ? car : lowest),
    cars[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
