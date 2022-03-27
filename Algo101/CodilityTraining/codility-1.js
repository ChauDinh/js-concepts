// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, colors) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X.length === 0 || Y.length === 0 || colors.length === 0) return 0;
    if (X.length !== Y.length || X.length !== colors.length) return 0;

    const numberOfPoints = X.length;

    // calculate distance from O to given points
    const distances = new Array(numberOfPoints).map(x => 0);
    for (let i = 0; i < numberOfPoints; i++) {
      distances[i] = {
        color: colors[i],
        value: Math.pow(X[i], 2) + Math.pow(Y[i], 2),
      };
    }
    
    // Sort distances
    distances.sort((a, b) => a.value - b.value);

    // Calculate frequency
    let freqDistance = {};
    for (let i = 0; i < distances.length; i++) {
      freqDistance[distances[i].value] = {
        freq: freqDistance[distances[i].value] ? freqDistance[distances[i].value].freq + 1 : 1,
        weight: freqDistance[distances[i].value] 
        ? distances[i].color === 'G' 
          ? freqDistance[distances[i].value].weight + 1 
          : freqDistance[distances[i].value].weight - 1 
        : distances[i].color === 'G' 
          ? 1 
          : -1
      };
    }
    
    let result = 0;
    let count = 0;
    let currFreq = 0;
    for (const distance in freqDistance) {
      count += freqDistance[distance].weight;
      currFreq += freqDistance[distance].freq;
      if (count === 0) result = currFreq;
    }

    return result;
}

console.log(solution([4, 0, 2, -2], [4, 1, 2, -3], 'RGRR'));