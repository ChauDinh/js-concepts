/**
 * Object literals
 */

// Here is an example of module using object literal syntax:

let myModule = {
  myProperty: "someValue",
  myConfig: {
    useCaching: true,
    language: "en",
  },
  myMethod1: function () {
    console.log("I can haz functionality?");
  },
  myMethod2: function () {
    console.log("Caching: ", this.myConfig.useCaching ? "enabled" : "disabled");
  },
  // override the current configuration
  myMethod3: function (newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  },
};

myModule.myMethod1();
myModule.myMethod2();
myModule.myMethod3({
  useCaching: false,
  language: "vi",
});
myModule.myMethod2();

/**
 * The Module Pattern
 *
 * The module pattern provides both private and public encapsulation for classes in conventional software engineering.
 *
 * Privacy: the module encapsulates "privacy", state and  organization using closures.
 */

let testModule = (function () {
  let counter = 0;
  return {
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    },
  };
})();

testModule.incrementCounter();
testModule.resetCounter();

// Simple template covers namespace, public and private variables

let myNamespace = (function () {
  let myPrivateVar = 0;
  let myPrivateMethod = function (someText) {
    console.log(someText);
  };

  return {
    myPublicVar: "foo",

    myPublicFunction: function (bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    },
  };
})();

// Another example with basket module

let basketModule = (function () {
  let basket = []; // private
  function doSomethingPrivate() {
    //...
  }
  function doSomethingElsePrivate() {
    //...
  }
  return {
    addItem: function (values) {
      if (!values) {
        return false;
      }
      basket.push(values);
      return true;
    },
    removeItem: function (item) {
      if (basket.indexOf(basket.filter((e) => e.item === item.item)[0]) < 0)
        return false;
      basket = basket.filter((value) => value.item !== item.item);
      return true;
    },
    getItemCount: function () {
      return basket.length;
    },
    doSomethingPublic: doSomethingPrivate(),
    getTotal: function () {
      let q = this.getItemCount();
      let p = 0;
      while (q--) {
        p += basket[q].price;
      }
      return p;
    },
  };
})();

basketModule.addItem({
  item: "bread",
  price: 0.5,
});

basketModule.addItem({
  item: "butter",
  price: 0.3,
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

basketModule.removeItem({
  item: "bread",
  price: 0.5,
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

/**
 * The Revealing Module Pattern
 *
 * define all your functions and variables in the private scope and return an anonymous object with pointers
 */

let myRevealingModule = (function () {
  let name = "A Man Learns Code";
  let age = 25;

  function updatePerson() {
    name = "A Man Learns Code Updated!";
  }

  function setPerson() {
    name = "A Man Learns Code set";
  }

  function getPerson() {
    return name;
  }

  return {
    // anonymous object
    set: setPerson,
    get: getPerson,
  };
})();

console.log(myRevealingModule.get());
