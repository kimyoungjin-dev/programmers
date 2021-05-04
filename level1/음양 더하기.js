const absolutes = [4, 7, 12];
const signs = [true, false, true];

const solution = (absolutes, signs) => {
  let result = [];

  //만약 sign[i]가 true라면 양수 false 라면 음수로 resultf 배열에 저장한다.
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      result.push(absolutes[i]);
    } else {
      result.push(-absolutes[i]);
    }
  }

  return result.reduce((a, b) => a + b, 0);
};

console.log(solution(absolutes, signs));
