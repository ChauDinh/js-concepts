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

// const validator = {
//   // create handler object
//   set: function(obj, prop, value) {
//     if (prop === "age") {
//       if (typeof value !== "number" || Number.isNaN(value)) {
//         console.log("Age must be a number");
//       }
//       if (value < 0) {
//         console.log("Age must be a positive number");
//       }
//     }

//     obj[prop] = value;
//     return true;
//   }
// };

// let person = new Proxy({}, validator);
// person.age = "young";
// person.age = -30;
// person.age = 1000;
// console.log(person.age);

// const displayHandler = {
//   get: function(obj, prop) {
//     console.log("This message shown as the value has been accessed!");
//     return obj[prop];
//   },
//   set: function(obj, prop, value) {
//     console.log(`${prop} is being set to ${value}`);
//   }
// };

// const initialObj = {
//   id: 1,
//   name: "Foo Bar"
// };

// let proxiedObj = new Proxy(initialObj, displayHandler);

// console.log(proxiedObj.name);
// proxiedObj.age = 24;

// // A real world case

// const handler = {
//   get: function(obj, prop) {
//     if (prop === "id") {
//       throw new Error("Cannot access private property!");
//     } else {
//       return obj[prop];
//     }
//   }
// };

// const person = {
//   id: 1,
//   name: "Doan Du"
// };

// const proxiedPerson = new Proxy(person, handler);

// console.log(proxiedPerson.id);

// const handler = {
//   defineProperty: function(obj, prop) {
//     if (prop.startsWith("_")) {
//       throw new Error("Properties starting with _ are not allowed!");
//     } else {
//       return Object.defineProperty(...arguments);
//     }
//   }
// };

// const p = {
//   foo: 1,
//   bar: true
// };

// const proxiedP = new Proxy(p, handler);

// proxiedP.hello = 1;
// console.log(proxiedP);

class Thing {
  constructor(name) {
    this.state = { name };
    return proxify(this, this.state);
  }
}

function enterBooleanMode(receiver, state, booleanValue) {
  state.inBooleanMode = true;
  state.booleanValue = booleanValue;
  return receiver;
}

function setBoolean(receiver, state, prop) {
  state.booleans = { ...state.booleans, [prop]: state.booleanValue };
  state.inBooleanMode = false;
  state.booleanValue = null;
}

const proxify = (target, state) => {
  return new Proxy(target, {
    get: function(target, prop, receiver) {
      if (state.inBooleanMode) return setBoolean(this, state, prop);
      if (prop === "name") return state[prop];
      if (prop === "is_a") return enterBooleanMode(receiver, state, true);
      if (prop === "is_not_a") return enterBooleanMode(receiver, state, false);
      if (prop.startsWith("is_a_"))
        return state.booleans[prop.replace("is_a_", "")];
      return target[prop];
    }
  });
};

const t = new Thing("Hoang Thuy Linh");

t.is_a.singer;
t.is_not_a.teacher;

console.log(t.name);
console.log(t.age);
console.log(t.is_a_singer);
console.log(t.is_a_teacher);
