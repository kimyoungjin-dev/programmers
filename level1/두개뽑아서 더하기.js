const numbers = [2, 1, 3, 4, 1];

// includes 를 사용해 result 배열에 이미 존재한다면, sum을 result에 push하지않는다
const solution = (numbers) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) {
        result.push(sum);
      }
    }
  }

  return result.sort((a, b) => a - b);
};

console.log(solution(numbers));
