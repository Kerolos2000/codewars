/* 
8 kyu !a == a ?!
https://www.codewars.com/kata/59f9796cffe75f9299000025/train/javascript
const a = []
console.log(a == false)
console.log(!a == false)
console.log(a == !a)
*/

/*
8 kyu Do I get a bonus?
https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
  return `£${bonus? salary * 10 : salary}`
}
console.log(bonusTime(9000,true)) //£90000
console.log(bonusTime(9000,false)) //£9000
*/

/*
8 kyu Get the mean of an array
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
getAverage = m => Math.floor(m.reduce((a, b) => a + b) / m.length)
console.log(getAverage([17,15,8,8,15,11,10,9,10,12]))
*/


/*
8 kyu Diamond 
https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond(n){
  if (n <= 0 || n % 2 === 0) return null
  const mid = Math.floor(n / 2)
  return Array
  .from({length: n})
  .map((_, i) => {
    const m = Math.abs(i - mid)
      return " ".repeat(m)+"*".repeat(n - 2 * m)
    }).join("\n") + "\n";
}
console.log(diamond(5))
*/