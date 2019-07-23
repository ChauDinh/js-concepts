const validateParentheses = require("./validateParentheses");

describe("test for the leetcode.20 - Valid Parentheses", () => {
  it("return true if the input of brackets is valid and false if not", () => {
    let expected = false;
    let actual = validateParentheses.isValid("[)");
    expect(actual).toEqual(expected);

    expected = true;
    actual = validateParentheses.isValid("");
    expect(actual).toEqual(expected);

    expected = true;
    actual = validateParentheses.isValid("[{}](()){[]}");
    expect(actual).toEqual(expected);
  });
});
