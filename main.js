/*
8 kyu Convert a string to an array
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/typescript
var stringToArray = (s: string): string[] => s.split(" ");
console.log(stringToArray("hello world"));
*/

// ignoreNumbers = (str) =>
//   str
//     .split("")
//     .map((c) => c.replace(/[0-9]/g, ""))
//     .join("");

ignoreNumbers = (str) =>
  str
    .split("")
    .filter((c) => !Number(c))
    .join("");

console.log(ignoreNumbers("hello123world"));
