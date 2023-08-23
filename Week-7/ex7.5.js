function pairWithGivenDifference(arr, k) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - k;
    if (map.has(diff)) {
      result.push([arr[i], diff]);
    }
    map.set(arr[i], i);
  }
  return result;
}

console.log(pairWithGivenDifference([5, 10, 3, 2, 50, 80], 30));
