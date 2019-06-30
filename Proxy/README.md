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

The last line of code, where the access being made, will trigger the `set` function which will log the property being accessed and the value being set.

### A real-world case

We're now going to concern an example practically.

```js
const person = {
  id: 1,
  name: "Doan Du"
};
```

What if we want to make the id property of this object a `private` property? That means no one can access the personal id via `person.id`. In that case, it would throw an error. How we deal with that?

Proxies to the rescure.!

We need to create a proxy of this object - called proxiedPerson and override the get operator to prevent us from the `id` property.

```js
const handler = {
  get: function(obj, prop) {
    if (prop === "id") {
      throw new Error("Cannot access private property");
    } else {
      return obj[prop];
    }
  }
};

const person = {
  id: 1,
  name: "Doan Du"
};

const proxiedPerson = new Proxy(person, handler);

console.log(proxiedPerson.id);
```

In the console screen you would see the message "Cannot access private property". Otherwise, the `proxiedPerson.name` would returns the value as usual.

We can also use Proxy for the `set` traps. By setting a `set` trap, we can add custom validation before we set the value. If the value does not conform to the validation rules, we can throw an error.

```js
const handler = {
  set: function(obj, prop, value) {
    if (typeof value !== "string") {
      throw new Error("Only string values are accepted!");
    } else {
      obj[prop] = value;
    }
  }
};

const obj = {};

const proxiedObj = new Proxy(obj, handler);

console.log(proxiedObj); // displays a blank object

proxiedObj.name = "Foo Bar";

console.log(proxiedObj); // displays an object with the name property set

proxiedObj.age = 24; // throw an error.
```

### Exploring more...

These examples above show us the Proxy with `set` and `get` traps. These are actually the mostly used in practice. However, there are a lot of traps that we can use in `handler` object.

<b>handler.defineProperty() </b>

```js
const handler = {
  defineProperty: function(obj, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Properties starting with _ are not allowed!");
    } else {
      return Object.defineProperty(...arguments);
    }
  }
};

const p = {
  foo: 1,
  bar: true
};

const proxiedP = new Proxy(p, handler);
proxiedP._hello = 1; // displays an error

proxiedP.hello = 1;
console.log(proxiedP);
```

Other traps you can check at [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy);

### Challenge!!!

To concluse, we will try a challenge on codewars [The Builder of Things](https://www.codewars.com/kata/5571d9fc11526780a000011a). Particularly, we will write a `Thing` object allowing us define things in descriptive sentences.

```js
const t = new Thing("Hoang Thuy Linh");
t.name; // displays Hoang Thuy Linh

t.is_a.singer;
t.is_not_a.teacher;

t.is_a_singer; // displays true
t.is_a_teacher; // displays false

t.can.sing("Để Mị nói cho mà nghe, sông Hương đã đẩy Mị lệch tủ cmnr :(((");
t.sing(); // displays Để Mị nói cho mà nghe, sông Hương đã đẩy Mị lệch tủ cmnr :(((
```

First, to access the property `name`, we properbly use a common method

```js
class Thing {
  constructor(name) {
    this.name = name;
  }
}
```

Unfortunately, we cannot apply this solution for this case. Using Proxy would be a better choice.

```js
class Thing {
  constructor(name) {
    this.state = { name };
    return proxify(this, this.state);
  }
}

const proxify = (target, state) => {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop === "name") {
        return state[prop];
      }
      return target[prop];
    }
  });
};

const t = new Thing("Hoang Thuy Linh");

console.log(t.name); // displays Hoang Thuy Linh
console.log(t.age); // displays undefined≈
```

Ok, we've done accessing the `name`, now we'll consider other properties of object `Thing`.

```
t.is_a.singer
t.is_not_a.teacher

t.is_a_singer // displays true
t.is_a_teacher // displays false
```

```js
```
