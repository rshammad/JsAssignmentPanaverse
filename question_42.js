/* question 42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified.
*/

let magicians = ["Rana", "Shayan", "Hammad", "Ahmed"];

function make_great(magiciansList) {
  for (let i = 0; i < magiciansList.length; i++) {
    magicians[i] = `Great ${magiciansList[i]}`;
  }
  return magicians;
}

function show_magicians(magiciansList) {
  for (i = 0; i < magiciansList.length; i++) {
    console.log(magiciansList[i]);
  }
}

show_magicians(make_great(magicians));
