class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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

  maxDepthOfTree(root) {
    if (root === null) {
      return 0;
    }

    let leftDepth = this.maxDepthOfTree(root.left);
    let rightDepth = this.maxDepthOfTree(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }
}

let tree = new Tree();
tree.root = tree.arrayToTree([3, 9, 20, null, null, 15, 7], 0);

console.log(tree.maxDepthOfTree(tree.root)); // 4
