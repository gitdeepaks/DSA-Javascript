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

  lookup(value) {
    let currentNode = this.root;

    if (!currentNode) {
      return null;
    }

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }

    return null;
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right; // or null
          return node;
        } else if (node.right === null) {
          node = node.left; // or null
          return node;
        }
        const tempNode = this.findSmallestNode(node.right);
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
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
