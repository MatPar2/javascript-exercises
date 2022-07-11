const sumAll = function(initialNumber, finalNumber) {
  if (initialNumber < 0 || finalNumber < 0 || initialNumber !== parseInt(initialNumber) || finalNumber !== parseInt(finalNumber)) {
    return "ERROR";
  }
};

console.log(sumAll(-10, 4));

// Do not edit below this line
module.exports = sumAll;
