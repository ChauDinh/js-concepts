var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hasName = function (name) {
    return { name: name };
};
var canSayHi = function (name) {
    return {
        sayHi: function () {
            return "Hello " + name;
        }
    };
};
var Person = function (name) {
    return __assign({}, hasName(name), canSayHi(name));
};
var person = Person("Chau");
console.log(person.sayHi());
