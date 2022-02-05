var merge = function(nums1, m, nums2, n) {
  let first = 0, second = 0;
  let tmp = [];
  while (first < m || second < n) {
    if (nums1[first] <= nums2[second]) {
      tmp.push(nums1[first]);
      first++;
    } else {
      tmp.push(nums2[second]);
      second++;
    }
  }
  while (first < m) {
    tmp.push(nums1[first]);
    first++;
  }
  while (second < n) {
    tmp.push(nums2[second]);
    second++;
  }

  return tmp;
};

console.log(merge([]))