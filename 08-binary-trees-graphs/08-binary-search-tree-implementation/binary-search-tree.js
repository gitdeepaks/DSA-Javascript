class Node {
  constructor(value) {
    this.value = value;
    this.left = null;

    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  printTree() {
    const printNode = (node) => {
      if (node === null) {
        return;
      }

      printNode(node.left);
      console.log(node.value);

      printNode(node.right);
    };
    printNode(this.root);
  }
}

module.exports = { Node, BinarySearchTree };
