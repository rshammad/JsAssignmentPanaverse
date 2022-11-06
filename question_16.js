let lists = ["Agha", "Danish", "Faris"];
let notComing = "Danish";

console.log(notComing + " " + "can't make it.");

lists.unshift("Hammad");
lists.splice(3, 0, "Rana");
lists.push("Saad");

for (var i = 0; i < lists.length; i++) {
  if (lists[i] === "Danish") {
    lists[i] = "Usama";
  }
  console.log(lists[i] + " " + "you are invited for a Dinner");
}
