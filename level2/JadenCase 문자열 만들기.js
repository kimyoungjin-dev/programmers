const s = "3people unFollowed me";

const solution = (s) => {
  return s
    .split(" ")
    .map((v) => {
      console.log(v);
      return v
        .split("")
        .map((v, index) => {
          if (index === 0) {
            return v.toUpperCase();
          } else {
            return v.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
};

console.log(solution(s));
