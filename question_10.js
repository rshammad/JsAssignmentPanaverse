/* Name: Hammad Raees, date: 10 October
 Discription: In this program I have take name as a input and print the name in Upper Case, Lower Case, and Tittle Case */


 let userName = "Hammad raees";
 console.log("Lower Case: " + " " + userName.toLowerCase());
 console.log("Upper Case: " + " " + userName.toUpperCase());
 var splitName = userName.split(" ");
 for (var i = 0; i < splitName.length; i++) {
   splitName[i] = splitName[i][0].toUpperCase() + splitName[i].slice(1);
 }
 
 console.log(`Title case: `, splitName.join(" "));
 

//    Name: Hammad Raees, date: 10 October
//    Discription: In this program I just did the simple mathematics and try to print same print 


console.log(5 + 3);
console.log(10 - 2);
console.log(16 / 2);
console.log(4 * 2);