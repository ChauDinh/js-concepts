/**
 * A problem collected from Voz =))
 * 
 * Given an array of strings, write a function return the minimum distance between a and b in array
 */

function solution(list = [], a = '', b = '') {
  if (list.length === 0) return -1;
  if (a.length === 0 || b.length === 0) return -1;

  let firstIdx = -1, secondIdx = -1;
  let minDist = list.length;
  
  for (let i = 0; i < list.length; ++i) {
    if (list[i] === a) {
      firstIdx = i
      minDist = Math.min(Math.abs(firstIdx - secondIdx), minDist);
    } else if (list[i] === b) {
      secondIdx = i
      minDist = Math.min(Math.abs(firstIdx - secondIdx), minDist);
    }
  }

  return minDist;
}

console.log(solution(["cat", "dog", "bird", "fish", "cat","duck","chicken","dog"], 'dog', 'duck'));