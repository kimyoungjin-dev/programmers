const arr = [10];

//스프레드 연산자와 math.min을 활용해서 arr배열에서 가장작은 수를 뺀 나머지를 빼준다.
const solution = (arr) => {
  const a = arr.filter((v) => Math.min(...arr) !== v);

  return a.length === 0 ? [-1] : a;
};

console.log(solution(arr));
