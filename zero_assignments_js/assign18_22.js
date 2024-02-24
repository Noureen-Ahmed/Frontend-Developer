// assign 1
// Replace   With Arithmetic Operators
console.log(10 - 20 - 15 % 3 * 190 + 10%400); // 0
//assign 2
var num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(++num+true+true); // 6

// Solution Three
console.log(--num- -num); // 6

// Solution Four
console.log(num+=num++); // 6

// Solution Five
console.log(num%=++num+--num); // 6

// Solution Six
console.log((num++*(true+true+true))/(--num/(true+true))); // 6
// assign 3
var num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num * (true+true)); // 20

// Solution Three
console.log(num++ + --num); // 20

// Solution Four
console.log(((num++ + --num)*num)/+num); // 20

// assign 4 
let points = 10;
points++
points+=true+true;

console.log(points); // 13
--points;
points =--points-(true+true+true);
console.log(points); // 8;