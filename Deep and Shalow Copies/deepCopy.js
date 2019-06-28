const a = {
  foods: {
    dinner: "Pizza"
  },
  drinks: {
    dinner: "Orange"
  }
};

// let b = { ...a, foods: { ...a.foods } };

let b = JSON.parse(JSON.stringify(a));

b.foods.dinner = "Rice";

console.log(b);
console.log(a);

const arr1 = [1, 2, 3, [4, 5, 6, [7]]];
// let arr2 = [...arr1];
// let arr2 = arr1.map(e => e);
// let arr2 = arr1.map((e, i) => (i === 1 ? 4 : e));
// let arr2 = arr1.slice(0);
// let arr2 = [...arr1];
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[3][3] = 4;
// arr2[1] = 4;
console.log(arr2[3][3]);
console.log(arr1[3][3]);

// Deep copy in class

class Counter {
  constructor() {
    this.count = 5;
  }

  copy() {
    const copy = new Counter();
    copy.count = this.count;
    return copy;
  }
}

const originalCounter = new Counter();
const copiedCounter = originalCounter.copy();

console.log(originalCounter.count);
console.log(copiedCounter.count);

copiedCounter.count = 7;
console.log(copiedCounter.count);
console.log(originalCounter.count);
