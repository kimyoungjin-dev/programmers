const name = "JEROEN";

// A ~ Z : 65 ~ 90

//알파벳은 : 총 26개  "ABCDEFGHIJKLM N OPQRSTUVWXYZ"
// N을 기준으로  13개 // 12개로 나누어준다.

// 만약 N이전의 알파벳이라면 해당알파벳 - 65
// 만약 N이후의 알파벳이라면 91 - 해당알파벳을 해준다. (예를 들어 "Y(89)"는 "A(1)"로부터 뒤로 2번이동했기때문이다.)

const solution = (name) => {
  const a = [...name].map((v) => v.charCodeAt(0));
  const b = a.map((v) => {
    if (v <= 78) return v - 65;
    if (v > 78) return 91 - v;
  });

  //상하의 조이스틱 움직인 total 값
  const totalUpDowonCount = b.reduce((a, b) => a + b, 0);

  //좌우로 움직인 값 계산 하기
  //while을 한번 회전 할때마다 length+1이 된다. 해당 index옆에있는 index가 0일경우 계속 length는 증가한다.
  const leftFn = (arr, index) => {
    let length = 0;
    //만약 왼쪽 맨끝에있는 경우에는 배열의 끝index으로 이동하고 그게아니라면 index에 -1을 계속 해준다.
    while (arr[index] === 0) {
      index = index === 0 ? arr.length - 1 : index - 1; //index -1 임에 주의한다(-1(x))
      length++;
    }
    return [length, index];
  };

  const rightFn = (arr, index) => {
    let length = 0;
    //만약 오른 맨끝에있는 경우에는 배열의 맨앞index으로 이동하고 그게아니라면 index에 +1을 계속 해준다.
    while (arr[index] === 0) {
      index = index < arr.length - 1 ? index + 1 : 0;
      length++;
    }

    return [length, index];
  };

  b[0] = 0; //right 와 left 함수의 while의 첫시작을 true로 만들기위함
  let index = 0;
  let shortLength = 0;

  while (b.some((v) => v !== 0)) {
    const [leftLength, leftIndex] = leftFn(b, index);
    const [rightLength, rightIndex] = rightFn(b, index);
    //기본적으로 right로 이동하고, 만약 rightLength가 더길다면 leftLength를 선택한다.
    shortLength += leftLength < rightLength ? leftLength : rightLength;
    //기본적으로 right로 이동하고, 만약 rightLength가 더길다면 leftIndex를 선택한다.
    index = leftLength < rightLength ? leftIndex : rightIndex;
    // while문의 마지막에 배열원소의 값을 0으로 만들어준다
    b[index] = 0;
  }
  //모든 움직임 거리의 합을 return해준다.
  return shortLength + totalUpDowonCount;
};
console.log(solution(name));
