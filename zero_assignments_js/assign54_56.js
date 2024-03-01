// ASSIGN 1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany","loki"];
let index = 0;
let counter = 0;
// for( i = index ; i < friends.length ; i++){
//     if(typeof friends[i] != "number" && friends[i][index] != friends[index][index] )
//     console.log(`${++counter} => ${friends[i]}`);
// }
let i = index ;
while(i < friends.length) {
    if(typeof friends[i] != "number" && friends[i][index] != friends[index][index] )
    console.log(`${++counter} => ${friends[i]}`);
    i++;
}

