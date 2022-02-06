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

iterator.next().then(result => {
  console.log('result: ', result);
})

iterator.next().then(result => {
  console.log('result: ', result);
})

iterator.next().then(result => {
  console.log('result: ', result);
})

iterator.next().then(result => {
  console.log('result: ', result);
})