const arr = [1, 2, 3, 4];

const solution = (arr) => {
  const a = arr.reduce((a, b) => a + b, 0);
  const b = arr.length;

  return a / b;
};

console.log(solution(arr));
