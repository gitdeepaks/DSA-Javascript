const nameMap = new Map([
  [1, "Deepak"],
  [2, "Ritika"],
  [3, "Amayra"],
]);

const myFunction = () => {};

const myObj = {};

const map2 = new Map([
  ["name", "Jake"],
  [1, "number One"],
  [true, "really true"],
  [null, "null"],
  [myFunction, "myFunction"],
  [myObj, "myObj"],
]);

console.log(nameMap.get(1));
console.log(map2.get(myObj));
console.log(map2.get(myFunction));

// setValues
nameMap.set(4, "Mike");
nameMap.set(5, "Antonio");

// check setValues

console.log(nameMap.has(1));
console.log(nameMap.has(10));

// Remove Value
nameMap.delete(1);
console.log(nameMap.has(1));

// Get  size

console.log(nameMap.size);

// Iterating Over a map

for (let [key, value] of nameMap) {
  console.log(key, value);
}

nameMap.forEach((key, value) => console.log(key, value));

console.log(nameMap.keys());

// get values

console.log(nameMap.values());

console.log(nameMap.size);
