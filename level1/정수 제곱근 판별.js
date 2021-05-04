const n = 121;

//Math.pow(a, 2) => a를 2만큼 제곱한다.
//Math.sqrt(n); => n의 제곱근이 무엇인지 체크한다.
// Number.isInteger(b) => b가 정수인지 실수인지 체크한다.

const solution = (n) => {
  const a = Math.sqrt(n) + 1; //144
  const b = Math.sqrt(n);
  return Number.isInteger(b) === true ? Math.pow(a, 2) : -1;
};

console.log(solution(n));

//  const a = Math.sqrt(n); => 11
