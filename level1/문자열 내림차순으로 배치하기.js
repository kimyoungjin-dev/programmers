const s = "Zbcdefg";

// 문자열을 split으로 잘라서 배열형태로 만들고, 정렬한 후 reverse 로 배열원소의 순서를 바꿔주고 다시 join("")으로 원소를 합쳐준다.
const solution = (s) => {
  return s.split("").sort().reverse().join("");
};

console.log(solution(s));
