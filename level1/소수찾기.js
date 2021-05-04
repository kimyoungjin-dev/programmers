const n = 10;

const solution = (n) => {
  let result = [];
  let cnt = 0;

  //result 라는 배열에 1~n까지의 숫자를 넣어준다.

  for (let i = 1; i <= n; i++) {
    result.push(i);
  }

  //v 하나하나마다 cnt갯수를 ++시킨다.

  result.forEach((v) => {
    const doll = calculator(v);
    if (doll) {
      cnt++;
    }
  });
  return cnt;
};

//calculator 함수 : 소수판별함수
const calculator = (v) => {
  let count = 0;

  for (let i = 1; i <= v; i++) {
    if (v % i === 0) {
      count++;
    }
    if (count > 2) {
      break;
    }
  }
  if (count === 2) {
    return v;
  }
};

console.log(solution(n));
