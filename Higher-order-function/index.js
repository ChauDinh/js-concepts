function cube (x) {
  return x*x*x;
}

// compute the sum of integers between a and b
function sum_integers(a, b) {
  return a > b
    ? 0
    : a + sum_integers(a + 1, b);
}

// compute the sum of cubes in the given range
function sum_cubes(a, b) {
  return a > b
    ? 0
    : cube(a) + sum_cubes(a + 1, b);
}

// compute the sum of sequence
function pi_sum(a, b) {
  return a > b
    ? 0
    : 1 / (a * (a + 2)) + pi_sum(a + 4, b);
}