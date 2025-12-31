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

/*
7 kyu Alternate capitalization
https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
capitalize = (s) => [
  s
    .split("")
    .map((c, i) => (i % 2 ? c : c.toUpperCase()))
    .join(""),
  s
    .split("")
    .map((c, i) => (i % 2 ? c.toUpperCase() : c))
    .join(""),
];

console.log(capitalize("abcdef"));
*/

/*
8 kyu Find the position!
https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
position = (c) => `Position of alphabet: ${c.charCodeAt() - 96}`;

console.log(position("z"));
*/

/*
8 kyu Double Char
https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
doubleChar = (str) =>
  str
    .split("")
    .map((c) => c + c)
    .join("");
*/

/*
5 kyu Digitwise addition
https://www.codewars.com/kata/663e0eccecb2d0a12da51f84/train/javascript
digitwiseAddition = (n, k) => {
  let x = n;
  for (let i = 0; i < k; i++) {
    x = [...x.toString()].map((e) => +e + 1).join("");
  }
  return x.length;
};

console.log(digitwiseAddition(9899, 3));
*/

/*
4 kyu Most frequently used words in a text
https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

  topThreeWords = (text) =>
    Object.entries(
      (text.toLowerCase().match(/[a-z]+[a-z']* /g) || [])
        .reduce((a, c) => {
          a[c] = (a[c] ?? 0) + 1;
          return a;
        }, {})
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map((c) => c[0]);
  
  
  console.log(topThreeWords(` //wont won't won't`));
*/

/*
8 kyu Convert a Number to a String!
https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

numberToString=(num) => ''+num
*/

/*
6 kyu Multiples of 3 or 5
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
solution = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum > 0 ? sum : 0;

  -OR-

  solution = (number) => number < 0 ? 0 :
    Array.from({ length: number - 1 }, (_, i) => i + 1)
      .filter((i) => i % 3 == 0 || i % 5 == 0)
      .reduce((a, c) => a + c, 0);
  
  console.log(solution(10));
};
*/

/*
6 kyu Bit Counting
https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

countBits = (n) =>
  n
    .toString(2)
    .split("")
    .reduce((a, c) => (c === "1" ? a + 1 : a), 0);

console.log(countBits(40));
*/

/*
7 kyu Bubblesort Once
https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript
bubblesortOnce = (a) =>
  a.reduce((a, c, i, arr) => {
    if (c > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return a;
  }, a);

  but this is accepted solve
  function bubblesortOnce(a) {
  const newArr = [...a];
  return newArr.reduce((acc, curr, i) => {
    if (newArr[i] > newArr[i + 1]) {
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
    }
    return newArr;
  }, newArr);
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));
*/

/*
7 kyu Sum of two lowest positive integers
https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
*/

/*
8 kyu Remove String Spaces
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

noSpace = x => x.replace(/\s/g, "")
console.log(noSpace("test dsikofjdskl jklhjkdhjj kdsf"));
*/

/*
8 kyu Convert number to reversed array of digits

digitize = (n) => String(n).split("").map(Number).reverse();

console.log(digitize(35231));
*/

/*
8 kyu Removing Elements
removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);
console.log(
  removeEveryOther([
    1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1,
    2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2,
    3, 4, 5, 6,
  ])
);
*/

/*
7 kyu Oh dear God! Is it bugged?

isItBugged = (c) => /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/.test(c);
console.log(isItBugged("01-09-2016 01:20"));
console.log(isItBugged("01_09_2016 01:20"));
*/

/*
8 kyu Sum Arrays
sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
sum = (n) => n.reduce((a, b) => a + b, 0);
*/

/*
8 kyu The 'if' function
https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript
_if = (bool, func1, func2) => (bool ? func1() : func2());
 */

/*
8 kyu Who ate the cookie?
https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

cookie = (x) => `Who ate the last cookie? It was ${ typeof x === "string" ? "Zach" : typeof x === "number" ? "Monica" : "dog"}!`

another solve
function cookie(x){
  return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
}
*/

