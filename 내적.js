const a = [1, 2, 3, 4];

const b = [-3, -1, 0, 2];

const solution = (a, b) => {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(a[i] * b[i]);
  }
  return result.reduce((a, b) => a + b, 0);
};

console.log(solution(a, b));
