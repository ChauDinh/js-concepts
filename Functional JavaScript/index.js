function a(x) {
	x++;
	return function() {
		x++;
		return function() {
			console.log(++x);
		};
	};
}

a(1)()();
a(1)()();
a(1)()();

// let x = a(1);
// x();
// x();
// x();

// Hàm sẽ dừng lại khi chúng ta return một giá trị nào đó (string, number, boolean) nhưng sẽ không dừng lại nếu chúng ta return một hàm khác.
//
//

/**
 * Preload Factory
 */

function tinhtoan(x) {
	return function add(y) {
		console.log(x + y);
	};
}

const add10 = tinhtoan(10);
const add20 = tinhtoan(20);

add10(5);
add10(10);

add20(5);
add20(10);

/**
 * Currying function
 */

function thunghiem(x, y, z) {
	console.log(x + y + z);
}

thunghiem(1, 2, 3);

function currying(x) {
	return function(y) {
		return function(z) {
			console.log(x + y + z);
		};
	};
}

currying(1)(2)(3);

// Closure

function taikhoan(tiencuatoi) {
	let myMoney = tiencuatoi;

	return {
		xem: function() {
			return `có ${myMoney} trong tài khoản`;
		},
		nap: function(amount) {
			myMoney += amount;
			return true;
		},
		rut: function(amount) {
			if (amount > myMoney) return `Hết tiền rồi bồ tèo`;
			myMoney -= amount;
			return true;
		}
	};
}

const chau = taikhoan(10);

console.log(chau.xem());
console.log(chau.nap(10));
console.log(chau.xem());
console.log(chau.rut(199));
console.log(chau.xem());
console.log(chau.rut(5));
console.log(chau.xem());
