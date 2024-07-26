const fibonacciIterative = (n) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};

const n = 10;
const result = fibonacciIterative(n);
console.log(result);
