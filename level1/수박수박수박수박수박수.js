const n = 4;

//repeat 함수로 "수박"을 반복하고, substring으로 0,n까지 잘라준다.
const solution = (n) => {
  const a = "수박";

  return a.repeat(n).substring(0, n);
};

console.log(solution(n));
