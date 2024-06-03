// let faang = {
//   name: "google",
//   salary: function () {
//     console.log("500K USD");
//   },
// };
// let engineer = {
//   empId: 123322,
//   task: function () {
//     console.log("task engineer");
//   },
// };

// engineer.___proto__ = faang;
// console.log(engineer);
// engineer.salary();

//New Methode

let faang = {
  name: "google",
  salary: function () {
    console.log("600K USD");
  },
};

let engineer = Object.get(faang, {
  taskAssigned: {
    value: 2,
  },
});
console.log(engineer);
