/* 
8 kyu !a == a ?!
https://www.codewars.com/kata/59f9796cffe75f9299000025/train/javascript
const a = [];
console.log(a == false);
console.log(!a == false);
console.log(a == !a);
*/

/*
8 kyu Do I get a bonus?
https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`;
}
console.log(bonusTime(9000, true)); //£90000
console.log(bonusTime(9000, false)); //£9000
*/

/*
8 kyu Get the mean of an array
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
getAverage = (m) => Math.floor(m.reduce((a, b) => a + b) / m.length);
console.log(getAverage([17, 15, 8, 8, 15, 11, 10, 9, 10, 12]));
*/

/*
6 kyu Diamond 
https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  const mid = Math.floor(n / 2);
  return (
    Array.from({ length: n })
      .map((_, i) => {
        const m = Math.abs(i - mid);
        return " ".repeat(m) + "*".repeat(n - 2 * m);
      })
      .join("\n") + "\n"
  );
}
console.log(diamond(5));
*/

/*
7 kyu Two to One
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
longest = (s1, s2) => [...new Set([...s1, ...s2])].sort().join("");
longest = (s1, s2) =>
  [...s1, ...s2].sort().reduce((a, c) => (a.includes(c) ? a : a + c));
a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
*/

/*
5 kyu Moving Zeros To The End
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
moveZeros = (arr) =>
  arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
*/

/*
6 kyu Which are in?
https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
a1 = ["arp", "sx", "strong"];
a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
inArray = (a1, a2) => a1.filter((x) => a2.some((y) => y.includes(x))).sort();
console.log(inArray(a1, a2));
*/

// partsSums = (ls) => {
//   fArr = [];
//   while (ls.length > 0) {
//     fArr.push(ls.reduce((a, c) => a + c));
//     ls.splice(0, 1);
//   }
//   fArr.push(0);
//   return fArr;
// };

/*
6 kyu Sums of Parts
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
const partsSums = (ls) => {
  fArr = [];
  let sum = ls.reduce((a, c) => a + c);
  fArr.push(sum);
  ls.forEach((num) => {
    sum -= num;
    fArr.push(sum);
  });
  return fArr;
};
console.log("🚀 ~ partsSums:", partsSums([0, 1, 3, 6, 10]));
*/

/*
7 kyu Two fighters, one winner.
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
function fighter(name, health, damagePerAttack) {
  return {
    name,
    health,
    damagePerAttack,
  };
}
function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;
  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;
    if (defender.health <= 0) {
      return attacker.name;
    }
    [attacker, defender] = [defender, attacker];
  }
}

console.log(declareWinner(fighter("kero", 10, 3), fighter("x", 10, 1), "kero"));
*/

/*
6 kyu Unique In Order
https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
const uniqueInOrder = (iterable) => {
  const ite = Array.isArray(iterable) ? iterable : iterable.split("");
  let lastChar = ite[0];
  const finalArr = [lastChar];
  ite.forEach((e) => {
    if (e !== lastChar) {
      lastChar = e;
      finalArr.push(e);
    }
  });
  return finalArr;
  return [...iterable].filter((a, i) => a !== iterable[i-1]) // not me but good solve
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
*/
