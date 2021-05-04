const strings = ["sun", "bed", "car"];
const n = 1;

//n번째 문자열이 서로다르다면, n번째 문자열의 순서를 비교한다.a[n]
// a문자열의 n번째 문자열과 === b문자열의 n번째 문자열 이 동일하다면, a와 b문자열 자체를 비교한다. a

function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
console.log(solution(strings, n));
