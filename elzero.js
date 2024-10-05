// ignoreNumbers = (str) =>
//   str
//     .split("")
//     .map((c) => c.replace(/[0-9]/g, ""))
//     .join("");
//
// ignoreNumbers = (str) =>
//   str
//     .split("")
//     .filter((c) => !Number(c))
//     .join("");
// console.log(ignoreNumbers("hello123world"));

// const mix = "A23B2ZX";
// const result = mix
//   .split("")
//   .filter((c) => Number(c))
//   .reduce((a, c) => a * c);

// console.log(result);

//Higher Order Functions - Challenge

const myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,1,2,0,z";
let result = myString
  .replace(/[^a-z_]/gi, "")
  .replaceAll("_", " ")
  .slice(1, -1);

console.log("🚀 ~ result:", result);
