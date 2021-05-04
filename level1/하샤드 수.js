const arr = 10;

//   sum 을 사용하여 각자리의 자리수를 합한값을 지정한다.
//Number.isInteger을 사용하여, 실수인지 정수인지 판단한다.

const solution = (arr) => {
  const a = arr.toString();
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += +a[i];
  }

  return Number.isInteger(arr / sum) === false ? false : true;
};

console.log(solution(arr));
