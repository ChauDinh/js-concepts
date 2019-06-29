// const u = {
//   name: "Nhạc Bất Quần"
// };

// const p = new Proxy(u, {
//   get(target, prop, receiver) {
//     if (typeof target[prop] === "string") {
//       return target[prop].toUpperCase();
//     }

//     return target[prop];
//   }
// });

// console.log(p.name);
// p.email = "thienlongbatbo@yahoo.com";
// console.log(p.email);

const validator = {
  // create handler object
  set: function(obj, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || Number.isNaN(value)) {
        console.log("Age must be a number");
      }
      if (value < 0) {
        console.log("Age must be a positive number");
      }
    }

    obj[prop] = value;
    return true;
  }
};

let person = new Proxy({}, validator);
person.age = "young";
person.age = -30;
person.age = 1000;
console.log(person.age);

const displayHandler = {
  get: function(obj, prop) {
    console.log("This message shown as the value has been accessed!");
    return obj[prop];
  },
  set: function(obj, prop, value) {
    console.log(`${prop} is being set to ${value}`);
  }
};

const initialObj = {
  id: 1,
  name: "Foo Bar"
};

let proxiedObj = new Proxy(initialObj, displayHandler);

console.log(proxiedObj.name);
proxiedObj.age = 24;
