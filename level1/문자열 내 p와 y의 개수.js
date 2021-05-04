const s = "pPoooyY";

const solution = (s) => {
  const a = s.toUpperCase().split("");

  const b = a.filter((v) => v === "P").length;
  const c = a.filter((v) => v === "Y").length;

  return b === c ? true : false;
};

console.log(solution(s));
