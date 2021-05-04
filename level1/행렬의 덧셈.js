const arr1 = [
  [1, 2], //arr1[0]
  [2, 3], //arr1[1]
];

const arr2 = [
  [3, 4], //arr2[0]
  [5, 6], //arr2[1]
];

// index = 배열의 index번호를 의미하고
// i = 배열안의 원소의 index번호를 의미한다.

const solution = (arr1, arr2) => {
  return arr1.map((item, index) => item.map((v, i) => v + arr2[index][i]));
};

console.log(solution(arr1, arr2));
