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
