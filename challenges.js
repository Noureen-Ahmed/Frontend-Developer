/*
Challenge 1

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //100
console.log(++a + -b + +c++ - -a++ + +a); //100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //100

Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d*+e); // 2000
console.log(++g*+ ++e + ++f -d); // 173
*/

//variable concatenation challenge 
/*
let cardTitle="elzero" , cardDescription="elzero web school" , cardDate="25/10";
document.write(`
    <div class="content">
    <h3>hello${cardTitle}</h3>
    <p>${cardDescription}</p>
    <span>${cardDate}</span>
    </div>`.repeat(4));

*/
/*
    Number Challenge
    
    let a = 100;
    let b = 2_00.5;
    let c = 1e2;
    let d = 2.4;
    
-- Find Smallest Number In All Variables And Return Integer
    console.log(Math.trunc((Math.min(a,b,c,d))));
    
--  Use Variables a + d One Time To Get The Needed Output
    console.log(Math.pow(a,Math.floor(d))); // 10000
    
-- Get Integer "2" From d Variable With 4 Methods
    console.log(Math.trunc(d));
    console.log(Math.floor(d));
    console.log(Math.round(d));
    console.log(Number.parseInt(d));

--Use Variables b + d To Get This Values
    console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
    console.log(Math.round(b)/Math.ceil(d)); // 67 => Number
    */
/*
If Condition Challenge
*/
/*
let a = 10;

if (a < 10) {
console.log(10);
} 
else if (a >= 10 && a <= 40) {
console.log("10 To 40");
} 
else if (a > 40) {
console.log("> 40");
}
else {
console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10 
? console.log(10)
: a>=10&&a<=40 
?console.log("10 To 40")
: a>40 
? console.log("> 40")
:console.log("Unknown");

let st = "Elzero Web School";

//W Position May Change
if (typeof(st) === typeof("w")) {
    console.log("Good");
}
if ( `${st.indexOf("e")}${st.indexOf("r")}` === "34") {
    console.log("Good");
}

if (st.charAt(1) !== "string") {
console.log("Good");
}

if (!( st === "number")) {
console.log("Good");
}

if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
console.log("Good");
}
*/



    //Switch Challenge
    // let job = "Designer";
    // let salary = 0;
    // switch(job) {
    //     default:
    //         salary=4000;
    //         console.log("salary = ", salary);
    //         break;
    //     case "IT":case "support":
    //         salary=6000;
    //         console.log("salary = ", salary);
    //         break;
    //     case "Developer":case "Designer":
    //         salary=7000;
    //         console.log("salary = ",salary);
    //         break;
    //     case "manager" :
    //         salary=8000;
    //         console.log("salary = ", salary);
    //         break;
    // }
// If Challenge

// let holidays = 6;
// let money = 0;
//     if(holidays==0){
//         money = 5000;
//         console.log(`My Money is ${money}`);    
//     }
//     else if(holidays == 1 ||holidays == 2){
//         money = 3000;
//         console.log(`My Money is ${money}`);    
//     }
//     else if(holidays == 3){
//         money = 2000;
//         console.log(`My Money is ${money}`);    
//     }
//     else if(holidays == 4){
//         money = 1000;
//         console.log(`My Money is ${money}`);    
//     }
//     else if(holidays == 5){
//         money = 0;
//         console.log(`My Money is ${money}`);    
//     }
//     else {
//         money = 0;
//         console.log(`My Money is ${money} `);    
//     }

//Array Challenge
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// console.log(my.slice(zero++,- --counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(my.slice(zero--,++counter).reverse()); // ["Elham", "Mazero"]
// let My_zero = my[--counter].slice(zero,counter)+my[--counter].slice(++counter);
// console.log(My_zero); // "Elzero"
// console.log( My_zero.charAt(Math.pow(counter,counter)).concat(my[++counter][zero])); // "rO"
// loop challenges
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
// let count =0;
// let numAdmins = [];
// numAdmins = myAdmins.slice( 0 ,myAdmins.indexOf("Stop"));
// document.write(`<div>We Have ${numAdmins.length} Admins</div>`);
// mainLoop:for(let i = 0; i<numAdmins.length;i++) {
//     document.write(`<hr>`);
//     document.write(`<p>The Admin For Team  ${i+1} Is ${myAdmins[i]}</p>`);
//     document.write(`<h2>Team Members : </h2>`);
//     NestedLoop:for(let j =0 ; j< myEmployees.length;j++) {
//         if(myEmployees[j][0] === myAdmins[i][0]) {
//             document.write(`<p> - ${++count} ${myEmployees[j]}</p>`);
//         }
//     }
//     count = 0;
// }