const s = "try hello world";

//첫번째 split(" ")
//두번째 split("")
//문자열의 index 가 짝수라면 대문자, 홀수라면 소문자로 return
const solution = (s) => {
  return s
    .split(" ")
    .map((item) =>
      item
        .split("")
        .map((v, index) => {
          if (index % 2 === 0) {
            return v.toUpperCase();
          } else {
            return v.toLowerCase();
          }
        })
        .join("")
    )
    .join(" ");
};

console.log(solution(s));
