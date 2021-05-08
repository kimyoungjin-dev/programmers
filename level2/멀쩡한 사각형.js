const W = 8;

const H = 12;

const solution = (W, H) => {
  //최대공약수 구하는 공식
  let num = W > H ? W : H;
  let max; //최대공약수 4

  for (let i = 1; i <= num; i++) {
    if (W % i === 0 && H % i === 0) {
      max = i;
    }
  }
  const a = W + H - max; //w와h를 더하고 두개의 최대공약수를 빼준다. 16

  return W * H - a; //원래 96 - 선이 지나는 사각형의 갯수(16)
};

console.log(solution(W, H));

// 가로 + 세로 - 최대공약수;

// 3*1일경우 3개
// 3*2일경우 4개
// 3*3일경우 3개
