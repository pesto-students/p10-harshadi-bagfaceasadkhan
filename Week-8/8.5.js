function nextGreaterElementInArray(array) {
  let result = [];
  let next;
  for (let i = 0; i < array.length; i++) {
    next = -1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        next = array[j];
        break;
      }
    }
    result.push(next);
  }
  return result;
}

console.log(nextGreaterElementInArray([1, 3, 2, 4]));
