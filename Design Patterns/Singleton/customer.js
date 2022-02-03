const FoodLogger = require('./singleton');
const foodLogger = new FoodLogger().getFoodLogerInstance();

class Customer {
  constructor(order) {
    this.price = order.price,
    this.food = order.food,
    foodLogger.log(order);
  }
}

module.exports = Customer;