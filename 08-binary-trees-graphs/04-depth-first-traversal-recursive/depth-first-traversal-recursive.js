class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function recDepthFirstTraversal(root) {
  const res = [];

  function traverse(node) {
    if (node !== null) {
      res.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);

  return res;
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
