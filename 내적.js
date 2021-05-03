const a = [1, 2, 3, 4];

const b = [-3, -1, 0, 2];

const solution = (a, b) => {
  let result = [];
  //a[i]*b[i] 값을 result 배열에 하나하나 저장한다.
  for (let i = 0; i < a.length; i++) {
    result.push(a[i] * b[i]);
  }
  //result 배열안의 값을 모두더해준다.
  return result.reduce((a, b) => a + b, 0);
};

console.log(solution(a, b));