/*
8 kyu Plural
https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
plural=n=>n!=1
*/

/*
7 kyu Don't give me five!
https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

dontGiveMeFive = (start, end) => {
  let count = 0;
  for (let i = start - 1; i < end; i++) {
    if (!String(i).includes("5")) ++count;
  }
  return count;
};

another solve

dontGiveMeFive = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start).reduce(
    (a, b) => (!String(b).includes("5") ? a + 1 : a),
    0
  );
};

console.log(dontGiveMeFive(4, 17));
*/

/*
6 kyu Grouped by commas
https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript
groupByCommas = (n) =>
  String(n)
    .split("")
    .reverse()
    .map((e, i) => (i > 0 && i % 3 === 0 ? e + "," : e))
    .reverse()
    .join("");

    another solve
    
    groupByCommas = (n) => n.toLocaleString('en-US');
    
    console.log(groupByCommas(1));
    console.log(groupByCommas(12));
    console.log(groupByCommas(123));
    console.log(groupByCommas(12345));
    console.log(groupByCommas(123456));
    console.log(groupByCommas(1234567));
    console.log(groupByCommas(12345678));
    console.log(groupByCommas(123456789));
    console.log(groupByCommas(1234567890));
    */

/*
8 kyu Is it a palindrome?
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

isPalindrome=x=>x.split("").reverse().join("").toLowerCase()==x.toLowerCase()
console.log(isPalindrome("abba"));
*/

/*
6 kyu CamelCase Method
https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
String.prototype.camelCase = function () {
  return this.split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
};
console.log(camelCase("test case"));
*/

/*
8 kyu Sum without highest and lowest number
https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((x, y) => x + y, 0)
    : 0;
console.log(sumArray([6, 2, 1, 8, 10]));
*/

/*
8 kyu
Filter out the geese
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

x = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
gooseFilter = (b) => b.filter((b) => !x.includes(b))

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
*/

/*
8 kyu
MakeUpperCase
https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
makeUpperCase=s=>s.toUpperCase()

console.log(makeUpperCase("test"));
*/

/*
8 kyu Quarter of the year
quarterOf = (m) => Math.ceil(m / 3);

console.log(quarterOf(8));
*/

/*
8 kyu Rock Paper Scissors!
https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

rps = (p1, p2) =>
  p1 === p2
    ? 'Draw!'
    : p1 === 'scissors' && p2 === 'paper' ||
      p1 === 'rock' && p2 === 'scissors' ||
      p1 === 'paper' && p2 === 'rock'
    ? 'Player 1 won!'
    : 'Player 2 won!'
*/

/*
7 kyu Odds-Index
https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/javascript
oddBall = (arr) => arr.includes(arr.findIndex((e) => e === "odd"));
console.log(
  oddBall([
    "even",
    4,
    "even",
    7,
    "even",
    55,
    "even",
    6,
    "even",
    10,
    "odd",
    3,
    "even",
  ])
);
*/

/*
5 kyu First non-repeating character
firstNonRepeatingLetter = (s) => {
  const result = s
    .toLowerCase()
    .split("")
    .filter(
      (e, _, arr) =>
        arr.findIndex((x) => x === e) === arr.findLastIndex((x) => x === e)
    )[0];

  return result ?? "";
};

console.log(firstNonRepeatingLetter("sTtrereSS"));

firstNonRepeatingLetter = (s) =>
  s
    .split("")
    .filter(
      (e, _, arr) =>
        arr.findIndex((x) => x.toLowerCase() === e.toLowerCase()) ===
        arr.findLastIndex((x) => x.toLowerCase() === e.toLowerCase())
    )[0] ?? "";

console.log(firstNonRepeatingLetter("sTereSS"));
*/

