//접근방법 : moves에서 각각의 원소는 board에서 자리수를 의미 해야하기때문에 , moves에서 각각의 원소에 -1을 해줌.
//각각의 원소마다 실행 시켜주어야하기때문에 forEach를 사용
//for문의 i와 v를 사용하여 board에서 원소를 캐치한다.
//elementPick 함수에서 for문의 i가 v보다 먼저 회전하고, 숫자를 뽑고나면 그자리를 0으로 만들어준다.
//num [4,3,1,1,3,2,4] 이렇게 나온다.
//arr의 배열에 push를 하는데, 만약 arr의 마지막 원소와 element가 겹친다면 arr.pop()을 실행하고 count+2한다.

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = (board, moves) => {
  let arr = [];
  let count = 0;
  const changeMoves = moves.map((v) => v - 1);

  changeMoves.forEach((v) => {
    const element = elementPick(board, v);
    if (element) {
      // console.log(num); 4311324
      if (arr[arr.length - 1] === element) {
        arr.pop();
        count += 2;
      } else {
        arr.push(element);
      }
    }
  });
  return count;
};

const elementPick = (board, v) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][v] !== 0) {
      const pick = board[i][v];
      board[i][v] = 0;
      return pick;
    }
  }
};

console.log(solution(board, moves));
