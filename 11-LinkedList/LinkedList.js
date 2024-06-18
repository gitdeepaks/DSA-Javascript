class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.inserAtShuru = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.inserAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;

  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

// Insert at a given node

LinkedList.prototype.inserAfterGivenNode = function (prevNode, data) {
  if (!prevNode) {
    console.log(`given prevnode cannot be null`);
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// delete first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

//delete last node
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; //nothing to delete
  }

  if (!this.head.next) {
    this.head = null; // if there is only one node
    return;
  }

  let secondLast = this.head;

  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  // if list is empty

  if (!this.head) {
    console.log(`list id empty`);
    return;
  }

  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
    }
    current = current.next;
  }
};

console.log(`No node found with key--${key}`);

//search Opearation

LinkedList.prototype.searchOparation = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
  }

  return false;
};

// traversal

LinkedList.prototype.printList = function () {
  let current = this.head;
  let listValues = [];

  while (current) {
    listValues.push(current.data);
    current = current.next; //move to next node
  }

  console.log(listValues.join(" -> "));
};
