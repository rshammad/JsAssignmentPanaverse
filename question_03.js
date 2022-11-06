let userName = "Hammad raees";
console.log("Lower Case: " + " " + userName.toLowerCase());
console.log("Upper Case: " + " " + userName.toUpperCase());
var splitName = userName.split(" ");
for (var i = 0; i < splitName.length; i++) {
  splitName[i] = splitName[i][0].toUpperCase() + splitName[i].slice(1);
}

console.log(`Title case: `, splitName.join(" "));
