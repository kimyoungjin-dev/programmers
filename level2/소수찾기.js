const numbers = "011";

const solution = (numbers) => {
  // setObj 배열 생성
  const setObj = [];
  const numbersSplit = numbers.split("");

  const splitFn = (arr, str) => {
    //먼저 str의 초기상태는 빈문자열 => 첫번째 if문이 실행됨
    //각각의 원소마다 splice()를 사용하여, 잘라서 str 뒤에 붙여줌
    //arr.length 가 0이 되고, 2번째 if문이 실행된후, for문이 두번째 회전을함.
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let temp = [...arr];
        const splicetemp = temp.splice(i, 1); //splicetemp:자른값
        splitFn(temp, str + splicetemp); //temp:자르고 남은값
      }
    }

    //setObj가 정수로 바꾼 str을 포함하고있지않다면
    //push를 이용하여 setObj 안에 넣음
    if (str.length > 0) {
      let parseIntStr = parseInt(str);
      if (setObj.filter((v) => v !== parseIntStr)) {
        check(parseIntStr) && setObj.push(parseIntStr);
      }
    }
  };

  //소수인지 판별 함수
  const check = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      } else if (count > 2) {
        break;
      }
    }
    if (count === 2 && !setObj.includes(num)) {
      setObj.push(num);
    }
  };

  //splitFn는 초기에  첫번째인자로 numbers를 split 한 배열과, 두번째인자로 빈문자열을 갖는다.
  splitFn(numbersSplit, "");

  return setObj.length;
};

console.log(solution(numbers));
