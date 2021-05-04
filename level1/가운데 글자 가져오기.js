const s = "abcdfdee";

//substring 함수를 사용하여 문자열을 자른다.
//math.ceil 올림 함수를 사용하여 소수점을 지운다.

const solution = (s) => {
  const sLen = s.length;
  return s.length % 2 === 0
    ? s.substring(Math.ceil(sLen / 2) - 1, Math.ceil(sLen / 2) + 1)
    : s.substring(Math.ceil(sLen / 2) - 1, Math.ceil(sLen / 2));
};

console.log(solution(s));
