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