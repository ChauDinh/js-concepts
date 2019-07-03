const longestConsecutiveSequence = require("./longestConsecutiveSequence");
const longestConsecutiveSequence2 = require("./longestConsecutiveSequence.2");

describe("test for leedcode.128 - longest consecutive sequence", () => {
  it("returns the length of the longest consecutive sequence", () => {
    let expected = 11;
    let actual = longestConsecutiveSequence.longestConsecutiveSequence([
      1,
      2,
      3,
      4,
      5,
      -200,
      -100,
      6,
      -99,
      -98,
      -97,
      -96,
      -95,
      -94,
      -93,
      -92,
      -91,
      -90
    ]);
    expect(actual).toEqual(expected);

    expected = 5;
    actual = longestConsecutiveSequence.longestConsecutiveSequence([
      1,
      2,
      3,
      4,
      5
    ]);
    expect(actual).toEqual(expected);

    expected = 1;
    actual = longestConsecutiveSequence.longestConsecutiveSequence([
      1,
      3,
      5,
      7,
      9,
      11,
      13
    ]);
    expect(actual).toEqual(expected);

    expected = null;
    actual = longestConsecutiveSequence.longestConsecutiveSequence([]);
    expect(actual).toEqual(expected);
  });

  it("returns the length of longest consecutive sequence", () => {
    let expected = 4;
    let actual = longestConsecutiveSequence2.longestConsecutiveSequence2([
      100,
      4,
      200,
      1,
      3,
      2
    ]);
    expect(actual).toEqual(expected);

    expected = 5;
    actual = longestConsecutiveSequence2.longestConsecutiveSequence2([
      1,
      2,
      3,
      4,
      5
    ]);
    expect(actual).toEqual(expected);

    expected = 1;
    actual = longestConsecutiveSequence2.longestConsecutiveSequence2([
      1,
      3,
      5,
      7,
      9,
      11,
      13
    ]);
    expect(actual).toEqual(expected);

    expected = null;
    actual = longestConsecutiveSequence2.longestConsecutiveSequence2([]);
    expect(actual).toEqual(expected);
  });
});
