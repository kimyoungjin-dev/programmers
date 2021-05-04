const a = 3;

const b = 5;
ㅏㄴ다.
//문제에 주어진 대로 a>b 인경우 a<b인경우를 나누어서 생각ㅎ

const solution = (a, b) => {
  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  }

  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }

  return sum;
};

console.log(solution(a, b));
