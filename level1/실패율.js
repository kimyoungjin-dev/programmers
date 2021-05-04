const N = 5;

const stages = [2, 1, 2, 6, 2, 4, 3, 3]; //8개

function solution(N, stages) {
  let len = stages.length;
  //[0,0,0,0,0]의 배열을 만든다.
  const eachStage = Array(N).fill(0);
  //방금만든 배열에 stages의 원소의 갯수 더해서 넣는다.
  stages.forEach((v) => {
    if (N != v - 1) eachStage[v - 1]++;
  });
  //failedRate변수선언
  const failedRate = eachStage.map((v, i) => {
    let param = {
      //percentage: stages의 길이가 0이라면 0 , 그게아니라면, [1,3,2,1,0]에 대해서 stage.length로 나눈다.
      percentage: len == 0 ? 0 : v / len,
      //num은 state를 말한다.
      num: i + 1,
    };
    //stage.length는 v만큼 차감된다.
    len = len - v;
    return param;
  });
  //percentage가 동일하다면 ? num의 내림차순 정렬을 하고, 그게아니라면 || percentage는 높은순에서 => 낮은순으로 정렬
  failedRate.sort((a, b) =>
    a.percentage === b.percentage ? a.num - b.num : b.percentage - a.percentage
  );

  return failedRate.map((v) => v.num);
}
console.log(solution(N, stages));

// 1단계 실패율 : 1/8
// 2단계 실패율 : 3/7
// 3단계 실패율 : 2/4
// 4단계 실패율 : 1/2
// 5단계 실패율 : 0/1
// 실패율의 순서 : 높은순>[3,4,2,1,5]>낮은순
