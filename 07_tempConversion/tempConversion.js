const ftoc = function(temp) {
  let result = (temp - 32) * 0.5556;

  // return parseFloat(result.toFixed(1));
  return Math.round(result * 10) / 10;
};

const ctof = function(temp) {
  let result = temp * 1.8 + 32;
  
  return parseFloat(result.toFixed(1));
};

console.log(ftoc(32));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
