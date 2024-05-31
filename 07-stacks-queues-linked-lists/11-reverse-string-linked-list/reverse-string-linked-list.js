const { LinkedList } = require("./linked-list");

function reverseStringLinkedList(str) {
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }
  let revStr = "";

  let curr = list.head;

  while (curr !== null) {
    revStr += curr.data;
    curr = curr.next;
  }

  return revStr;
}

module.exports = reverseStringLinkedList;
