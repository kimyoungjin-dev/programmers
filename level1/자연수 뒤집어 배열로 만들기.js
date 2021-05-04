const n = 12345;

const solution = (n) => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((v) => Number.parseInt(v));
};

console.log(solution(n));
