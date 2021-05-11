const A = [1, 2];

const B = [3, 4];

const solution = (A, B) => {
  const a = A;
  const b = B;
  let sum = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
};

console.log(solution(A, B));
