// Pure functions
var num = 123;
function toString(val) {
    return val.toString();
}
var str = toString(num);
console.log(typeof str);
// Immutable data
var data = Object.freeze([1, 2, 3, 4, 5, 6]);
// Functions as Arguments
var addEmoji = function (val) { return toString(val) + "😀"; };
var emojiData = data.map(addEmoji);
console.log(emojiData);
// Functions as return value
var appendEmoji = function (fixed) { return function (dynamic) { return fixed + " " + dynamic; }; };
var rain = appendEmoji("🌧");
var sun = appendEmoji("🌝");
console.log(rain("today"));
