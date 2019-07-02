const slidingWindow = require("./slidingWindow");

describe("test the sliding window technique", () => {
  it("returns the maximum subarray having the given n length", () => {
    let expected = 700;
    let actual = slidingWindow.maxSubarraySum([100, 200, 300, 400], 2);
    expect(actual).toEqual(expected);

    expected = 39;
    actual = slidingWindow.maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
    expect(actual).toEqual(expected);

    expected = null;
    actual = slidingWindow.maxSubarraySum([2, 3], 3);
    expect(actual).toEqual(expected);

    expected = 6;
    actual = slidingWindow.maxSubarraySum([5, 2, -1, 0, 3], 3);
    expect(actual).toEqual(expected);
  });
});
