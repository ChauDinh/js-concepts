# Understanding Proxy in ECMAScript2015

According to MDN, the <b>Proxy</b> is an object used to defined custom behavior of fundamental operations.

So, we can assume that <b>Proxy</b> would be similar to <b>getters</b> and <b>setters</b>.

Let's consider the following examples:

<b>Example 1:</b>

```js
const u = {
  name: 'Nhạc Bất Quần';
}

const p = new Proxy(u, {
  get (target, prop, receiver) {
    if (typeof target[prop] === 'string') {
      return target[prop].toUpperCase();
    }
    return target[prop];
  }
});

console.log(p.name); // displays NHẠC BẤT QUẦN
p.email = 'thienlongbatbo@yahoo.com';
console.log(p.email); // displays THIENLONGBATBO@YAHOO.COM
```

<b>Example 2</b>:

```js
const handler = {
  get(target, key) {
    return key in target ? target[key] : 37;
  }
};

let p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // displays 1 undefined
console.log("c" in p, p.c); // displays false 37
```

We will use the second example to explain the basic.

What happens if object `p` is not a proxy?

```js
const handler = {
  get(target, key) {
    return key in target ? target[key] : 37;
  }
};

let p = {}; // p now is no longer a Proxy
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // displays 1 undefined
console.log("c" in p, p.c); // displays false undefined
```

As you can see, with Proxy, object `p` can handle the case when `c` does not initiated instead of returning `undefined` value.

A proxy includes three terminologies:

- target: object with the proxy virtualizes.
- handler: placeholder object with contains traps
- traps: the methods providing property acess.

Back to the examples. The proxy `p` have the target object `c` - means that `p` has the values contained in `c` (you can called `c` as an initial object), but whose basic operators like `get` and `set` now have some custom logic specified by the `hanler` object.

### Syntax

```js
const proxyObject = new Proxy(initialObj, handler);
```

Let's consider another example:

### Use Proxy with validator

```js
let validatior = {
  // a handler object
  set: function(obj, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || Number.isNaN(value)) {
        console.log("Age must be a number");
      }
      if (value <= 0) {
        console.log("Age must be a positive number");
      }
    }

    obj[prop] = value;

    return true;
  }
};

let person = new Proxy({}, validator);
person.age = "young"; // returns Age must be a number
```

### Use with message

```js
const displayHander = {
  get: function() {
    console.log("This message shown as the value has been accessed!");
  }
};

const initialObj = {
  id: 1,
  name: "Foo Bar"
};

const proxiedObj = new Proxy(initialObj, displayHandler);

console.log(proxiedObj.name);
```

If we don't use `proxiedObj`, it would logged `"Foo Bar"` to the console.

If you notice in the console window, there are actually two logs : `"This message shown as the value has been accessed!"` and `undefined`. Why?

Since the default implementation of `get` operator is to return the value stored in that key in the Object, it would logs `undefined` if the value is never returned.

Here is how to fix that

```js
const displayHandler {
  get: function(obj, prop) {
    console.log("...");
    return obj[prop]; // return the value stored in the key being accessed
  }
}
...
```

### Adding more traps

Now, let's add a trap for `set` operator as well. We'll do the same thing - anytime a value is set, we'll log the property being modified, as well as the value being set for that key.

The `set` operator has three arguments - the object, the property being accessed and the value being set for that property.

```js
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

const proxiedObj = new Proxy(initialObj, displayHandler);

proxiedObj.age = 24; // return age is being set to 24
```
