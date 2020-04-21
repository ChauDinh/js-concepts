/**
 * The Singleton Pattern
 *
 * The singleton pattern creates a class with a method creating a new instance of the class if doesn't exist or returning a reference if an instance exists.
 */

let mySingleton = function () {
  let privateVariable = "something private";
  function showPrivate() {
    console.log(privateVariable);
  }
  return {
    property1: "something",
    property2: "something else",

    method1: function () {
      console.log("hello, world!");
    },
    method2: function () {
      showPrivate();
    },
  };
};

let single = mySingleton();
single.method1();
single.method2();

// The above singleton is great but you can place the instantiation code inside another constructor functions

let Singleton = (function () {
  let instantiated;

  function init() {
    // singleton here
    return {
      publicMethod: function () {
        console.log("hello, world!");
      },
      publicProperty: "test",
    };
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    },
  };
})();

Singleton.getInstance().publicMethod();

// Here is another example of Singleton pattern in practice

let SingletonTester = (function () {
  // options: an object containing configuration options for the singleton
  // e.g: let options = {name: "A", pointX: 5};
  function Singleton(options) {
    this.options = options || {};

    // set the name parameter
    this.name = "SingletonTester";

    // set the value of pointX
    this.pointX = options.pointX || 6;
    // set the value of pointY
    this.pointY = options.pointY || 10;
  }

  // this is our instance holder
  let instance;

  // this is an emulation of static variables and methods
  let _static = {
    name: "SingletonTester",
    getInstance: function (options) {
      if (!instance) {
        instance = new Singleton(options);
      }
      return instance;
    },
  };
  return _static;
})();

let singletonTest = SingletonTester.getInstance({ pointX: 5 });
console.log(singletonTest.pointX);
