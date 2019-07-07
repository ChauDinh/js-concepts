var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.sayHi = function () {
        return "Hello, " + this.name;
    };
    return Human;
}());
var patrick = new Human("Patrick Mullot");
console.log(patrick.sayHi());
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    function SuperHuman(name) {
        return _super.call(this, name) || this;
    }
    SuperHuman.prototype.superPower = function () {
        return this.heroName + " props treys \uD83D\uDC19\uD83D\uDC19\uD83D\uDC19";
    };
    return SuperHuman;
}(Human));
var steph = new SuperHuman("Steph Curry");
console.log(steph.sayHi());
