// ASSIGN 1
let member = {
    Name:"Elzero", age: 38, country: "Egypt",
fullDetails(){
return `My Name Is ${member.Name}, My Age Is ${member.age}, I Live in ${member.country}`
    }
}
console.log(member.Name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
// ASSIGN 2
// Method One
let objMethodOne = { property: "Method One" };
console.log(objMethodOne.property); // "Method One"

// Method Two
objMethodTwo = {};
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
objMethodThree = new Object();
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"

// Method Four
let x = { property: "Method Four" } 
let objMethodFour;
objMethodFour = Object.assign(x);
console.log(objMethodFour.property); // "Method Four"
// ASSIGN 3
let a = 1;
let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

finalObject = Object.assign(finalObject={a},threeNums, twoNums);
console.log(finalObject);
// ASSIGN 4
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};
console.log(myFavGames["Titan Quest"])
// Code One => How To Get Object Length ?
a={a:1,k:2}
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);// 3

for (let i = 0; i < objectLength; i++) {
    let game = Object.keys(myFavGames)[i];
console.log(`The Game Name Is ${game}`);
console.log(`The Publisher Is ${myFavGames[game].publisher}`);
console.log(`The Price Is ${myFavGames[game].price}`);
// Check If Nested Object Has Property (bestThree)
    if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")){
        console.log("- Game Has Releases");
        console.log(`First => ${myFavGames[game].bestThree.one}`);
        console.log(`Second => ${myFavGames[game].bestThree.two}`);
        console.log(`Third => ${myFavGames[game].bestThree.three}`);
    }
    console.log("#".repeat(20));
}