/*
5 kyu Swap Node Pairs In Linked List
https://www.codewars.com/kata/59c6f43c2963ecf6bf002252/train/javascript

swapPairs = (head) => {
  return head.map((e, i, arr) => {
    if ((i + 1) % 2 != 0 && i + 1 < arr.length) {
      return arr[i + 1];
    }
    if ((i + 1) % 2 == 0) {
      return arr[i - 1];
    }
    return e;
  });
};

console.log("🚀 ~ swapPairs:", swapPairs(["a", "b", "c", "d"]));
console.log("🚀 ~ swapPairs:", swapPairs(["a", "b", "c"]));
console.log("🚀 ~ swapPairs:", swapPairs(["a", "b"]));
console.log("🚀 ~ swapPairs:", swapPairs(["a"]));
*/

/*
6 kyu Replace With Alphabet Position
https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

alphabetPosition = (t) => {
  const FT = t.replace(/[^a-z]/gi, "").toLowerCase();
  return FT.split("")
    .map((_, i) => FT.charCodeAt(i) - 96)
    .join(" ");
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
*/

/*
8 kyu Be Concise I - The Ternary Operator
https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

describeAge=a=>a<=12?"You're a(n) kid":a>=13&&a<=17?"You're a(n) teenager":a>=18&&a<=64?"You're a(n) adult":"You're a(n) elderly"
*/

/*
8 kyu Swap Values
https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

swapValues = (args) => {
  temp = args[0];
  args[0] = args[1];
  args[1] = temp;
};

another solve

function swapValues(arr) {
    return arr.reverse();
}
*/

/*
6 kyu Getting MAD
https://www.codewars.com/kata/593a061b942a27ac940000a7/train/javascript

gettingMad = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newArr.push(Math.abs(arr[i] - arr[j]));
    }
  }
  return Math.min(...newArr);
};

another solve

gettingMad = (arr) =>
  Math.min(
    ...arr.flatMap((v, i) => arr.slice(i + 1).map((x) => Math.abs(v - x)))
  );

console.log(gettingMad([-10, 0, -3, 1]));
*/

/*
8 kyu Opposite number
https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

opposite = (n) => -n;
*/

/*
6 kyu Break camelCase
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

solution = (string) => {
  reg = /[A-Z]/g;
  charArr = string.match(reg);

  return string
    .split(reg)
    .map((c, i) => {
      if (i === 0) return c;
      return ` ${charArr[i - 1]}${c}`;
    })
    .join("");
};

another solve

solution = s => s.replace(/([A-Z])/g, " $1")

console.log(solution("camelCasingTest"));
console.log(solution("camel"));
console.log(solution(""));
*/

/*
7 kyu Most digits
https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

const findLongest = (arr) => {
  return arr.reduce(
    (max, num) => (num.toString().length > max.toString().length ? num : max),
    arr[0]
  );
};

console.log(findLongest([49780, 12936]));
console.log(findLongest([1, 10, 100]));
*/

/*
7 kyu Vowel Count
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

getCount = (str) => str.length - str.split(/a|e|i|o|u/g).join("").length;

another solve
getCount = (str.match(/[aeiou]/ig)||[]).length

console.log(getCount("abracadabra"));
*/

/*
7 kyu KISS - Keep It Simple Stupid
https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/solutions/javascript

isKiss = (words) => {
  wordsArr = words.split(" ");

  return Math.max(...wordsArr.map((e) => e.length)) > wordsArr.length
    ? "Keep It Simple Stupid"
    : "Good work Joe!";
};

console.log(isKiss("hi to me"));
console.log(isKiss("hello to me"));
*/

/*
7 kyu Javascript Mathematician
https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript

const calculate =
  (...a) =>
  (...b) =>
    [...a, ...b].reduce((x, y) => x + y, 0);

console.log(calculate(1, 2)(1));
*/

/*
8 kyu Flick Switch
https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

flickSwitch = (arr) => {
  currentIndicator = true;
  return arr.map((e) => {
    if (e === "flick") {
      currentIndicator = !currentIndicator;
    }
    return currentIndicator;
  });
};

console.log(
  flickSwitch(["codewars", "flick", "code", "wars", "flick", "test"])
);
*/

