// // ASSIGN 1
let num = 9; // "009"
if(num < 10) 
console.log(` "00${num}"`);
else if (num > 10 && num < 100)
console.log(` "0${num}"`);
else if (num >= 100)
console.log(`"${num}"`);
console.log("========================================================");
// ASSIGN 2
let enum1 = 9;
let str = "9";
let str2 = "20";
if(enum1 == str)
console.log(`${enum1} Is The Same Value As "${str}"`);
if (enum1 == str && typeof(enum1)!== typeof(str))
console.log(`${enum1} Is The Same Value As "${str}" But Not The Same Type`);
if(enum1 !== str2 )
console.log(`${enum1} Is Not The Same Value Or The Same Type As "${str2}"`);
if(str != str2 && typeof(str) === typeof(str2))
console.log(`"${str}" Is The Same Type As "${str2}" But Not The Same Value`);
console.log("=======================================================");
////ASSIGN 3
let num_1 = 10;
let num_2 = 30;
let num_3 = "30";

if(num_3 > num_1 && typeof(num_3) != typeof(num_2))
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
if(num_3 > num_1 && num_3 == num_2 && typeof(num_3)!=typeof(num_2))
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
);
if(num_3 !== num_1 && num_3 !== num_2)
console.log (`"${num_3}" Value And Type Is Not The Same As ${num_1} And Type Is Not The Same As ${num_2}`)
console.log("=======================================================");
// ASSIGN 4
let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;
// Condition 1
if (num1 > num2) {
    console.log("True");
}
else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} 
else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} 
else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} 
else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} 
else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
}
else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
}
else {
    console.log("False");
}