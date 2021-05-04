const a = 5;
const b = 24;

// day.getDay()를 활용하여 요일 번호를 추출하고 array에 인덱스번호를 붙여 return
//ex) 0이라면 일요일 1이라면 월요일을 의미한다.

const solution = (a, b) => {
  const array = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(`2016 ${a} ${b}`);
  const date = day.getDay();
  return array[date];
};

console.log(solution(a, b));
