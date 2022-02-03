const FoodLogger = require('./singleton');

const foodLogger = new FoodLogger().getFoodLogerInstance();

class Restaurant {
  constructor(inventory) {
    this.quantity = inventory.quantity,
    this.food = inventory.food,
    foodLogger.log(inventory)
  }
}

module.exports = Restaurant;