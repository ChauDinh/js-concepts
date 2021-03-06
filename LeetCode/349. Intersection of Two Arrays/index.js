const insertion = (nums1 = [], nums2 = []) => {
  if (nums1.length === 0 || nums2.length === 0) return [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let result = [];
  let l1 = 0,
    l2 = 0;

  while (l1 < nums1.length && l2 < nums2.length) {
    if (nums1[l1] === nums2[l2]) {
      if (!result.includes(nums1[l1])) {
        result.push(nums1[l1]);
      }
      l1++;
      l2++;
    } else if (nums1[l1] > nums2[l2]) {
      l2++;
    } else {
      l1++;
    }
  }

  return result;
};

console.log(insertion([1, 2, 2, 1], [2, 2]));
