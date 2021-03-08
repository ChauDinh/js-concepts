const largestNumber = (nums = []) => {
  if (nums.length === 0 || nums.length === 1) return nums[0].toString();

  nums.sort((a, b) => ("" + b + a).localeCompare("" + a + b));

  if (nums[0] === 0) return "0";

  return nums.join("");
};

console.log(largestNumber([1, 2, 3, 4, 0]));

/**
 * [128, 12, 320, 32]
 * => [12, 128, 32, 320]
 * 3232012812
 *
 * [128, 12, ]
 */
