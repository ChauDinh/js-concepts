var floodFill = function(image, sr, sc, newColor) {
  let count = 0;
  for (let i = 0; i < image.length; i++) {
      for (let j = 0; j < image[i].length; j++) {
          count += image[i][j];
      }
  }

  return count;
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));