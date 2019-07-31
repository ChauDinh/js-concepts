/**
 * 1. Default parameters
 */

var link = function(height, color, url) {
  var height = height || 50;
  var color = color || "red";
  var url = url || "http://azat.co";
  // do something else
};

/**This approach will be fine until the value wasn't 0.
 *
 * When the value is 0, we may have bug.
 *
 * In ES6, we can put the default value right in the signature of the function
 */

var link2 = function(height = 50, color = "red", url = "http://azat.co") {
  // do something else
};

/**
 *2. Template literals
 *
 * Template literals in JavaScript and it maybe called interpolations in other programming languages is a way to output variables in a string.
 *
 * In previous version, ES5, we have to break a string like this
 *
 */

var firstname = "Chau",
  lastname = "Dinh";
var name = "Your name is" + firstname + " " + lastname + ".";
console.log(name); // displays Your name is Chau Dinh.

/**However, in ES6, there is a new syntax ${Varibale} */

var firstname2 = "Chau",
  lastname2 = "Dinh";

var name2 = `Your name is ${firstname2} ${lastname2}.`;
console.log(name2); // displays Your name is Chau Dinh.

// Let's consider another example to see the power of this feature

var userId = 1;
var inputUrl = `http://localhost:3000/api/message/${userId}`;

/**
 * 3. Multiline strings
 *
 */

var roadPoem =
  "Then took the order, as just as fair, \n\t" +
  "And having perhaps the better claim\n\t" +
  "Because it was grassy and wanted wear,\n\t" +
  "Though as for that the passing there\n\t" +
  "Had worn them really about the same,\n\t";

console.log(roadPoem);

/**
 * In ES6, we can use the back-ticks:
 */

var roadPoem2 = `You have the right to be you. 
You can only be you when you do your best. `;

console.log(roadPoem2);

/**
 * 4. Destructuring assignment
 *
 */

var data = $("body").data(),
  house = data.house, // data has property house
  mouse = data.mouse; // data has another property mouse

/**
 * Here are some other examples of destructuring assignment in Node.js - a javascript runtime
 */

var jsonMiddleware = require("body-parser").json;

var body = req.body,
  username = body.username,
  password = body.password;

/**However, in ES6, we can replace the code with these statement */

var { house, mouse } = $("body").data();

var { json } = require("body-parser");

var { username, password } = req.body;

// Note: The Destructuring assignment also works with arrays. Amazing!!!

var [col1, col2] = $(".column"),
  [line1, line2, line3, , line5] = file.split("\n");

/**
 * 5. Enhance object literals
 *
 * Let's check out the object literals in the previous version, ES5
 */

var serviceBase = {
    port: 8080,
    url: "azat.co"
  },
  getAccounts = function() {
    return [1, 2, 3];
  };

var accoutServiceES5 = {
  port: serviceBase.port,
  url: serviceBase.url,
  getAccounts: getAccounts,
  toString: function() {
    // this is a method
    return JSON.stringify(this.valueOf());
  },
  getUrl: function() {
    return `http://${this.url}:${this.port}`;
  },
  valueOf_1_2_3: getAccounts()
};

// If you want to be fancy, you can INHERIT from serviceBase object by making it prototype with the Object.create()

var accoutServiceES5ObjectCreate = Object.create(serviceBase);
var accoutServiceES5ObjectCreate = {
  getAccounts: getAccounts,
  toString: function() {
    return JSON.stringify(this.valueOf());
  },
  getUrl: function() {
    return `http://${this.url}:${this.port}`;
  },
  valueOf_1_2_3: getAccounts()
};

/**
 * However, in ES6, there are shorthands for assignment: getAccounts, become just getAccounts, without the colon.
 * Also, you set the prototype in __proto__ property, which makes sense (not '__proto)__' thought-that would be just a property)
 */

var serviceBase2 = {
    port: 3000,
    url: "asanzo.com"
  },
  getAccounts2 = function() {
    return [1, 2, 3];
  };
var accountService2 = {
  __proto__: serviceBase2,
  getAccounts2,
  // In addition, you can invoke `super` in toString() method
  toString() {
    return JSON.stringify(super.valueOf());
  },
  getUrl() {
    return `http://${this.url}:${this.port}`;
  },
  ["valueOf_" + getAccounts2().join("_")]: getAccounts2()
};

/**
 * 6. Arrow functions (Lamda functions)
 *
 */

const sum = (a, b, c) => {
  return a + b + c;
};

// Or even shorter

