var lists = ["Agha", "Danish", "Faris"];
var notComing = "Danish";

for (let i = 0; i < lists.length; i++) {
  if (lists[i] === notComing) {
    console.log(lists[i], "can't make it.");
    lists[i] = "Usama";
  }
  console.log(lists[i] + " " + "you are invited for a Dinner");
}
