/**
 * Problem: Code a function that takes 2 paths, example:
 * src/route/home.js
 * src/utils/helper.js
 * Then outputs a string of how the first file would import the second one
 * import helper from "../utils/helper"
 */

/**
 * first = ....
 * second = ....
 * first.split("/"); => ["src", "route", "home.js"]
 * second.split("/"); => ["src", "utils", "helper.js"]
 *
 *
 */

/**
 *
 */

module.exports = importPath = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0) {
    return null;
  }

  const str1Splited = str1.split("/");
  const str2Splited = str2.split("/");
  let amountOfRoutesToRemove = 0;

  for (index in str2Splited) {
    let currEl = str2Splited[index];
    if (currEl === str1Splited[index]) {
      amountOfRoutesToRemove++;
    } else {
      str1Splited.splice(0, amountOfRoutesToRemove);
      str2Splited.splice(0, amountOfRoutesToRemove);
      break;
    }
  }

  let finalLocation = "";
  if (str1Splited.length === 1) {
    finalLocation = "./";
  } else {
    for (let i = 0; i < str1Splited.length - 1; i++) {
      finalLocation = `${finalLocation}../`;
    }
  }

  for (let i = 0; i < str2Splited.length - 1; i++) {
    finalLocation = `${finalLocation}${str2Splited[i]}/${
      str2Splited[str2Splited.length - 1]
    }`;
  }

  return finalLocation;
};

console.log(importPath("src/route/app/home.js", "src/utils/helpers.js"));
