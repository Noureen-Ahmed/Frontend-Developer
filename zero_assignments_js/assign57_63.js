// ASSIGN 1
function sayHello(theName, theGender) {
(theGender === "Male")
? console.log(`Hello Mr ${theName}`)
:(theGender === "Female")
?console.log(`Hello Miss ${theName}`)
:console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// ASSIGN 2
function calculate(firstNum, secondNum, operation){
if (isNaN(secondNum))
    console.log("Second number not found");
else {
    switch (operation) {
        default:
            console.log(firstNum + secondNum);
            break;
        case 'add':
            console.log(firstNum + secondNum);
            break;
        case 'subtract':
            console.log(firstNum - secondNum);
            break;
        case 'multiply':
            console.log(firstNum * secondNum);
            break;
    }
}
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
// ASSIGN 3
function ageInTime(theAge) {
if (theAge > 10 && theAge <= 100) {
    ageInMonths = theAge * 12;
    ageInDays = ageInMonths * 365;
    ageInHours = ageInDays * 24;
    ageInMinutes = ageInHours * 60;
    ageInSeconds = ageInMinutes * 60;
console.log(`
Age In Years = ${theAge} Years\n
Age In Months = ${ageInMonths} Months\n
Age In Days  = ${ageInDays} Days\n
Age In Hours = ${ageInHours} Hours\n
Age In Minutes = ${ageInMinutes} Minutes\n
Age In Seconds = ${ageInSeconds} Seconds\n
`)
    }
else
console.log(`${theAge} Years is Out Of Range`);
}
// Needed Output
ageInTime(38); // Months Example => 456 Months
ageInTime(110); // Age Out Of Range
// ASSIGN 4
function checkStatus(a, b, c) {
    check = [a,b,c];
    for (i = 0; i < check.length; i++) {
        if (typeof check[i] === "string")
            a = check[i];
        else if (typeof check[i] === "number")
            b = check[i];
        else if (typeof check[i] === "boolean") {
            c = check[i];
            if (check[i] == true)
                c = "You Are Available For Hire";
            else
                c = "You Are Not Available For Hire";
            }
    }
    console.log(`Hello ${a}, Your Age Is ${b}, ${c}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// ASSIGN 5
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (i = startYear; i <= endYear; i++){
    document.write(`<option value="${i}">${i}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);
// ASSIGN 6
function multiply(...nums){
    solution = 1;
    for (i = 0; i < nums.length; i++) {
        if (typeof a !== "string" && typeof nums[i] !="string"){
            nums[i] = parseInt(nums[i]);
            solution *= nums[i];
        }
        else continue;
    }
        console.log(solution);
}
multiply(100.5, 10, "B"); // 1000
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
