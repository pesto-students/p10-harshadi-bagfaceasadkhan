function fibonacci(n) {
    let a = 0, b = 1, count = 0;
    return {
      [Symbol.iterator]() {
        return {
          next() {
              let current = a;
              [a, b] = [b, a + b];
              return { value: current, done: count++>n-1 };
          }
        };
      }
    };
  }

  const fib = fibonacci(10);
  for (let num of fib) {
    console.log(num);
  }
