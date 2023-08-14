function maxSumOfSubarray(array) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSumOfSubarray([1, 2, 3, 4, -10]));
