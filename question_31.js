let userName = [];

if (userName.length) {
  for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "Admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log("Hello Eric, thank you for logging in again");
    }
  }
} else {
  console.log("We need to find some users!");
}
