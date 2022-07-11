const ftoc = function(temp) {
  let result = (temp - 32) * 0.5556;

  return parseFloat(result.toFixed(1));
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
