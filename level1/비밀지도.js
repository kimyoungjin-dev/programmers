const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

//(v | arr2[index]) 의 의미를 파악하는 것이 중요하다.
const solution = (n, arr1, arr2) => {
  const a = new Array(n).fill("0".repeat(n));
  const b = arr1.map((v, index) => (v | arr2[index]).toString(2));
  const c = a.map((v, index) => (v + b[index]).slice(-n));

  const d = c.map((v) =>
    v
      .split("")
      .map((a) => (a === "1" ? (a = "#") : " "))
      .join("")
  );
  return d;
};

console.log(solution(n, arr1, arr2));

//slice함수는 기존 배열을 그대로 유지한다.
// const a = "123456";
// const b = a.slice(-3);
// console.log(b); //뒤에서부터 3만큼 잘라준다
