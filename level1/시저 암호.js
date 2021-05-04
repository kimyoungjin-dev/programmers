const s = "ABz";
const n = 1;

const solution = (s, n) => {
  return s
    .split("")
    .map((v) => {
      //만약 빈문자열은 빈문자열로 return한다.
      if (v === " ") {
        return v;
      }

      //v를 대문자로 전환 => +n 만큼했을때 90이 넘는지 넘지않는지 확인한다.
      const a = v.toUpperCase().charCodeAt(0) + n;
      if (a > 90) {
        // console.log(v); z
        return String.fromCharCode(v.charCodeAt(0) + n - 26);
      } else {
        // console.log(v); AB
        return String.fromCharCode(v.charCodeAt(0) + n);
      }
    })
    .join("");
};

console.log(solution(s, n));

// console.log("A".charCodeAt()); // 65
// console.log("Z".charCodeAt()); // 90
// console.log("a".charCodeAt()); // 97
// console.log("z".charCodeAt()); // 122
