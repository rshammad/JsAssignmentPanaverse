let current_users = ["Hammad", "Rana", "Ahmed", "Shayan", "Mashal"];
let new_users = ["Shayan", "Owis", "Omer", "Saad", "Rana"];

for (let x = 0; x < new_users.length; x++) {
  if (current_users.includes(new_users[x])) {
    console.log(
      new_users[x],
      "This username is already exist, Try different username"
    );
  } else {
    console.log("The username is available");
  }
}
