/**
 * literal: let x = {}
 * let x = new Object();
 * let y = Object.create(x);
 * Class-based
 * Constructor functions
 * Factory functions
 */

// Constructor functions are regular functions which are named with capital letter first and should be executed with "new" operator
//

function Constructor(name, age) {
	this.name = name;
	this.age = age;
	this.age++;
	this.ten = function() {
		return `Ten: ${this.name}`;
	};
	this.tuoi = function() {
		return `Tuoi: ${this.age}`;
	};
}

Constructor.prototype.test = function() {
	return this.name + `test`;
};

const p = new Constructor("Amanlearnscode", 18);

console.log(p.ten());
console.log(p.tuoi());

const q = new Constructor("Newman", 20);

const r = new Constructor("Oldman", 8);
console.log(r.test());

// Factory Function
// A factory function is any funciton which is not a class or constructor returning an object.
//

function Factory(name, age) {
	let _private = 100;
	function ten() {
		return `Ten: ${name}`;
	}
	function tuoi() {
		return `Tuoi: ${age}`;
	}

	return {
		ten: ten,
		tuoi: tuoi,
		data: _private
	};
}

const fact1 = Factory("Amanlearnscode", 25);
console.log(fact1.ten());

const fact2 = Factory("Amanlearnscode", 20);
console.log(fact2.tuoi());
console.log(fact2.data);
