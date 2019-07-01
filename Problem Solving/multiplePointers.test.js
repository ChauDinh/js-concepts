const multiplePointers = require("./multiplePointers");

describe("test for multiple pointers patter", () => {
  it("returns the first pair having sum equals to 0", () => {
    let expected = undefined;
    let actual = multiplePointers.sumZero([1, 2, 3, 4, 5, 6]);
    expect(actual).toEqual(expected);

    expected = [-2, 2];
    actual = multiplePointers.sumZero([-2, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);

    expected = [-2, 2];
    actual = multiplePointers.sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
    expect(actual).toEqual(expected);
  });
});
