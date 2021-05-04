let n = 626331;

const solution = (n) => {
  let count = 0;

  while (n !== 1) {
    if (count > 500) {
      return -1;
    }

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }

    count++;
  }
  return count;
};

console.log(solution(n));
