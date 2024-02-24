// assign 1
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[length].toLowerCase()); // e
console.log(userName[userName.indexOf("e")]); // e
console.log(userName.substring(3,4)); // e
console.log(userName.slice(3,4)); // e
console.log(userName.substr(3,1).repeat(3));
//assign 2 
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True