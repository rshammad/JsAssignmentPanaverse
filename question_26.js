//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

var alien_color = "green";

if (alien_color == "green") {
  console.log(" player just earned 5 points for shooting the alien ");
}

//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
var alien_color = "yellow";

if (alien_color !== "green") {
  console.log("the player just earned 10 points");
}

//Write one version of this program that runs the if block and another that runs the else block.

var alien_color = "yellow";

if (alien_color == "yellow") {
  console.log("Player earn 1000 points");
} else {
  console.log("Player lost the game");
}
