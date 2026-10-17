function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  console.log("Dividing numbers:", a, b);

  return a / b;
}

module.exports = {
  add,
  subtract,
  divide,
};
