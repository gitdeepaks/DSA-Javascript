// let a = 1;
// let b = a;
// a = 2;

// let c = { name: "jeo" };
// let d = c;
// c.name = "Deepak";
// console.log(d.name);

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
