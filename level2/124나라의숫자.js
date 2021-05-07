//접근방법:3의배수 .즉 3,6,9같은 경우에는 나머지가 0이라면,if문을 실행후 result에 저장한다.
//그리고 목값에-1을 하고 while문을 한번 더 회전.
//while문 실행(n:1)=> 나머지: 1 몫 : 0 => 나머지를 result 에 저장한다.
//

const n = 6;
//14
const solution = (n) => {
  let result = "";
  let value = 0; //나머지

  while (n > 0) {
    value = n % 3; //value : 0 // value: 1
    n = Math.floor(n / 3); //mok :2  //mok:0
    if (value === 0) {
      value = 4;
      n = n - 1;
    }
    result = value + result;
  }
  return result;
};

console.log(solution(n));
//ex)

//6 / 3 mok : 2 ||  rest: 0 => ||mok -1 // rest:4r  (14)

//10 /3 mok :3 ||  rest: 1 => ||mok : 3 // rest: 1 (41)
