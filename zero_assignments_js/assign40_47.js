// ASSIGN 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.slice(length-++num,--num));
// Method 2
myFriends.pop();
console.log(myFriends); 
// Method 3
myFriends.splice(num,true);
console.log(myFriends);
// method 4
myFriends.slice(myFriends.indexOf("Ahmed"))
console.log(myFriends);
// method 5
myFriends.splice(num);
console.log(myFriends);
// method 6
console.log(myFriends.slice( -myFriends.lastIndexOf("Gamal") - true , num )); 
// output :  ["Ahmed", "Elham", "Osama"];
// ASSIGN 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]
// ASSIGN 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
//finalArr = finalArr.concat(arrTwo.pop(),arrOne.reverse(),arrTwo.reverse())
finalArr = arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// ASSIGN 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
// ASSIGN 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if(haystack.includes(needle))
console.log("found");
if(haystack[1] == needle)
console.log("found");
if(haystack.slice(1,2) == needle)
console.log("found");
// ASSIGN 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let all_arrays = [];
all_arrays= arr1.concat(arr2).sort()
all_arrays= all_arrays.slice(arr2.length).join("").toLowerCase();
console.log(all_arrays);
// another solution
//console.log(all_arrays.concat(arr2.pop(),arr1.pop(),arr2.pop()).reverse().join("").toLowerCase()); // fxy
