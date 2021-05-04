const x = 2;

const n = 5;

// new Array 로 배열을 하나만든다.(배열의 길이는 n) //  x로 채운다.
//각각의 인덱스+1 * x(2)를 해준다.
const solution = (x, n) => {
  let arr = new Array(n).fill(x);
  return arr.map((_, index) => (index + 1) * x);
};

console.log(solution(x, n));
