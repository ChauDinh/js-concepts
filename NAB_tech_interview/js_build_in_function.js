/**
 * forEach
 */

const myForEach = function(collection, iterator) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      iterator(collection[key], key, collection);
    }
  }
}

const arr = myForEach([1, 2, 3], item => console.log('item square: ', item * item));
console.log("🚀 ~ file: js_build_in_function.js ~ line 18 ~ arr", arr)

/**
 * filter
 */

const myFilter = function(collection, condition) {
  let result = [];
  myForEach(collection, function(element) {
    if (condition(element)) {
      result.push(element);
    }
  });

  return result;
}
console.log("🚀 ~ file: js_build_in_function.js ~ line 34 ~ myFilter ~ myFilter", myFilter([1, 2, 3, 4], item => item >= 2))

/**
 * map
 */

const myMap = function(collection, iterator) {
  let collectionClone = collection.slice(0);
  let result = [];

  for (let i = 0, t = collectionClone.length; i < t; i++) {
    result.push(iterator(collectionClone[i]));
  }

  return result;
}
console.log("🚀 ~ file: js_build_in_function.js ~ line 50 ~ myMap ~ myMap", myMap([1, 2, 3], item => item * item));

/**
 * reduce
 * 
 * notice: you can pass a starting value for accumulator
 * if no starting value is passed, 
 */

let number = [5].reduce((total, number) => {
  return total + number * number
}, 0)
console.log("🚀 ~ file: js_build_in_function.js ~ line 57 ~ number", number)

const myReduce = function(collection, iterator, accumulator) {
  if (accumulator === undefined) {
    accumulator = collection[0];
    collection = collection.slice(1);
  }
  myForEach(collection, function(element, index) {
    accumulator = iterator(accumulator, element, index);
  })

  return accumulator;
}
console.log("🚀 ~ file: js_build_in_function.js ~ line 75 ~ myReduce ~ myReduce", myReduce([1, 2, 3], (a, b) => a + b, 0));

/**
 * includes
 */

const myIncludes = function(collection, target) {
  return myReduce(collection, function(isFound, item) {
    if (isFound) {
      return true;
    }
    return item === target;
  }, false);
}
console.log("🚀 ~ file: js_build_in_function.js ~ line 89 ~ myIncludes ~ myIncludes", myIncludes([1, 2, 3], 2));
console.log("🚀 ~ file: js_build_in_function.js ~ line 89 ~ myIncludes ~ myIncludes", myIncludes([1, 2, 3], 5));

/**
 * every
 * 
 * In order to verify if every element in a collection meets a condition, one can use the .every() method.
 */

const myEvery = function(collection, condition) {
  let testArr = [];
  myForEach(collection, function(element) {
    testArr.push(element);
  });

  if (condition === undefined) {
    return myReduce(testArr, function(accumulator, element) {
      return accumulator === false ? accumulator : Boolean(element);
    }, true);
  } else {
    return myReduce(testArr, function(coll, element) {
      return Boolean(condition(element)) && (coll === true);
    }, true);
  }
};
console.log("🚀 ~ file: js_build_in_function.js ~ line 113 ~ myEvery ~ myEvery", myEvery([1, 2, 3], n => n > 0));
console.log("🚀 ~ file: js_build_in_function.js ~ line 113 ~ myEvery ~ myEvery", myEvery([1, 2, 3], n => n > 2));

/**\
 * some()
 * 
 * To determine if at least one of the elements in a collection is truthy or returns true after passing a condition, the some method can be used
 */

const mySome = function(collection, condition) {
  let testArr = [];
  myForEach(collection, function(element) {
    testArr.push(element);
  });

  if (condition === undefined) {
    condition = function(x) {
      return x ? true : false;
    }
  }

  return !myEvery(testArr, function(element) {
    return !condition(element);
  });
};
console.log("🚀 ~ file: js_build_in_function.js ~ line 139 ~ mySome ~ mySome", mySome([1, 2, 3], n => n <= 1));

