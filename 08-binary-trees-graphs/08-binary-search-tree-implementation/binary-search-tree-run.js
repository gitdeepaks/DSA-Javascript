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
bst.insert(21);

bst.remove(4);

// console.log(bst.lookup(4));

bst.printTree();
