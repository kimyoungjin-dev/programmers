const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

const solution = (lottos, win_nums) => {
  let result = [];

  let arr = [6, 5, 4, 3, 2, 1];

  //6개를 맞춘경우 1등 index+1
  //5개를 맞춘경우 2등 index+1
  //4개를 맞춘경우 3등 index+1
  //3개를 맞춘경우 4등 index+1
  //2개를 맞춘경우 5등 index+1
  //1개를 맞춘경우 6등 index+1로또의 최고 순위와 최저 순위

  const a = lottos.filter((v) => win_nums.includes(v)).length; // 기본상태에서 포함되있는 갯수
  const b = lottos.filter((v) => v === 0).length; //lottos배열의 0의 갯수

  //두개를 더한다. = result 의 1번째 element
  result.push(a + b);
  //result 의 2번째 elment
  result.push(a);

  //ex)
  //4개를 맞추면 3등 indexOf활용
  //2개를 맞추면 5등 indexOf활용

  //indexOf 함수 사용으로 arr배열의 index자리를 찾고  그자리값에 +1 을 해주어야 순위를 1순위부터 설정할수있다.
  return result.map((v) => (v === 0 ? (v = 6) : arr.indexOf(v) + 1));
};

console.log(solution(lottos, win_nums));
