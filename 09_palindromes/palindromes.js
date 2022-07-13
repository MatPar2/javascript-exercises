const palindromes = function (str) {
  const rawLetters = str.toLowerCase().replace(/[^a-z]/g, "");
  return rawLetters.split('').reverse().join('') === rawLetters;
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