const sum2 = (a, b, c) => a + b + c;

/**
 * Fat arrows are also amazing as they make `this` behave property. `this` has the
 * same value as in the context of a function - `this` doesn't mutate. The mutation
 * typically happens each time you create a closure.
 *
 * Using arrow functions in ES6 means you don't have to use `that = this` or something like that
 */

// Previous version, ES5
var _this = this;
$(".btn").click(function(event) {
  _this.sendData();
});

// In ES6 version
$(".btn").click(event => {
  this.sendData();
});

// Let's check out another example that uses `call` to pass to the logUpperCase() function

var logUpperCase = function() {
  var _this = this;

  this.string = this.string.toUpperCase();
  return function() {
    console.log(_this.string);
  };
};

logUpperCase.call({ string: "es6 rocks" })();

/**
 * 7. Promise
 *
 * Promises have historical been a controversial topic.
 */

setTimeout(function() {
  console.log("You");
}, 1000);

// This code can be rewritten in ES6 with Promise:

var wait1000 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000);
}).then(function() {
  console.log("You");
});

// we can also use with arrow functions
var wait2000 = new Promise((resolver, reject) => {
  setTimeout(resolve, 2000);
}).then(() => {
  console.log("You");
});

// We've increased the number of line of code from 3 to 5 without any obvious benefit.
/**
 * the benefit comes if you have more nested logic in the setTimeout() callback.
 */

setTimeout(function() {
  console.log("Yay");
  setTimeout(function() {
    console.log("Ney");
  }, 1000);
}, 1000);

// the above code can rewritten with ES6 promise
var wait1000new = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

wait1000new()
  .then(function() {
    console.log("Yay");
    return wait1000new();
  })
  .then(function() {
    console.log("WE");
  });

/**
 * 8. Block Scope constructs: let and const
 */

function calculateTotalAmount(vip) {
  var amount = 0;
  if (vip) {
    var amount = 1;
  }
  {
    // more crazy block
    var amount = 1000;
    {
      var amount = 100;
    }
  }
  return amount;
}

// Can you guess the result we receive on the logged screen? It's 100.

/**
 * In ES6, you use `let` to restrict the scope to the blocks.
 */

function calculateTotalAmount2(vip) {
  var amount = 0; // You can probebly also use let, or mix var and let
  if (vip) {
    let amount = 1; // first amount is still 0
  }
  {
    // more crazy block
    let amount = 100; // first amount is still 0
    {
      let amount = 1000; // first amount is stil 0
    }
  }

  return amount;
}

// The value is 0 as the `if` block also has let. If it had nothing (amount = 1), then the expression would have been 1.

/**
 * When it comes to `const`, things are easier. It creates a read-only reference.
 * That means it's block scope like `let` and you can't reassign the variable identifier.
 */

function calculateTotalAmount3(vip) {
  const amount = 0;
  if (vip) {
    const amount = 1;
  }
  {
    // More crazy block
    const amount = 100;
    {
      const amount = 1000;
    }
  }
  return amount;
}

/**
 * 9. Classes
 *
 * The ES6 classes use prototypes, not the function factory approach
 */

class baseModel {
  constructor(options = {}, data = []) {
    this.name = "Base";
    this.url = "http://asanzo.com";
    this.data = data;
    this.options = options;
  }

  getName() {
    console.log(`Class name: ${this.name}`);
  }
}

class AccountModel extends baseModel {
  constructor(options, data) {
    super({ private: true }, ["31212321", "33235"]);
    this.name = "Account Model";
    this.url += "/accounts/";
  }
}

// You can set up a getter
class AccountModel2 extends baseModel {
  constructor(options, data) {
    super({ private: true }, ["31223", "234234"]);
    this.name = "Account Model 2";
    this.url += "/accounts2";
  }

  get accountsData() {
    // calculate the attribute getter
    // ... make XHR
    return this.data;
  }
}

let account = new AccountModel2(5);
console.log(account.getName()); // displays Account Model 2
console.log("Data is %s", account.accountsData); // displays Data is 31223,234234

/**
 * 10. Modules
 *
 * JavaScript had no support for native modules before ES6.
 */

/**
 * Other ES6 features
 *
 * There are many other noteworthy ES6 features that you probably won't use (at least)
 * not right away. Here they are, not particular order:
 *
 * New math, number, string, array, and object methods
 * Binary and octal number types
 * Default rest spread
 * For of comprehensions
 * Symbols
 * Tail calls
 * Generators
 * New data structures like Map and Set
 */
