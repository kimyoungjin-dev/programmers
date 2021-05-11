const s = "-1 -2 -3 -4";

const solution = (s) => {
  //공백 문자열을 만든다.
  let arr = " ";
  const a = s.split(" ");

  //최대값과 최솟값을 구해준다.
  const max = Math.max(...a);
  const min = Math.min(...a);
  //묹자열로 이어준다.
  return min + arr + max;
};

console.log(solution(s));
