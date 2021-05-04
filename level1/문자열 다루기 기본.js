const s = "a1234";

// 문자가의 길이가 4또는 6인지 확인하는 변수를 만들고
// every함수를 이용해  s의 문자열의 문자 하나하나가 숫자인지 확인한다.만약 하나라도 문자가 포함되어있으면 false return
//isNaN(문자열) =>문자열이라면 true를 반환
//!isNaN => 숫자라면 true

const solution = (s) => {
  const a = s.split("");
  const a1 = a.length === 4;
  const a2 = a.length === 6;
  const b = a.every((v) => !isNaN(v));

  return (a1 || a2) && b;
};

console.log(solution(s));

console.log(isNaN(3));
console.log(isNaN("sfsdf"));
