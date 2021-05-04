const n = 45;
//숫자를 문자열로 바꿔주는 toString을 사용합니다.
//reverse를 사용하기위해서는 split을 사용한다.
//10진법으로 바꾸기위해서 Number.parseInt(변환할 문자열, 변환할 문자열의 현재 진수)

const solution = (n) => {
  const a = n.toString(3).split("").reverse().join("");
  return Number.parseInt(a, 3);
};

console.log(solution(n));
