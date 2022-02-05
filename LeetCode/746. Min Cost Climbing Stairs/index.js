var minCostClimbingStairs = function(cost) {
  let fcost = [];
  for (let i = 0; i < cost.length; i++) {
      fcost[i] = cost[i] + Math.min(fcost[i - 1] || 0, fcost[i - 2] || 0);
  }
  return Math.min(fcost[fcost.length - 1], fcost[fcost.length - 2]);
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));