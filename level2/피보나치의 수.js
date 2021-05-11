const n = 4;

const solution = (n) => {
  const memo = [];

  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }

  return memo[n];
};

console.log(solution(n));

//i가 2일때
//memo[2] = (memo[1] + memo[0]); => 1

//i가 3일때
//memo[3] = (memo[2] + memo[1]); =>  1 + 1  => 2

//i가 4일때
//memo[4] = (memo[3] + memo[2]); => 2 + 1 => 3

//i가 5일때
//memo[5] = (memo[4] + memo[3]); => 3 + 2 => 5