/*
7 kyu Highest and Lowest
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

highAndLow = (n) => {
  z = n.split(" ");

  return `${Math.max(...z)} ${Math.min(...z)}`;
};

console.log(highAndLow("1 2 3 4 5"));
*/

/*
8 kyu Check same case
https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

sameCase = (a, b) => {
  return /[^a-zA-Z]/.test(a + b)
    ? -1
    : /^([a-z]{2}|[A-Z]{2})$/.test(a + b)
    ? 1
    : 0;
};

console.log(sameCase("@", "%"));
*/

/*
8 kyu Closest elevator
https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

elevator = (l, r, c) => {
  cl = Math.abs(c - l);
  cr = Math.abs(c - r);
  return cl == cr || cl > cr ? "right" : "left";
};
*/

/*
8 kyu Sum of positive
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

positiveSum = (arr) => arr.reduce((sum, n) => (n > 0 ? sum + n : sum), 0);
console.log("🚀 ~ positiveSum:", positiveSum([1, 2, 3, 4, -5]));
*/

/*
7 kyu Elapsed Seconds
https://www.codewars.com/kata/517b25a48557c200b800000c/train/javascript

elapsedSeconds = (start, finish) => (finish - start) / 1000;

console.log(
  elapsedSeconds(new Date(2013, 1, 1, 0, 0, 1), new Date(2013, 1, 1, 0, 0, 2))
);
*/

/*
7 kyu Only one
https://www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript

onlyOne = (...a) => a.reduce((s, c) => s + c) == 1;

console.log(onlyOne(true, false, true));

another solve 
function onlyOne(...flags) {
    return flags.filter(Boolean).length === 1;
}
*/

/*
8 kyu Sentence Smash
https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

smash = (w) => w.join(" ");
*/

/*
8 kyu Multiplication table for number
https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

multiTable = (n) =>
  Array.from({ length: 10 })
    .map((_, i) => `${i + 1} * ${n} = ${(i + 1) * n}`)
    .join("\n");
console.log("🚀 ~ multiTable:", multiTable(5));
*/

/*
7 kyu Summing a number's digits
https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript 

const sumDigits = n =>
  String(Math.abs(n))
    .split("")
    .reduce((s, d) => s + +d, 0);
    
console.log("🚀 ~ sumDigits:", sumDigits(10));
*/

/*
8 kyu Grasshopper - Basic Function Fixer
https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript

function addFive(num) {
  var total = num + 5
  return num
}

solve : addFive=(n)=> n+5
*/

/*
7 kyu Character Counter
https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
const validateWord = (s) => {
  const freq = {};

  for (const c of s.toLowerCase()) {
    freq[c] = (freq[c] || 0) + 1;
  }

  const values = Object.values(freq);
  return values.every((v) => v === values[0]);
};

console.log(validateWord("abcabc"));
console.log(validateWord("abcabcd"));
*/

/*
7 kyu Broken Collatz
https://www.codewars.com/kata/57e8c68c97a05990b10000c3/train/javascript

collatz = (n) => {
  count = 1;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    count++;
  }
  return count;
};

console.log(collatz(1, 0));
console.log(collatz(10, 0));
console.log(collatz(27, 0));
*/

/*
7 kyu Failed Sort - Bug Fixing #4
https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/javascript

sortArray = (v) => v.split("").sort().join("")
console.log("🚀 ~ sortArray:", sortArray("54321"));
 */

/*
8 kyu Duck Duck Goose
https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript

duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;
*/

/*
8 kyu Be Concise IV - Index of an element in an array
https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript

find=(a,e)=>a.indexOf(e)<0?"Not found":a.indexOf(e)
console.log(find([1, 2, 3], 4));
*/

/*
8 kyu Beginner - Reduce but Grow
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

grow = (x) => x.reduce((s, n) => s * n);

console.log(grow([1, 2, 3, 4]));
*/
