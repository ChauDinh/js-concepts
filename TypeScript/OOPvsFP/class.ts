class Emoji {
  private _prev;
  constructor(private _icon) {}

  get icon() {
    return this._icon;
  }

  get prev() {
    return this._prev;
  }

  change(val) {
    this._prev = this._icon;
    this._icon = val;
  }
}

const Sun = new Emoji("🌞");

console.log(Sun.icon, Sun.prev);

Sun.change("💩");
Sun.change("💋");

console.log(Sun.icon, Sun.prev);

// Define static methods

class StaticEmoji {
  static addOneTo(val) {
    return val + 1;
  }
}

StaticEmoji.addOneTo(3);
