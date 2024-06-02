const Stack = require("./stack");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  if (!root) return [];

  const res = [];
  const stack = new Stack();

  stack.push(root);
  while (!stack.isEmpty()) {
    const current = stack.pop();
    res.push(current.data);

    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return res;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
