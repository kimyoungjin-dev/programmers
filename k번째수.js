const array = [1, 5, 2, 6, 3, 7, 4];

const commands = [
  [2, 5, 3], //commands[0]
  [4, 4, 1], //commands[1]
  [1, 7, 3], //commands[2]
];

const solution = (array, commands) => {
  let result = [];

  //for문을 사용하여 array를 command배열 element에 대해서 자름
  //index번호가 command원소의 index===2와 같은 원소만 각각 result에 push함
  for (let i = 0; i < commands.length; i++) {
    const a = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    a.map((v, index) => {
      if (index === commands[i][2] - 1) {
        result.push(v);
      }
    });
  }

  return result;
};

console.log(solution(array, commands));
