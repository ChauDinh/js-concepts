// function calc(x) {
//   // Complexity
//   console.log(`Calc with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   const cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     const result = func(x);
//     cache.set(x, result);

//     return result;
//   };
// }

// calc = cachingDecorator(calc);

// console.log(calc(1));

// console.log(calc(1));

// console.log(calc(2));

// console.log(calc(2));
// console.log(calc(2));

// const worker = {
//   multiplier: 2,
//   calc: function(x) {
//     console.log(`Calc with ${x}`);
//     return x * this.multiplier;
//   }
// };

// function cachingDecorator(func) {
//   const cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     const result = func.call(this, x);
//     cache.set(x, result);

//     return result;
//   };
// }

// worker.calc = cachingDecorator(worker.calc);

// console.log(worker.calc(10));
// console.log(worker.calc(10));

// const numbers = [4, 5, 6, 7, 8, 9, 2, 3, 0, 1];
// const max = Math.max.apply(null, numbers);
// const min = Math.min.apply(null, numbers);

// console.log(max, min);

const worker = {
  calc(min, max) {
    console.log(`Calc with ${min}, and ${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();

  return function(...args) {
    let key = hash(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

function hash(...args) {
  return args.join();
}

worker.calc = cachingDecorator(worker.calc, hash);
console.log(worker.calc(1, 2));

console.log(worker.calc(1, 2));
