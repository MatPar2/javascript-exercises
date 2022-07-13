const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, elem) => {
    return sum += elem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((mult, elem) => {
    return mult *= elem;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;
  if (num < 0) return "ERROR. Negative number";

  return factorial(num-1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
