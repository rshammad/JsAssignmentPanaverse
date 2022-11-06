//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.

let magicians = ["Rana", "Shayan", "Hammad", "Ahmed"];
function show_magicians(magiciansList) {
  for (let i = 0; i < magiciansList.length; i++) {
    console.log(magiciansList[i]);
  }
}
show_magicians(magicians);
