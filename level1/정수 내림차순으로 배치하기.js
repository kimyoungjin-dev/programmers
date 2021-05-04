const n = 118372;

const solution = (n) => {
  const a = n.toString().split("").sort().reverse().join("");
  return Number.parseInt(a);
};

console.log(solution(n));
