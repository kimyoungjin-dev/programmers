const N = 123;

const solution = (N) => {
  const a = N.toString()
    .split("")
    .map((v) => Number.parseInt(v));

  return a.reduce((a, b) => a + b, 0);
};

console.log(solution(N));

// for문

// const solution = (N) => {
//   const a = N.toString();
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += +a[i];
//   }

//   return sum;
// };
