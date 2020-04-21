/**The Creational Pattern
 *
 *
 * We will form the basic of other design patterns in creational group.
 *
 * In JavaScript, there are three common ways to create new objects
 */

let newObject1 = {};
let newObject2 = Object.create(null);
let newObject3 = new Object();

// There are 4 ways to assign keys and values to an object

// 1. Using dot syntax
newObject1.someKey = "A Man Learns Code";
let key = newObject1.someKey; // A Man Learns Code

// 2. Square bracket syntax
newObject2["someKey"] = "A Man Learns Code";
let key2 = newObject2["someKey"]; // A Man Learns Code

// 3. Using Object.defineProperty
Object.defineProperty(newObject3, "someKey", {
  value: "A Man Learns Code",
  writable: true,
  enumerable: true,
  configurable: true,
});

// 4. Using Object.defineProperties
Object.defineProperties(newObject3, {
  anotherKey1: {
    value: "Hello, World!",
    writable: true,
  },
  anotherKey2: {
    value: "Bye",
    writable: true,
  },
});
