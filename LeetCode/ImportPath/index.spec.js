const importPath = require("./index");

describe("tets for import path problem", () => {
  it("return the import path from str1 to str2", () => {
    let expected = "../utils/helpers.js";
    let actual = importPath(
      "src/route/app/home.js",
      "src/route/utils/helpers.js"
    );
    expect(actual).toEqual(expected);

    expected = "../../utils/helpers.js";
    actual = importPath("src/route/app/home.js", "src/utils/helpers.js");
    expect(actual).toEqual(expected);
  });
});
