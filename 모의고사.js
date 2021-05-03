const answers = [1, 3, 2, 4, 2];

const solution = (answers) => {
  let result = [];
  const supoja1 = [1, 2, 3, 4, 5];
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //000이 3개 채워진 배열을 만든다.
  const point = new Array(3).fill(0);

  for (let i = 0; i < answers.length; i++) {
    //supoja1[i%5] === 12345를 반복한다.
    if (supoja1[i % 5] === answers[i]) {
      point[0]++;
    }

    //supoja2[i%8] === 2,1,2,3,2,4,2,5를 반복한다.
    if (supoja2[i % 8] === answers[i]) {
      point[1]++;
    }

    //supoja3[i%10] ===3, 3, 1, 1, 2, 2, 4, 4, 5, 5를 반복한다.
    if (supoja3[i % 10] === answers[i]) {
      point[2]++;
    }
  }

  //최대값을 지정한다
  let max = Math.max(...point);

  //point 배열 element를 순회하고,  max보다 큰 point가 존재한다면 max에 저장한다
  for (let i = 0; i < point.length; i++) {
    if (point[i] >= max) {
      max = point[i];
      result.push(i + 1);
    }
  }
  return result;
};

console.log(solution(answers));
