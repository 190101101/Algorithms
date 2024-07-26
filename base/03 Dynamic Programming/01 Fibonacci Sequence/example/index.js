const fibonacciIterative = (n) => {
  let fib = [0, 1]; // Fibonacci dizisinin ilk iki elemanı
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]; // İki önceki ve bir önceki elemanın toplamı
  }
  return fib; // Hesaplanan Fibonacci dizisini döndür
};

const n = 10;
const result = fibonacciIterative(n);
console.log(result); // Hesaplanan Fibonacci dizisini yazdır
