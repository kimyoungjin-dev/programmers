const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

const solution = (progresses, speeds) => {
  //progresses 의 배열에서 math.ceil(100- 각각의 값/speeds[index])으로 남은 일을 계산한다.
  const a = progresses.map((v, index) => Math.ceil((100 - v) / speeds[index]));
  //maxDay는 기준이 되야하기 때문에 가장 첫번째 값으로지정한다.
  let maxDay = a[0];

  //결과를 넣을 arr배열의 초기값으로 0을 넣어준다.
  let arr = [0];

  for (let i = 0, j = 0; i < a.length; i++) {
    //for문을 돌면서 만약 maxDay보다 a[i]가 더작다면, 배열의 초기값 0을 그갯수만큼 증가시킨다.
    if (a[i] <= maxDay) {
      arr[j]++;
    } else if (a[i] > maxDay) {
      //만약a[i]가 maxDay보다크다라면 a[i]를 maxDay로 지정해주고, arr의 index를 한자리를 늘린후, +1을 넣어준다.
      maxDay = a[i];
      arr[(j += 1)] = 1;
    }
  }
  return arr;
};
