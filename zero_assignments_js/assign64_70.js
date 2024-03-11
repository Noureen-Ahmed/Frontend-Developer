// ASSIGN 1
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return `Hello ${zName.slice(0,6)}${zName.slice(6,7).toUpperCase()}.,`;
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return `Your Age Is ${parseInt(zAge)},`;
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.substring(0,2).toUpperCase()}`
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return `${namePattern(zName)} ${ageWithMessage(zAge)}
        ${countryTwoLetters(zCountry)}
        `
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
// ASSIGN 2
function NormalFn() {
    return `Iam A Normal Function`;
}
console.log(NormalFn()); // Iam A Normal Function
ArrowFn = () => `Iam A Arrow Function`;
console.log(ArrowFn()); // Iam A Normal Function

function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
(protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"),"=> Fn"); // https://www.elzero.org
// ASSIGN 3
checker = zName => status => salary =>
    status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available
// ASSIGN 4
function specialMix(...Data) {
    sum = 0;
    for (i = 0; i < Data.length; i++) {
        if (parseInt(Data[i])){
            sum += parseInt(Data[i]);
        }
    } 
    if (sum === 0) {
        sum = "All Is String";
    }
    return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings