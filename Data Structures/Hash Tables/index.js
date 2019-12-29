function hashStringToInt(str, tableSize) {
  let hash = 17;

  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  table = new Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;

    if (loadFactor > 0.1) {
      // resize the table
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = key => {
    const idx = hashStringToInt(key, this.table.length);
    return this.table[idx].find(x => x[0] === key)[1];
    // the Array.prototype.find() returns the first element in the array satisfies the test function
  };
}

const newHashTable = new HashTable();

newHashTable.setItem("lastName", "tim");
newHashTable.setItem("firstName", "bob");
newHashTable.setItem("age", 24);
newHashTable.setItem("dob", "2/2/2");
// newHashTable.setItem("adress", "123/123/123");
console.log(newHashTable.getItem("firstName"));
console.log(newHashTable.getItem("lastName"));
console.log(newHashTable.getItem("dob"));
console.log(newHashTable.table.length);
console.log(newHashTable.table);
