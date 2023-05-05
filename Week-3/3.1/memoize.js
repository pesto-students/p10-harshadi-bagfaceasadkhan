function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = args.join("");
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

function add(a, b) {
  return a + b;
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const memoizedAdd = memoize(add);

time(() => {
  memoizedAdd(1, 2);
});
time(() => {
  memoizedAdd(1, 2);
});
time(() => {
  memoizedAdd(1, 2);
});
