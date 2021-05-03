const d = [1, 3, 2, 5, 4];
const budget = 9;

const solution = (d, budget) => {
  //sort함수로 최대한 많은 부서에 금액을 주기위해서는 오름 차순으로 d 배열을 정렬 해야한다.
  d.sort((a, b) => a - b);
  //while 문은 d배열의 모든 원소의 합이 budget보다 클동안 실행되고, 작아지면 while문이 종료된다
  //pop함수를 통해 d의 마지막 배열원소를 하나씩 줄여나간다.
  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop();
  }

  return d.length;
};

console.log(solution(d, budget));
