function parenthisisChecker(expression) {
  let stack = [];
  let open = ["{", "[", "("];
  let close = ["}", "]", ")"];
  let match = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < expression.length; i++) {
    if (open.includes(expression[i])) {
      stack.push(expression[i]);
    } else if (close.includes(expression[i])) {
      let last = stack.pop();
      if (expression[i] !== match[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

console.log(parenthisisChecker("[()]{}{()()}"));
