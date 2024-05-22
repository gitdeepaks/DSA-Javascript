const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

myHashTable.set("John", "9460-44-66-94");
myHashTable.set("Antonio", "9480-48-66-94");
myHashTable.set("Hitesh", "9680-48-66-96");

myHashTable.remove("John");
// console.log(myHashTable.get("John"));
// myHashTable.printTable();
console.log(myHashTable.has("Antonio"));
myHashTable.clear();
myHashTable.printTable();

// console.log(result);
