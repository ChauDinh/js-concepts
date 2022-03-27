const readline = require("readline");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

r.on("line", function(line) {
  let vals = line.split(" ");
  let input = Number(vals[0]);
  
  let result = [];
  while (true) {
    result.push(input);
    if (input === 1) break;
    if (input % 2 === 0) input = input / 2;
    else input = input * 3 + 1;
  }

  console.log(result.join(" "));
});