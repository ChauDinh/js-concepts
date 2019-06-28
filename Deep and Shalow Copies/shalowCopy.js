const a = {
  foods: {
    dinner: "Pizza"
  }
};

let b = a;
b.foods.dinner = "Rice";

console.log(b);
console.log(a);

