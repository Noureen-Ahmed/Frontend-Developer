// ASSIGN 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
word = mix.map((e) => isNaN(e) ? e : "").reduce((a, e) => a + e);
console.log(word); // Elzero
// ASSIGN 2
let myString = "EElllzzzzzzzeroo";
let Duplicate = myString.split("").filter(function (el, index, arr) {
    return arr.indexOf(el) === index;
}).join("")
console.log(Duplicate);
// Elzero
// ASSIGN 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let ArrayFlatten = myArray.reduce((a, e) => a.concat(e), []).reduce((a,e)=>a + e)
console.log(ArrayFlatten);
// Elzero
// ASSIGN 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let NoChar = numsAndStrings.filter(
    function (e) {
        return !isNaN(e) 
    }
).map((e) => e)
console.log(NoChar);
// [-1, -10, 10, 20, -5, -3]
// ASSIGN 5
let nums = [2, 12, 11, 5, 10, 1, 99];
number = nums.reduce((a, e) => (e % 2 == 0) ? a * e : a + e, 1);
console.log(number)
// 500