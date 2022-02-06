- `Promise.race()` lets you know as soon as one of the given promises either fulfills or rejects
- `Promise.allSettled()` lets you know when all promises either fulfill or reject
- `Promise.all()` lets you know as soon as one of the given promises rejects or when all of them fulfill
- `Promises.any()` lets you know as soon as one of the given promises fulfills or when none of them fulfills.

## Creating custom iterator

`[Symbol.iterator]()` works like any other method except that it's automatically called if we use `for...of`
on the object. 

The iterator object is designed to maintain internal pointer to a position in the items.

```JS
const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.iterator]() {
    let i = 0;
    const values = Object.keys(this);
    return {
      next: () => {
        return {
          value: this[values[i++]],
          done: i > values.length
        }
      }
    }
  }
}

for (const value of collection) {
  console.log(value);
}
```

## Creating custom asynchronous iterator

An object is classified as asychronous iterable when it has a `Symbol.asyncIterator` method that returns an 
asynchronous iterator.

```JS
const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.asyncIterator]() {
    const keys = Object.keys(this);
    console.log('keys: ', keys);
    let i = 0;
    return {
      next: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value: this[keys[i++]],
              done: i > keys.length
            });
          }, 1000);
        });
      }
    };
  }
};

const iterator = collection[Symbol.asyncIterator]();
```