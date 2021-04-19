function solution(S, T) {
  if (T.length - S.length > 1) return "IMPOSSIBLE";
  if (T === S) return "NOTHING";

  let result = [];
  let first = 0;
  let second = 0;

  while (first <= S.length && second <= T.length) {
    if (S[first] !== T[second]) {
      if (S.length > T.length) {
        result.push(`REMOVE ${S[first]}`);
        first++;
      } else if (S.length < T.length) {
        result.push(`INSERT ${T[second]}`);
        second++;
      } else {
        if (T.indexOf(S[first]) > first) {
          result.push(`MOVE ${S[first]}`);
        }
        result.push("ahah");
        first++;
        second++;
      }
    } else {
      first++;
      second++;
    }
  }

  return result.length === 1 ? result[0] : "IMPOSSIBLE";
}

console.log(solution("odod", "odo"));

/**
 * nice niece => insert e
 * crow cow => remove r
 * beans banes => move e
 * o odd => impossible
 */
