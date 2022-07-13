const fibonacci = function(indexNum) {
  if (indexNum < 0) return "OOPS";
  if (indexNum === 0) return 0;
  let fibonacciSeq = [1, 1];
  for (let i = 1; i < indexNum; i++) {
    fibonacciSeq.push(fibonacciSeq[i] + fibonacciSeq[i-1]);
  }

  return fibonacciSeq[indexNum-1];
};

// Do not edit below this line
module.exports = fibonacci;