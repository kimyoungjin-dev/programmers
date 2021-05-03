const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

const solution = (participant, completion) => {
  //먼저 문자열을 알파벳 순서에 따라 정렬해준다.
  const a = participant.sort();
  const b = completion.sort();

  let i = 0;
  //일치하지않는 경우까지 i를 증가시킨다.
  while (a[i] === b[i]) {
    i++;
  }

  //participant의 2번째부터 일치하지않는다.
  return participant[i];
};

console.log(solution(participant, completion));
