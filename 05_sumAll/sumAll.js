const sumAll = function(initialNumber, finalNumber) {
  // Check if any number is negative, or if it's not an integer, and return an error message
  if (initialNumber < 0 || finalNumber < 0 || initialNumber !== parseInt(initialNumber) || finalNumber !== parseInt(finalNumber)) {
    return "ERROR";
  }

  // Order values from smallest to largest
  if (initialNumber > finalNumber) {
    let tmp = initialNumber;
    initialNumber = finalNumber;
    finalNumber = tmp;
  }

  let counter = 0;
  // For-loop option
  for (let i = initialNumber; i <= finalNumber; i++) {
    counter += i;
  }

  return counter;
};

// Do not edit below this line
module.exports = sumAll;
