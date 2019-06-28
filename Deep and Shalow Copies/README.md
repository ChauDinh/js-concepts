# Deep and Shalow Copies in JavaScript (ES6+)

In programming, we store values in variables. Making a copy means that you initiate a new variable with the same value(s). <b>Deep copy</b> means that all of the values of new variables are copied and disconnected from the original ones. A <b>Shallow copy</b>, on the other hand, means that certain (sub-) values are still connected to the original variables.

To know precisely when there is a deep copy and when there is a shallow copy, we have to get into how JavaScript stores values.

There are two types of value in JavaScript, including: primitive type and reference type.

### Primitive Types

- Number
- String
- Boolean
- undefined
- null

When we create the values, they are tightly coupled with the variable they are assigned to. They only exist once. That means you do not really have to worry about copying primitive types in JavaScript.

In particular, when we make a copy, it will a deep copy.

```javascript
const a = 5;
let b = a;

b = 1000;

console.log(b); // displays 1000
console.log(a); //display 5
```

### Reference Types

This type also be called Composite types, including Objects and Arrays. Technically, arrays are also objects, so they behave in the same way.

Does not like primitive types, when we assign a variable, JS just create a pointer (reference) to that value. So, if we make a copy `b = a`, and change some nested values in `b`, it actually changes thoses in `a` also.

Because you've copied a pointer and you've changed the pointer to another thing, so `a` will point to another thing differs from the original.

```js
const a = {
  en: "Hello",
  de: "Hallo",
  es: "Hola",
  vi: "Xin chao"
};

let b = a;
b.vi = "Tam biet";

console.log(b.vi); // displays Tam biet
console.log(a.vi); // displays Tam biet
```

This is a shallow copy. If we don't realize in practice, it would be a problematic as we expect the old variable to have the original values, not the changed ones.

As I noted in the title, we will consider some approaches to handle shallow copy in ECMAScript2015.

### Spread operator

```js
const obj = {
  en: "Hello",
  vi: "Xin chao"
};

let b = { ...a };
b.vi = "Tam biet";
console.log(b.vi); // displays Tam biet
console.log(a.vi); // displays Xin chao
```

This solution is great, since it is short and simple. But, before the appearance of spread operator, developers have used another method.

### Oject.assign()

```js
const a = {
  en: "Bye",
  vi: "Tam biet"
};

let b = Object.assign({}, a);
b.vi = "Ciao";
console.log(b.vi); // displays Ciao
console.log(a.vi); // displays Tam biet
```

### Dealing with nested objects

The methods above work fine until we meet the nested objects. When we have a nested object and we copy it by applying above methods, nested objects inside that will not be copied as they are only pointers (references). Thus, if you change a nested object, you would change it for both instances, ending up doing a shallow copy!

```js
const a = {
  foods: {
    dinner: "Pizza"
  }
};

let b = { ...a };
b.foods.dinner = "Rice"; // changes for both objects
console.log(b.foods.dinner); // displays Rice
console.log(a.foods.dinner); // displays Rice
```

The solution for this case is that you manually copy all nested objects

```js
const a = {
  foods: {
    dinner: "Pizza"
  }
};

let b = { ...a.foods };
b.foods.dinner = "Rice";
console.log(b.foods.dinner); // displays Rice
console.log(a.foods.dinner); // displays Pizza
```

In case you wonder what to do when object has more than one key `foods`, you can use full potential of the spread operator. Actually when passing properties after the `...spread`, they overwrite the original values.

```js
const a = {
  foods: {
    dinner: "Pizza"
  },
  drinks: {
    dinner: "Orange"
  }
};

let b = { ...a, foods: { ...a.foods } };
b.foods.dinner = "Rice";
console.log(b); // displays { foods: { dinner: 'Rice' }, drinks: { dinner: 'Orange' } }
console.log(a); // displays { foods: { dinner: 'Pizza' }, drinks: { dinner: 'Orange' } }
```

However, in case you don't know how deep the nested structures are? It can be very tedious to make a copy by hand. There is a way to copy everything without thinking.

You simply `stringify` the objects and parse it right after.

```js
const a = {
  foods: {
    dinner: "Pizza"
  }
};

let b = JSON.parse(JSON.stringify(a));

b.foods.dinner = "Rice";
console.log(b.foods.dinner); // displays Pizza
console.log(a.foods.dinner); // displays Rice
```
