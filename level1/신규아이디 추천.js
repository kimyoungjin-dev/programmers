const new_id = "=.=";

const solution = (new_id) => {
  //id를 소문자로 바꾸고, replace함수를 사용하여 []안의 해당하는 기호를 제외한 나머지를 공백으로 바꾼다.
  //"."가 한번이상 반복되었다면, "."를 한번으로 바꿔준다.
  //"."이 처음과 끝에 각각 위치해있다면 지워준다.
  //빈문자열(/^$/) 이라면 "a"로 대치한다.
  //substring함수를 사용하여, 0부터 15까지의 문자열을 자른다.
  //"."이 끝에 위치한다면 공백으로 바꿔준다. (.을 제거한다는 의미)
  //charAt()과 repeat() 함수를 사용하여, 문자열의 길이가 2이하 일때, 마지막 문자를 문자열의 길이가 3이 될때까지 반복한다.

  const id = new_id
    .toLowerCase()
    .replace(/[^\w.-]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .substring(0, 15)
    .replace(/\.$/g, "");

  //3에서 보면, 3-문자열길이
  //1이다 => 2를 추가
  //2이다 => 1를 추가

  return id.length <= 2 ? id.charAt(id.length - 1).repeat(3 - id.length) : id;
};

console.log(solution(new_id));

// 소문자, 숫자, 빼기, 밑줄 마침표.를 제외한 모든 문자를 제거

//정규식표현 정리*
// \s 공백문자를 의미( 공백문자를 찾는다)
// \w 알파벳, 숫자, 언더바(밑줄)를 포함한다.
// /g: 문자열 전체를 검색한다.
// + : 문자열이 1회 이상 반복되는지 확인

// const a = "youngjin";
// console.log(a.charAt(a.length - 1)); //y
// console.log(a.charAt(1)); //o
