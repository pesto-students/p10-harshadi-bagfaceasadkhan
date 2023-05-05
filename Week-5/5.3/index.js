const hasDuplicate = function (arr) {
  return [...new Set(arr)].length !== arr.length;
};

console.log(hasDuplicate([1, 5, -1, 4]));
