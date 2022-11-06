//Store the numbers 1 through 9 in a array.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Loop through the array.
for (let i = 0; i < num.length; i++) {
  //if-else chain inside the loop to print the proper ordinal ending for each number

  if (num[i] === 1) {
    console.log(num[i] + "" + "st");
  } else if (num[i] === 2) {
    console.log(num[i] + "" + "nd");
  } else if (num[i] === 3) {
    console.log(num[i] + "" + "rd");
  } else {
    console.log(num[i] + "" + "th");
  }
}
