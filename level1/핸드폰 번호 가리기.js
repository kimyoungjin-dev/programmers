const phone_number = "01033334444";

//substring함수를 사용하여 문자열을 자른다..
//repeat함수를 사용하여 자른길이만큼 반복한다.

const solution = (phone_number) => {
  const a = phone_number.substring(phone_number.length - 4);
  return "*".repeat(phone_number.length - 4) + a;
};

console.log(solution(phone_number));
