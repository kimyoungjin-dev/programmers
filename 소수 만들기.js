//접근 방법: for에 i,j,k를 이용하여 세가지 원소를 더해서만들수있는 숫자를 arr배열에 담고
//소수판별함수(calculator)을 만들고 forEach함수를 이용해 해당숫자가 소수인지 확인한다.

const nums = [1, 2, 3, 4];

const solution = (nums) => {
  let arr = [];
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        arr.push(sum);
      }
    }
  }

  arr.forEach((element) => {
    const doll = caculator(element);
    if (doll) {
      result++;
    }
  });

  return result;
};

const caculator = (element) => {
  let count = 0;
  for (let i = 1; i <= element; i++) {
    if (element % i === 0) {
      count++;
    }
    if (count > 2) {
      break;
    }
  }
  if (count === 2) {
    return element;
  }
};

console.log(solution(nums));
