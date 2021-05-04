const arr = [3, 2, 6];
const divisor = 10;

//arr을 내림 차순으로 정렬합니다.
//마지막 배열원소가 divisor로 나누어 떨어진다면 result배열에 넣는다.
//만약 result 가 빈배열일경우 [-1]을 return

const solution = (arr, divisor) => {
  let result = [];

  arr.sort((a, b) => b - a);

  while (arr.length !== 0) {
    const a = arr[arr.length - 1];
    if (a % divisor === 0) {
      result.push(a);
    }
    arr.pop();
  }

  return result.length === 0 ? [-1] : result;
};

console.log(solution(arr, divisor));
