const add = function(a,b) {
	let solution = a + b;
  return solution;
};

const subtract = function(a,b) {
	let solution = a - b;
  return solution;
};

const sum = function(array) {
	let solution = array.reduce((total, number) => total + number, 0);
  return solution;
};

const multiply = function(array) {
  let solution = array.reduce((total, number) => total * number, 1);
  return solution;
};

const power = function(a,b) {
	let solution = a ** b;
  return solution;
};

const factorial = function(a) {
  let solution = 1;
  if (a === 0 || a === 1) {
    return solution;
  }
  for (let i = a; i > 1; i--) {
    solution = solution * i;
  }
  return solution;
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
