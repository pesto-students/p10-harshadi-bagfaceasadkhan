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

  isValidBinaryTree(root) {
    if (root === null) {
      return true;
    }

    if (root.left !== null && root.left.data > root.data) {
      return false;
    }

    if (root.right !== null && root.right.data < root.data) {
      return false;
    }

    return (
      this.isValidBinaryTree(root.left) && this.isValidBinaryTree(root.right)
    );
  }
}

let tree = new BinaryTree();
tree.root = tree.arrayToTree([5, 1, 4, null, null, 3, 6], 0);

console.log(tree.isValidBinaryTree(tree.root)); // false

tree.root = tree.arrayToTree([2, 1, 3], 0);

console.log(tree.isValidBinaryTree(tree.root)); // true
