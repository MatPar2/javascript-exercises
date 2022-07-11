const removeFromArray = function(...args) {
  let arr = args[0];

  for (let i = 1; i < args.length; i++) {
    arr = arr.filter((elem) => {
      if (elem !== args[i]) {
        return elem;
      }
    });
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;