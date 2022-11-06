
// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let FamousCity = ["New York", "Florida", "Karachi", "Islamabad", "Paris"];

//#1 Print your array in its original order.
console.log(FamousCity);

//#2 Print your array in alphabetical order without modifying the actual list.
console.log([...FamousCity].sort());

//#3 Show that your array is still in its original order by printing it.
console.log(FamousCity);

//#4 Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...FamousCity].reverse().sort());

// //#5 Show that your array is still in its original order by printing it again.
 console.log(FamousCity);


// //#6 Reverse the order of your list. Print the array to show that its order has changed.
 console.log(FamousCity.reverse());

// //#7
// console.log(FamousCity2.reverse());
