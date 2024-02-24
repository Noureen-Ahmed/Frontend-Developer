// assign 1
    // Code One
    document.getElementById("el").style.color = "red";// will not work
    // Code Two
    window.onload = function () {
    document.getElementById("el").style.color = "blue"; //will work first bec its on load
    };
    // Code Three
    document.getElementById("el").style.color = "teal"; //won't work bec window on load 
// assign 2
    document.write("<h1>Elzero</h1>");
    document.querySelector("h1").style.color='blue';
    document.querySelector("h1").style.fontSize="80px";
    document.querySelector("h1").style.fontfamily="Arial";
    document.querySelector("h1").style.fontWeight="bold";
    document.querySelector("h1").style.textAlign="center";
// assign 3
    console.log("%cElzero %cWeb %c School",
    "color:red;font-size:40px;"
    ,"color:green;font-size:40px;",
    "background-color:blue;font-size:40px;font-weight:bold;")
// assign 4
        console.group("Group 1");
        console.log("Message One");
        console.log("Message Two");
        console.group("Child Group");
        console.log("Message One");
        console.log("Message Two");
        console.group("Grand Child Group");
        console.log("Message One");
        console.log("Message Two");
        console.groupEnd();
        console.groupEnd();
        console.groupEnd();
        console.group("Group 2");
        console.log("Message One");
        console.log("Message Two");
// assign 5
        console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);
// assign 6
    // first method , second method by comment
window.Error=function(){
    console.log("Iam In Console");
    document.write("Iam In Page");};
