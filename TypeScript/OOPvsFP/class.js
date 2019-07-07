var Emoji = /** @class */ (function () {
    function Emoji(_icon) {
        this._icon = _icon;
    }
    Object.defineProperty(Emoji.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Emoji.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        enumerable: true,
        configurable: true
    });
    Emoji.prototype.change = function (val) {
        this._prev = this._icon;
        this._icon = val;
    };
    return Emoji;
}());
var Sun = new Emoji("🌞");
console.log(Sun.icon, Sun.prev);
Sun.change("💩");
Sun.change("💋");
console.log(Sun.icon, Sun.prev);
