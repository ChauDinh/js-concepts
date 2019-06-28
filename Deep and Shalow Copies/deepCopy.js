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

const arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// let arr2 = arr1.map(e => e);
let arr2 = arr1.map((e, i) => (i === 1 ? 4 : e));
// arr2[1] = 4;
console.log(arr2);
console.log(arr1);
