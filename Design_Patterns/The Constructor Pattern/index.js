/**
 * The Constructor Pattern
 *
 * Constructor pattern is used to create specific types of objects.
 */

//  Basic Constructors
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function () {
    return this.model + " has done " + this.miles + " miles ";
  };
}

var civic = new Car("Honda Civic", 2020, 20000);
console.log(civic);
console.log(civic.toString());

// Problems: The simple version of constructor is difficult to make inheritance, other is that functions such as toString() are redefined for each of the new object created using the Car constructor.

// Constructors with prototypes
function Car2(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car2.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles ";
};

var civic2 = new Car2("Honda Civic", 2020, 20000);
console.log(civic2);
console.log(civic2.toString());
