function calculateAverage(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Expected an array");
  }

  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce(
    (total, number) => total + number,
    0
  );

  return sum / (numbers.length - 1);
}

module.exports = { calculateAverage };
