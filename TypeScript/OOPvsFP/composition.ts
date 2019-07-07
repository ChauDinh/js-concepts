const hasName = name => {
  return { name };
};

const canSayHi = name => {
  return {
    sayHi: function() {
      return `Hello ${name}`;
    }
  };
};

// Composition
const Person = function(name) {
  return {
    ...hasName(name),
    ...canSayHi(name)
  };
};

const person = Person("Chau");

console.log(person.sayHi());
