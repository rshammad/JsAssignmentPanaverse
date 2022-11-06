let name = "Hammad";
let age = 23;
let degree = ["Bachlors", "Masters"];

//Tests for equality and inequality with strings

console.log(name == "hammad");
console.log(name !== "Usama");
console.log(name == "Hammad");
console.log(name === "Hammad");
console.log(name.toLowerCase == "hammad");

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(age == 23);
console.log(age !== 13);
console.log(age > 30);
console.log(age < 50);
console.log(age >= 20);
console.log(age <= 50);

//Tests using "and" and "or" operators
console.log(name == "Hammad" && age <= 22);
console.log(name == "Hammad" || age > 50);

//Test whether an item is in a array
console.log(degree.includes("Masters"));
console.log(degree.includes("Mphil"));
