//접근방법 : 한개씩 유니폼을 부여한다.
//lost 배열과 reserve배열은 uniform 의 배열의 index번호와 같도록 -1을 해준다.
//i가 0개 이면서 , 앞에 사람이 2개를 가지고있는 경우를 나누어서 생각한다.
//i가 0개 이면서 , 뒤에 사람이 2개를 가지고있는 경우를 나누어서 생각한다.
//uniform 의 배열의 element중 0보다 큰 element의 갯수를 return 한다.

const n = 5;

const lost = [2, 4];

const reserve = [1, 3, 5];

const solution = (n, lost, reserve) => {
  const uniform = new Array(n).fill(1);
  const setLost = lost.map((v) => v - 1);
  const setReserve = reserve.map((v) => v - 1);

  for (let i = 0; i < setLost.length; i++) {
    uniform[setLost[i]] -= 1;
  }

  for (let i = 0; i < setReserve.length; i++) {
    uniform[setReserve[i]] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (uniform[i] === 0 && uniform[i + 1] === 2) {
      uniform[i] = 1;
      uniform[i + 1] = 1;
    }

    if (uniform[i] === 0 && uniform[i - 1] === 2) {
      uniform[i] = 1;
      uniform[i - 1] = 1;
    }
  }

  return uniform.filter((v) => v > 0).length;
};

console.log(solution(n, lost, reserve));
