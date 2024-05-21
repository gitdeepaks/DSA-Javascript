const nameSet = new Set(["Antonio", "Deepak", "Adrian"]);

// Add to Set

nameSet.add("Jill");
nameSet.add("Jaks");
nameSet.add("Jonas");
nameSet.add("Hitesh");

console.log(nameSet);

// Check the values
console.log(nameSet.has("Jaks"));

// Set Size

console.log(nameSet.size);

// Get values
console.log(nameSet.values());

for (const name of nameSet) {
  console.log(name);
}

// convert an arr

const arr = [...nameSet];
console.log(arr);

// clear set

nameSet.clear();
console.log(nameSet.size);
