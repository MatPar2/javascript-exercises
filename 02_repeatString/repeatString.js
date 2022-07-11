const repeatString = function(word, times) {
  if (times < 0) return "ERROR";

  let finalStr = '';

  for (let i = 1; i <= times; i++) {
    finalStr += word;
  }

  return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
