function threeSumClosest(arr, target) {
  arr.sort((a, b) => a - b);
  let result = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
