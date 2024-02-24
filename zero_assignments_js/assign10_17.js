// assign 1
var num1=10,num2=20;
console.log(""+ num1+num2);  // Normal Concatenate => 1020
console.log(typeof(""+ num1+num2));// Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof(`${num1}${num2}`)); // Template Literals Way => String
/* Normal Concatenate
20
10
*/
console.log(num2 +"\n"+num1);

/*
Template Literals Way
20
10
*/
console.log(`${num2}
${num1}
`);
// assign 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// assign 3
console.log("`I'm IN \n \
\\\\ \n \
Love \\\\ \"\"\" \'\'\' \n \
++ With ++ \n \
\\\"\"\"\\\"\"\" \n \
\"\"Javascript\"\"\'\'");
//assign 4
let a = 21;
let b = 20;
console.log("_"+(a + "_" + b).repeat(4)+"_"); // _21_2021_2021_2021_20_