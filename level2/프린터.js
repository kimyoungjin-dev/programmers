const priorities = [2, 1, 3, 2];
const locations = 2;

const solution = (priorities, locations) => {
  let answer = 0;
  //while 문은 priorities 배열의 길이가 0이 아닐때 실행한다. (length:0이면 종료)
  while (priorities.length !== 0) {
    //priorities로부터 첫번째 배열을 뽑습니다.
    let pickNum = priorities.shift();
    // priorities의 배열안의 숫자중 하나가 뽑은 숫자보다 크다면 다시 priorities배열 뒤에 넣는다.
    if (priorities.filter((v) => v > pickNum).length > 0) {
      priorities.push(pickNum);
      //뽑은 숫자가 배열안의 숫자들보다 크다라면, 1개를 인쇄한다.
      //만약 인쇄하는 그숫자가 locations === 0 이라면 현재 인쇄된갯수를 return한다.
    } else {
      answer++;
      if (locations === 0) {
        return answer;
      }
    }

    //위 과정을 거치고 난뒤에 locations 를 -1 를 해주고,
    locations -= 1;

    //만약 locations 가 -1 이라면, location 의 index번호는 priorities.length-1이 된다. (마지막 원소의 index번호)
    if (locations === -1) {
      locations = priorities.length - 1;
    }
  }

  return count;
};
