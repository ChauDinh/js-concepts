var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let frequenceMap = {}
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      frequenceMap[nums3[i] + nums4[j]] = frequenceMap[nums3[i] + nums4[j]] + 1 || 1;
    }
  }

  let result = 0;
  for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
          if (frequenceMap[-nums1[i] - nums2[j]]) {
            result += frequenceMap[-nums1[i] - nums2[j]]
          }
      }
  }
  
  return result;
};

console.log(fourSumCount([0,1,-1], [-1,1,0], [0,0,1], [-1,1,1]))