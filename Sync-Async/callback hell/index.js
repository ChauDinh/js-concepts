const fs = require("fs");

// const song1 = fs.readFileSync("../tex1.txt", { encoding: "utf-8" });
// const song2 = fs.readFileSync("../tex2.txt", { encoding: "utf-8" });
// const song3 = fs.readFileSync("../tex3.txt", { encoding: "utf-8" });

// console.log(song1, song2, song3);

fs.readFile("../tex1.txt", { encoding: "utf-8" }, function(err, song1) {
  console.log(song1);
  fs.readFile("../tex2.txt", { encoding: "utf-8" }, function(err, song2) {
    console.log(song2);
    fs.readFile("../tex3.txt", { encoding: "utf-8" }, function(err, song3) {
      console.log(song3);
    });
  });
});

// Promise

/**
 * for () {
 *  for() {
 *    for() {
 *      for () {
 *
 *      }
 *    }
 * }
 * }
 */
