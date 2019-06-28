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
