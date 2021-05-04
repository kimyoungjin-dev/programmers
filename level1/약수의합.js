const n = 12;

//1에서 부터 n까지의 숫자중 n%i가 0인 값을 체크하고 arr배열에 넣는다.
const solution = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  //배열의 모든원소를 더하고 return한다.
  return arr.reduce((a, b) => a + b, 0);
};

console.log(solution(n));
