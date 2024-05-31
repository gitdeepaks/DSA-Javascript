const { LinkedList } = require("./linked-list");

const list = new LinkedList();

list.add(100);
list.add(200);
list.add(300);
list.add(400);

list.insertAt(0, "a");
list.removeFrom(1);

// console.log(list.get(2));
// console.log(list.get(0));
// console.log(list.get(1));
list.printAll();
