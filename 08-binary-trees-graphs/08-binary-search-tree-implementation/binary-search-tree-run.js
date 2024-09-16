const { Node, BinarySearchTree } = require("./binary-search-tree");

// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /
//   2

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(4);
bst.insert(18);
bst.insert(20);

bst.printTree();
