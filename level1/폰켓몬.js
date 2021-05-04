//접근방법 set함수를 사용하여 nums 배열의 중복값을 지우고, 서로 다른 종류의 폰켓몬을 픽할때,
//length/2 보다 길다면 최대 경우의수를 length/2로 return,
//length보다 짧다면 중복값을 제거한 배열의 length return

const nums = [3, 1, 2, 3];

const solution = (nums) => {
  const clearNum = new Set(nums);
  const array = Array.from(clearNum);
  return array.length > nums.length / 2 ? nums.length / 2 : array.length;
};

console.log(solution(nums));
