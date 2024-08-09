// this.a = 5;
// let user = {
//   name: "Deepak",
//   age: 24,
//   childObj() {
//     console.log(this.name, "and", this.age);
//   },
//   getDetails: () => {
//     console.log(this);
//   },
// };

// user.getDetails();

const user = {
  name: "Deepak Sankhyan",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(
  function () {
    user.logMessage();
  },

  1000
);

let calculator = {
  read() {
    this.a = +prompt("a =", 0);
    this.b = +prompt("b =", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
calculator.sum();
calculator.mul();
