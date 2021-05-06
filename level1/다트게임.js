const dartResult = "1S2D*3T";

// S = 1의 제곱
// D = 2의 제곱
// T = 3의 제곱

//기본형태
// 기호는 알파벳 뒤에온다
// 2S#
// 12D*

//score
// const dartResult = "1S 2D* 3T";
// const dartResult = "1D 2S# 10S";

const solution = (dartResult) => {
  var dr = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g);
  let score = [];
  for (let i = 0; i < 3; i++) {
    var num = dr[i].match(/\d{1,2}/g);
    var ch = dr[i].match(/[SDT]{1}/g);

    var kiho = dr[i].match(/[*|#]/g);

    if (ch == "S") {
      num = parseInt(num);
    } else if (ch == "D") {
      num = num * num;
    } else if (ch == "T") {
      num = num * num * num;
    }

    //"*"이라면 num 에 곱하기2를 하고, 첫번째 num이 아닌경우에는 앞에 num까지 *2를 해준다.
    //"#"이라면 -1을 곱한다..

    if (kiho == "*") {
      num = num * 2;
      if (i !== 0) {
        score[i - 1] = score[i - 1] * 2;
      }
    } else if (kiho == "#") {
      num = num * -1;
    }

    score.push(num);
  }
  return score.reduce((a, b) => a + b, 0);
};

//{1}을 사용하는이유는?
//SDT중에서 하나만 일치하는걸 찾아준다는 의미인지
