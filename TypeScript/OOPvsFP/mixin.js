function applyMixins(derivedCtor, baseColors) {
    baseColors.forEach(function (baseColor) {
        Object.getOwnPropertyNames(baseColor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseColor.prototype[name];
        });
    });
}
var CanSayHi = /** @class */ (function () {
    function CanSayHi() {
    }
    CanSayHi.prototype.sayHi = function () {
        return "Hello, " + this.name;
    };
    return CanSayHi;
}());
var HasSuperPower = /** @class */ (function () {
    function HasSuperPower() {
    }
    HasSuperPower.prototype.superpower = function () {
        return this.heroName + " \uD83E\uDD56\uD83E\uDD56\uD83E\uDD56";
    };
    return HasSuperPower;
}());
var SuperHero = /** @class */ (function () {
    function SuperHero(name) {
        this.name = name;
        this.heroName = "SUPER " + name;
    }
    return SuperHero;
}());
applyMixins(SuperHero, [CanSayHi, HasSuperPower]);
var ts = new SuperHero("TypeScript");
console.log(ts.superpower());
