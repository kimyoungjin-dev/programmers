const arr = [1, 1, 3, 3, 0, 1, 1];

//filter함수를 사용하여 v가 arr의 index+1과 다른 값을 추출한다.

const solution = (arr) => {
  return arr.filter((v, index) => v !== arr[index + 1]);
};

console.log(solution(arr));
