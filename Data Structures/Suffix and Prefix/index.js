class Node {
	constructor(value, link) {
		this.value = value;
		this.link = link;
	}
}

class CalculatingRPNExpression {
	constructor(RPN = " ") {
		this.RPN = RPN;
		this.top = null;
	}

	push(number) {
		let p = new Node(number, this.top);
		this.top = p;
	}

	pop() {
		let result = this.top.value;
		let p = this.top.link;
		this.top = p;
		return result;
	}

	processToken(token) {
		if (["+", "-", "*", "/"].includes(token)) {
			let y = this.pop();
			let x = this.pop();
			switch (token) {
				case "+":
					x = x + y;
					break;
				case "-":
					x = x - y;
					break;
				case "*":
					x = x * y;
					break;
				default:
					x = x / y;
					break;
			}
			this.push(x);
		} else {
			this.push(parseInt(token));
		}
	}

	parsing() {
		let T = "";
		this.top = null;
		for (let i = 0; i < this.RPN.length; i++) {
			if (this.RPN[i] !== " ") {
				T = T + this.RPN[i];
			} else {
				this.processToken(T);
				T = "";
			}
		}
		return this.top.value;
	}
}

const calSuffix = new CalculatingRPNExpression("10 2 / 3 + 4 7 - * ");
console.log(calSuffix.parsing());

/**
 * But in real life, we still accept infix form of an arithmetic expression.
 * Actually, we allow user type in infix form
 * Then we have a program changes from infix to RPN form and use the CalculatingRPNExpression class above
 */

class ConvertInfixToRPN {
	constructor(Infix = " ") {
		this.Infix = Infix;
		this.top = null;
	}

	// Push a node to the top
	push(AnsiChar) {
		let p = new Node(AnsiChar, this.top);
		this.top = p;
	}

	// Get the top value and remove top node
	pop() {
		let result = this.top.value;
		let p = this.top.link;
		this.top = p;
		return result;
	}

	// Get the top value
	get() {
		let result = this.top.value;
		return result;
	}

	prioridy(character) {
		switch (character) {
			case "*":
				return 2;
			case "/":
				return 2;
			case "+":
				return 1;
			case "-":
				return 1;
			case "(":
				return 0;
			default:
				return null;
		}
	}

	processToken(token = []) {
		let opt = token[0];
		switch (opt) {
			case "(":
				this.push(opt);
			case ")": {
				let x;
				do {
					x = this.pop();
					if (x !== "(") {
					}
				} while ((x = "("));
			}
		}
	}
}
