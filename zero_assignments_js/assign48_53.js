// ASSIGN 1
let start = 10;
let end = 100;
let exclude = 40;
let i = start;
console.log("Output : ")
while(i <= end) {
if(i != exclude && i % start == false)
console.log(`${i}`);
    i++;
}
console.log("--".repeat(27));
// ASSIGN 2
let start_1 = 10;
let end_1 = 0;
let stop = 3;
console.log("Output : ")
for(let j = start_1  ; j >= stop ; j--) {
    if (j < start_1)
    console.log(`${end_1}${j}`);
    else
    console.log(`${j}`)
}
console.log("--".repeat(27));
// ASSIGN 3
let start_2 = 1;
let end_2 = 6;
let breaker = 2;
console.log("Output : ")
for(let k = start_2 ; k <= end_2 ; k++){
    console.log(`${i}`);
    console.log(` -- ${breaker}`)
    console.log(` -- ${end_2 -breaker}`)
}
console.log("--".repeat(27));
//ASSIGN 4
let index = 10;
let jump = 2;
let l = index ;
console.log("Output : ")
for(;;) {
    if(l > jump && l != jump ){
        console.log(l);
        l-=jump}
    else {
        break;
    }
}

console.log("--".repeat(27));
// ASSIGN 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length ;
console.log("Output : ")
for(let m = letter.indexOf(letter) ; m < friends.length; m++){
    if (friends[m][letter.indexOf(letter)] !== letter.toUpperCase() )
        console.log(`"${count++} => ${friends[m]}"`);
}
console.log("--".repeat(27));
// ASSIGN 6
let start4 = 0;
let swappedName = "elZerO";
let ss = []
console.log("Output : ")
for (let i = start4; i<swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase() ) {
        ss.push(swappedName[i].toUpperCase())
    }
    else {
        ss.push(swappedName[i].toLowerCase())
    }
}
console.log(ss.join(""));
console.log("--".repeat(27));
// ASSIGN 7
let start_5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
console.log("Output : ")
for(let o = ++start_5 ; o < mix.length ; o++){
    if(typeof mix[o] == "number")
        console.log(mix[o]);
}
console.log("--".repeat(27));


