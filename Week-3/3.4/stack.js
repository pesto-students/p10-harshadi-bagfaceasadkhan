function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
      return items;
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();

console.log(stack.push(10));
console.log(stack.push(5));
console.log(stack.pop());
console.log(stack.items);
