const axios = require("axios");

function getFact() {
  const curl = "https://api.aakhilv.me/fun/facts";
  return axios.get(curl)
    .then(function (response) {
      return response.data[0];
    })
}

function main() {
  console.log("Begin");
  getFact()
    .then(function (response) {
      console.log("result: ", response);
      console.log("Last end");
    })
  console.log("End");
}

main();