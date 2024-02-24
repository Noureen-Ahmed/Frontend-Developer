// assign 1
console.log(1e6/1e1); // 100000
console.log(2.5e4*4); // 100000
console.log(+"0x00C350"+ +"0x00C350"); // 100000
console.log(1e1**5); // 100000
console.log(+99999.99.toFixed()); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.pow(1e1,5)); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(Math.floor(100000.1)); // 100000
console.log(Math.ceil(99999.99)); // 100000
// assign 2
console.log(Number.MIN_SAFE_INTEGER*-1); // 9007199254740991
//assign 3
console.log("MAX_SAFE_INTEGER".length); // 16
// assign 4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
// assign 5
let num = 10;
console.log(Number.isInteger(num)+ Number.isInteger(num)); // 2
// assign 6
let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.ceil((flt - true))); // 10
// assign 7
console.log(Math.trunc(Math.random()*4)); // 0 || 1 || 2 || 3 || 4

