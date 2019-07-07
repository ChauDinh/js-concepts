function applyMixins(derivedCtor: any, baseColors: any[]) {
  baseColors.forEach(baseColor => {
    Object.getOwnPropertyNames(baseColor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseColor.prototype[name];
    });
  });
}

class CanSayHi {
  name;

  sayHi() {
    return `Hello, ${this.name}`;
  }
}

class HasSuperPower {
  heroName;

  superpower() {
    return `${this.heroName} 🥖🥖🥖`;
  }
}

class SuperHero implements CanSayHi, HasSuperPower {
  heroName;
  constructor(public name) {
    this.heroName = `SUPER ${name}`;
  }

  sayHi: () => string;
  superpower: () => string;
}

applyMixins(SuperHero, [CanSayHi, HasSuperPower]);

const ts = new SuperHero("TypeScript");

console.log(ts.superpower());
