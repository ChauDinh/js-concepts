const frequencyCounter = require("./frequencyCounter");

describe("test the problem solving patters", () => {
  it("return boolean value, without frequency counter", () => {
    let expected = false;
    let actual = frequencyCounter.same([1, 2, 9, 10], [1, 4, 81, 10]);
    expect(actual).toEqual(expected);

    expected = true;
    actual = frequencyCounter.same([1, 2, 0], [1, 4, 0]);
    expect(actual).toEqual(expected);

    expected = true;
    actual = frequencyCounter.same([0, 0, 10, -1], [0, 0, 100, 1]);
    expect(actual).toEqual(expected);
  });

  it("return boolean value, using frequency counter", () => {
    let expected = true;
    let actual = frequencyCounter.checkSquare(
      [1, 2, 3, 4, 5],
      [1, 4, 9, 16, 25]
    );
    expect(actual).toEqual(expected);

    expected = false;
    actual = frequencyCounter.checkSquare([1, 2, 9, 10], [1, 4, 81, 10]);
    expect(actual).toEqual(expected);
  });
});
