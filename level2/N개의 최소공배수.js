const arr = [2, 6, 8, 14];

const solution = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = diex2(result, arr[i]);
  }
  return result;
};

//최대공약수
const diex1 = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const diex2 = (a, b) => {
  return (a * b) / diex1(a, b);
};
