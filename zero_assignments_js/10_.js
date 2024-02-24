
/*
data types 
--string
--number
--array =object
--object
--boolean
*/
console.log("noureen");
console.log(typeof "noureen"); //string
console.log(typeof 'noureen'); //string
console.log(typeof 2000); //number
console.log(typeof 2000.99);// although it's a decimal still number
console.log(typeof[10 ,15, 17]);//array but is meant object
console.log(typeof ["no","ni"]);//object
console.log({name:'noureen',age:19,country:'eg'}); //object
console.log(typeof true);// boolean
console.log(typeof undefined)//undefined = not exist 
console.log(typeof null)//exist but empty -> object
/*
var
-- redeclare(yes)
-- access before declare( yes and give undefined)
-- variable scope drama [added to window] (yes my variable is in window)
-- block or function scope 
let
-- redeclare(no) 
-- access before declare(no ,let me know the error) 
-- variable scope drama [added to window] (no)
-- block or function scope 
const
-- redeclare(no bec it's constant) 
-- access before declare(no) 
-- variable scope drama [added to window] (no)
-- block or function scope 
*/
var user = "noureen", age = 18;
user ="noureen"; // i can write without but if the variable name exist in system will be problem
console.log(user);
console.log(age);
console.log(hello); //access on variable id 
hello.innerHTML ="option";//access the inner html to change in it 
/*
string syntax + character escape sequences "",''
\ escape +line continue
*/
console.log('noureen "ahmed"'); // noureen "ahmed" to specialize a word
console.log("noureen 'ahmed'"); // noureen'ahmed' to specialize a word
console.log("noureen \'ahmed\'"); // noureen'ahmed' to specialize a word by \
console.log('noureen \"ahmed\"'); // noureen"ahmed" to specialize a word by \
console.log("elzero \\ web \'school\'"); //elzero \web 'school'
console.log("elzero \
web \
school") // this mean to ignore the new line(enter) by using \-> back slash
console.log("elzero\nweb \nschool");
/*
concatenation
*/
let a = "We love";
let b = "Javascript";
let c = "And";
let d = "Programming";
document.write( a + " " + b + " " + c+ " " + d ); // in html // output : we love javascript
console.log( a,b,c,d ); // in console //output :  we love javascript
console.log(`${a} ${b} ${c} ${d}`)// output: we love javascript and programming
// this to be like \n i use enter
console.log(`${a} ${b} 
${c} ${d}`)// output: we love javascript
            // and programming
console.log(`${a} "" \\ ${b} ${c} ${d}`)// output: we love "" \ javascript and programming
// make variable to use in html to make a page
let title ="kdrama lovers";
let desc = "hello our fans";
let markUP = `
<div class="card">
<div class="child">
    <h2>${title}</h2>
    <p>${desc}</p>
</div>
</div>
`;
document.write(markUP);
/*variable concatenation challenge */
let cardTitle="elzero" , cardDescription="elzero web school" , cardDate="25/10";
document.write(`
    <div class="content">
    <h3>hello${cardTitle}</h3>
    <p>${cardDescription}</p>
    <span>${cardDate}</span>
    </div>`.repeat(4));

