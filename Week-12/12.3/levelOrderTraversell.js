class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }

  arrayToTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) {
      return null;
    }

    let node = new Node(arr[i]);
    node.left = this.arrayToTree(arr, 2 * i + 1);
    node.right = this.arrayToTree(arr, 2 * i + 2);

    return node;
  }

  levelOrderTraversal(root) {
    let queue = [];
    let result = [];

    queue.push(root);

    while (queue.length > 0) {
      let node = queue.shift();
      result.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  }
}

let tree = new BinaryTree();
tree.root = tree.arrayToTree([3, 9, 20, null, null, 15, 7], 0);

console.log(tree.levelOrderTraversal(tree.root)); // [3, 9, 20, 15, 7]
