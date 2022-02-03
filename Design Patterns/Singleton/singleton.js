/**
 * The singleton pattern helps us build the logs from the application
 * We can get them anywhere in our code base with exact the same instance
 * of the logger.
 */

class FoodLogger {
  constructor() {
    this.foodLog = [];
  }
  
  log(order) {
    this.foodLog.push(order.foodItem);
  }
}

// this is singleton
class FoodLoggerSingleton {
  constructor() {
    if (!FoodLoggerSingleton.instance) {
      FoodLoggerSingleton.instance = new FoodLogger();
    }
  }

  getFoodLogerInstance() {
    return FoodLoggerSingleton.instance;
  }
}

module.exports = FoodLoggerSingleton;