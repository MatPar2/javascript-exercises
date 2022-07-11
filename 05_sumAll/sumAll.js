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

  // set a counter to add all numbers in between
  let counter = 0;

  // loop through all values between the initial and final number, and sum each value to the global counter
  for (let i = initialNumber; i <= finalNumber; i++) {
    counter += i;
  }

  return counter;
};

// Do not edit below this line
module.exports = sumAll;
