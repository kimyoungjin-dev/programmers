const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];

const hand = "right";

const solution = (numbers, hand) => {
  let result = "";
  // keyBoard 배열을 만들어준다
  const keyBoard = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };
  //첫 왼손 엄지의 포지션은 [4,1] "*"
  //첫 오른손 엄지의 포지션은 [4,3] "#"

  let positionL = [4, 1];
  let positionR = [4, 3];

  numbers.forEach((number) => {
    //현재 numberLocation의 위치를 잡는다.
    const numberLocation = keyBoard[number];

    // 3,6,9라면 오른손 엄지
    // 1,4,7이라면 왼손 엄지

    if (numberLocation[1] === 3) {
      positionR = numberLocation;
      result += "R";
    } else if (numberLocation[1] === 1) {
      positionL = numberLocation;
      result += "L";
    } else {
      //눌러야할 번호에서 왼손, 오른의 엄지손가락의 거리가 같은경우를 하기 위해서 getDistance 함수를 작성
      const distanceL = getDistance(positionL, numberLocation);
      const distanceR = getDistance(positionR, numberLocation);

      //눌러야할 위치가 왼쪽이 더길다면 오른손으로 누른다.
      //그게아니라면 왼손으로 누른다.

      //만약 눌러야할 거리가 같다면 hand의 rigth 되어있으면 right  // 그게 아니라면 left로 누른다.

      if (distanceL === distanceR) {
        if (hand === "right") {
          positionR = numberLocation;
          result += "R";
        } else if (hand === "left") {
          positionL = numberLocation;
          result += "L";
        }
      } else if (distanceL > distanceR) {
        positionR = numberLocation;
        result += "R";
      } else if (distanceL < distanceR) {
        positionL = numberLocation;
        result += "L";
      }
    }
  });

  return result;
};

const getDistance = (position, number) => {
  return Math.abs(position[0] - number[0]) + Math.abs(position[1] - number[1]);
};

console.log(solution(numbers, hand));
