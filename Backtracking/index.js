/**
 * Viết chương trình in ra tất cả các số nhị phân có n phần tử
 * 
 * vd: n = 3
 * 100
 * 110
 * 
 */

function solution(n) {
  let arr = new Array(n);

  const show = () => {
    console.log(arr.join(''));
    return;
  }

  const backtrack = i => {
    if (i === n) show();
    else {
      arr[i + 1] = 0; backtrack(i + 1);
      arr[i + 1] = 1; backtrack(i + 1);
    }
  }

  return backtrack(0);
}

console.log(solution(3));

/**
 * Viết chương trình in ra tất cả các hoán vị của dãy n phần tử
 */

function solution2(n) {
  let arr = new Array(n);
  let check = new Array(n).fill(false);

  const show = () => {
    console.log(arr.join(''));
    return;
  }

  const backtrack = i => {
    if (i === n) show();
    else {
      for (let j = 1; j <= n; j++) {
        if (!check[j]) {
          arr[i + 1] = j;
          check[j] = true;
          backtrack(i + 1);
          check[j] = false;
        }
      }
    }
  }

  return backtrack(0);
}

console.log('permutation: ', solution2(3));

/**
 * Bai toan NQueens
 */

function solution3 (n) {
  let array = new Array(n);
  let check = new Array(n).fill(false);

  const show = () => {
    console.log(array.join(''));
    return;
  }

  const backtrack = (i) => {
    if (i === n) show();
    else {
      for (let j = 1; j <= n; j++) {
        if ((!check[j]) && (!check[j - 1]) && (!check[j + 1])) {
          array[i + 1] = j;
          check[j] = true;
          check[j - 1] = true;
          check[j + 1] = true;
          backtrack(i + 1);
          check[j] = false;
          // check[j - 1] = false;
          // check[j + 1] = false;
        }
      }
    }
  }

  return backtrack(0);
}

console.log('n queens: ', solution3(3));