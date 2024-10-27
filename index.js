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

/*
6 kyu Sort the odd
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
sortArray = (array) => {
  oddArr = array.filter((a) => a % 2 !== 0).sort((a, b) => a - b);
  array.map((a, i) => a % 2 !== 0 && (array[i] = oddArr.shift()));
  return array;
};
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 13, 0]));
*/

/*
7 kyu Converting 12-hour time to 24-hour time
https://www.codewars.com/kata/59b0a6da44a4b7080300008a
to24hourtime = (hour, minute, period) => {
  formattedNum = (num) => String(num).padStart(2, "0");

  if (period === "am" && hour === 12) {
    hour = 0;
  } else if (period === "pm" && hour !== 12) {
    hour += 12;
  }

  return `${formattedNum(hour)}${formattedNum(minute)}`;
};

console.log(to24hourtime(12, 0, "am"));
*/

/*
5 kyu A Chain adding function
https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
add = (n) => {
  return (x) => add(n + x);
};
console.log(add(5)(10)(15)(20));
*/

/*
5 kyu Simple Pig Latin
https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
const pigIt = (str) => {
  return str
    .split(" ")
    .map((a) => {
      return /^[a-zA-Z]+$/.test(a) ? a.slice(1) + a[0] + "ay" : a;
    })
    .join(" ");
};

console.log(pigIt("Pig latin is cool"));
*/

/*
5 kyu ROT13
https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
rot13 = (str) => {
  return str.replace(/[a-zA-Z]/g, (c) => {
    return String.fromCharCode(
      c.charCodeAt() > 109 ? c.charCodeAt() - 13 : c.charCodeAt() + 13
    );
  });
};
console.log(rot13("Guvf vf zl svefg EBG13 rkprepvfr!"));
*/

/*
8 kyu Total amount of points
https://www.codewars.com/kata/5bb904724c47249b10000131/solutions/javascript
points = (games) => {
  return games.reduce(
    (a, c) => a + (c[0] > c[2] ? 3 : c[0] === c[2] ? 1 : 0),
    0
  );
};
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
*/

/*
8 kyu Reversed Words
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(
  reverseWords("The greatest victory is that which requires no battle")
);
*/

/*
8 kyu Abbreviate a Two Word Name
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
abbrevName = (name) =>
  name
    .split(" ")
    .map((c) => c[0].toUpperCase())
    .join(".");
console.log(abbrevName("Sam Harris"));
*/

/*
5 kyu Bit calculator
https://www.codewars.com/kata/52ece9de44751a64dc0001d9/train/javascript
converter = (num) =>
  Number(
    num
      .split("")
      .reverse()
      .map((n, i) => n * 2 ** i) //https://media.geeksforgeeks.org/wp-content/uploads/20211220191513/binary.PNG
      .reduce((a, c) => a + c)
  );
calculate = (a, b) => converter(a) + converter(b);
console.log(calculate("11", "10"));

// else solve calculate = (m,n) => Number(`0b${m}`) + Number(`0b${n}`) //0b for binary 0x for hex 0o for octal
*/

/*
6 kyu One Line : Bit Calculator (Your code length should be less than 39 characters)
https://www.codewars.com/kata/5afa9348db615d3cce00187e/train/javascript
calculate=(a,b)=>+`0b${a}` + + `0b${b}`;
console.log(calculate("11", "10"));
*/

/*
5 kyu Calculating with Functions
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
zero = (fn) => {
  return fn ? fn(0) : 0;
};
one = (fn) => {
  return fn ? fn(1) : 1;
};
two = (fn) => {
  return fn ? fn(2) : 2;
};
three = (fn) => {
  return fn ? fn(3) : 3;
};
four = (fn) => {
  return fn ? fn(4) : 4;
};
five = (fn) => {
  return fn ? fn(5) : 5;
};
six = (fn) => {
  return fn ? fn(6) : 6;
};
seven = (fn) => {
  return fn ? fn(7) : 7;
};
eight = (fn) => {
  return fn ? fn(8) : 8;
};
nine = (fn) => {
  return fn ? fn(9) : 9;
};

function plus(r) {
  return function (l) {
    return l + r;
  };
}

function minus(r) {
  return function (l) {
    return l - r;
  };
}

function times(r) {
  return function (l) {
    return l * r;
  };
}

function dividedBy(r) {
  return function (l) {
    return Math.floor(l / r);
  };
}
console.log(seven(times(five()))); //35
console.log(eight(minus(three()))); //5
*/

/*
7 kyu Geometry Basics: Distance between points in 3D
https://www.codewars.com/kata/58dceee2c9613aacb40000b9/train/javascript
distanceBetweenPoints = (a, b) =>
  Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2);
console.log(distanceBetweenPoints({ x: 1, y: 3, z: 6 }, { x: 4, y: 3, z: 2 }));
*/

/*
7 kyu No oddities here
https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/python
noOdds = (values) => values.filter((v) => v % 2 == 0);
*/

/*
8 kyu Geometry Basics: Distance between points in 2D
https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
distanceBetweenPoints=(a, b)=> Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2);
console.log(distanceBetweenPoints({ x: 1, y: 3 }, { x: 4, y: 3 }));
*/

/*
8 kyu Stringy Strings
https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
stringy = (size) =>
  size % 2 === 0 ? "10".repeat(size / 2) : "10".repeat((size - 1) / 2) + "1";
console.log(stringy(3));
*/

/*
7 kyu Move 10
https://www.codewars.com/kata/57cf50a7eca2603de0000090/solutions/javascript
function moveTen(s) {
  return s.replace(/[a-z]/g, (c) =>
    String.fromCharCode(
      c.charCodeAt() + 10 > 122 ? c.charCodeAt() - 10 : c.charCodeAt() + 10 //122 is (z) in ascii
    )
  );
}

console.log(moveTen("kero"));
*/

/*
6 kyu The Vowel Code
https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
const encodeDecode = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5",
};

const encode = (string) =>
  string
    .split("")
    .map((x) => (x in encodeDecode ? encodeDecode[x] : x))
    .join("");

const decode = (string) => {
  const reverseEncodeDecode = Object.fromEntries(
    Object.entries(encodeDecode).map(([k, v]) => [v, k])
  );

  return string
    .split("")
    .map((x) => (x in reverseEncodeDecode ? reverseEncodeDecode[x] : x))
    .join("");
};

console.log(encode("hello"));
console.log(decode("h2ll4"));
*/

/*
8 kyu Simple Comparison?
https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript
const add = (a, b) => a == b;
console.log(add(1, "1"));
*/

/*
7 kyu Elevator Distance
https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript
elevatorDistance = (floors) => {
  return floors.reduce((a, c, i, arr) => {
    if (i == 0) return a;
    return (a += Math.abs(c - arr[i - 1]));
  }, 0);
};
console.log(elevatorDistance([7, 1, 7, 1]));
*/

/*
8 kyu Calculate BMI
https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
const bmi = (weight, height) => {
  const bmi = weight / height ** 2;
  return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
};
*/

/*
5 kyu Count IP Addresses
https://www.codewars.com/kata/526989a41034285187000de4/train/javascript
ipsBetween = (start, end) => {
  toNumeric = (ip) => ip.split(".").reduce((a, c) => a * 256 + +c);
  return toNumeric(end) - toNumeric(start);
};

console.log(ipsBetween("10.0.0.10", "10.0.0.50"));
*/