/*
Arithmetic operations
+ addition
- subtraction
--*multiplication
/ division
% modulus
post increment ++ print then add
++ pre increment add then print 
-- pre decrement 
post decrement --
*/
console.log(10+20);// Output: 30
console.log(10+"noureen"); // Output : 10noureen (concat)
console.log(10-20); // Output : -10
console.log(10-"noureen"); //Output: NaN (not a number)
console.log(typeof(NaN)); //number
console.log(2**4) //output : 16 2 power 4
console.log(10%2);// output: 0
console.log(11%2);// output: 1 the reminder
/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/
console.log(+100); //return number
console.log(+"100"); //return number bec the string has number
console.log(+"-100"); // return number because it is a valid number in JS
console.log(+"noureen"); //Nan because its not a valid number
console.log(+"15.5"); // return a decimal number
console.log(+null); // 0
console.log(+"0xff"); // 255
var obj = {value: "Hello World"};
console.log(obj["value"]); // Hello World
console.log(-100);// output : -100
console.log(-"100");// output : -100
console.log(-"-100");// output : 100
console.log(-"Hello World");// Nan because its not a  valid number
console.log(Number("100"));//  100 
/*
type coercion

*/
let e ="10", l=20 , k=true;
console.log(e+l+k); // "1020true"
console.log(+e+l+k); // 31
console.log(+e+l)//output: 30  used unary "+" to return a number 10 
console.log("" - 2);// "-2" used "" to convert it into string and then "-" operator is used for negation
/*
assignment operators
*/
let m=10;
m+=10; // m becomes 10 + 10 which equals 20
m-=50; // m becomes 20 - 50 which equals -30
m/=10; // m becomes -30 / 10 which equals -3
m%=10; // m becomes -3 % 10 which equals 3
console.log(m); // 20
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
/*
number
-- double precision
-- syntactic sugar 
-- e
-- **
-- with decimal
-- number+bigInt
-- number min Value
-- number max Value
*/
console.log(1000000);//1000000
console.log(1_000_000); //1000000   syntactic sugar in js the underscore is ignored 
console.log(1e6);//1000000 with exponential
console.log(10**6);//1000000 with power
console.log(1000000.000);//1000000 with decimal
console.log(Number.MAX_VALUE)// number max Value : 1.7976931348623157e+308
console.log(Number.MIN_VALUE)//number min value : 5e-324
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991 is a valid no
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991 is a valid no
/*
number methods
two dots to call a method
toString()
toFixed()
parseInt()
isInteger()
isNaN()
*/
// convert number to string
console.log((100).toString());
// convert number to string by 2 dots
console.log(100..toString());
// 100.1 convert number to string by 2 dots
console.log(100.10.toString());
// 100.56 approximates according to what i want 
console.log(100.5555555.toFixed(2));
// display the integer number from the string
console.log(parseInt("100 noureen")); 
// except the first thing is string it'll br NaN
console.log(parseInt("noureen 100")); 
// display the float number from the string
console.log(parseFloat("100.456 noureen"));
console.log(Number.isInteger(100.500));//false
console.log(Number.isInteger(100));//true
console.log(Number.isInteger("100"));//false
console.log(Number.isNaN(100)); //false
console.log(Number.isNaN("100")); //false
console.log(Number.isNaN("noureen")); //false
// this means when i do a calc that has no number -> NaN
// is it logic to divide string by no ? no.
console.log(Number.isNaN("noureen"/20)); //true
/*math object*/
//if it more than 99.5 it'll be nearer to 100.0
console.log(Math.round(99.5)); // 99
//if it less than 99.5 it'll be nearer to 99.0
console.log(Math.round(99.2)); //100
// approximate to the higher
console.log(Math.ceil(99.9)); //100
// approximate to the lower
console.log(Math.floor(99.9));//99
// display the maximum number
console.log(Math.max(10,20,30,5));//30
// display the minimum number
console.log(Math.min(10,20,-8));//-8
// display the power of number
console.log(Math.pow(2,-1));//1/2
// display any random no
console.log(Math.random()); //0.34316466323582007
// remove the decimal and return integer only
console.log(Math.trunc(99.9));//99 
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
// global notes 
// if i count from backward by - no it's one-based: start from 1 not 0
// if i don't put a end point it continue to the end
let name = " noureen ";
//access the char by index is zero based from 0 not 1
console.log(name[1]); //"n"
console.log(name.charAt(1)); //"n"
// number of the char in the string
console.log(name.length);
//at wrong index last index = length -1 ;
console.log(name[15]); // undefined
console.log(name.charAt(15)); // nothing
// trim (cut) the spaces from the string
console.log(name.trim()); //"noureen"
// convert all letters to small 
console.log(name.toLowerCase());
// convert all letters to capitale
console.log(name.toUpperCase());
// convert letter r to be capitale after trim the string
// 1-> trim the string so i count after triming by trim()
// 2-> locate the position of the letter "r" by charAt() 
// 3-> convert it to be capitale by toUpperCase()
console.log(name.trim().charAt(3).toUpperCase());
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
let a ="Elzero Web School"; // index is zero-based
// he search the first index for the word is
console.log(a.indexOf("Web")); //7
// he start from index : 8 is e not w in web
console.log(a.indexOf("Web",8)); //-1
// the first "o" he'll recognise 
console.log(a.indexOf("o")); //5
// he'll count from end but the result from the start to end
console.log(a.lastIndexOf("o")); //15
// cut from - to - like a slice of pizza
// not include end means that i add 1 to the end i want
console.log(a.slice(2,6));//"zero"
// i count from end start with -1
// the end no is after no -1 to the backward and add 1 on it
// the end no from  start no to the backward 
// so the start is more than end in -no
console.log(a.slice(-5,-2));//"cho"
console.log(a.slice(-10,-7));//"Web"
// repeat the string by specific no
console.log(a.slice(-15,-10).repeat(2));
// split : display the string as array
// split every single letter
console.log(a.slice(0,6).split("")); //["E", "l", "z", "e", "r", "o"]
//let a ="Elzero|Web|School";
// split at "|" so it'll will be cut by scissors like a line
console.log(a.split("|"));//["Elzero", "Web", "School"]
// split at every single space
console.log(a.split(" ")) //["Elzero", "Web", "School"]
// will split at every space but 2 times as i limited and ignore the other
console.log(a.split(" ",2)) //["Elzero", "Web"]
// differ than slice because the start is mand 
// it cut from what i want and end is optional
// not including end = end +1
console.log(a.substring(7,10)); //"Web"
//if i swap them it'll be the same
console.log(a.substring(10,7)); //"Web"
// the negative is ignored there like no 0 but in slice not
console.log(a.substring(-10,6)); //"Elzero"
// last index = length -1
console.log(a.length-1); //16
// cut from start i count length - index 
// cut to the end i count length - index -1  
// because it's not inclide end
console.log(a.substring(a.length-5,a.length-3)) ; //"ch"
// start is mand and has no end point
// I count how much char i want
console.log(a.substr(7,3)); // "Web"
// if start point greater than length of string so it'll be empty
console.log(a.substr(18,2)); // ""
//if i want to count backward by - no it's one-based
console.log(a.substr(-5,2));// "ch"
// if the string has this or not
console.log(a.includes("Web")); // true
// if this string include a specific char or word from specific start point
console.log(a.includes("zero",3)); // false
// if string start with specific word or letter at specific start positon
console.log(a.startsWith("Web",8));// false
console.log(a.startsWith("z",2)); //true
// if string end with specific word or letter at specific end positon
// i count by length : one-based not zero-based
console.log(a.endsWith("o",6));//true

let b = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(b.charAt(2).toUpperCase()+b.slice(3,6)); // Zero
// 8 H
console.log(b.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH
// Return Array
console.log(b.split(" ",1)); // ["Elzero"]
// Solution Must Be Dynamic Because String May Changes
console.log(b[b.length-17].toLowerCase()+
(b.slice(b.length-16).toUpperCase())); // eLZERO WEB SCHOOl
// Use Only "substr" Method + Template Literals In Your Solution
console.log(${b.substr(0,6)}${b.substr(10,7)}); // Elzero School
*/
















