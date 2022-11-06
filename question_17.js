//let lists = ["Agha", "Danish", "Faris"];

// for (let i= 0; i<Lists.length; i++){
//     console.log(Lists[i] + " " + "you are invited for a Dinner");
// }

// console.log(Lists[1] +" "+ "Won't be able to join this dinner");
// Lists.splice(1,1,"Usama");

// for (let i= 0; i<Lists.length; i++){
//     console.log(Lists[i] + " " + "you are invited for a Dinner");
// }

// console.log("Hey! I found the bigger table for the Dinner so, I am going to invite more guests");
// Lists.splice(0,0,"Shoaib");
// Lists.splice(2,"Shayan");
// Lists.push("Shila");
// console.log(Lists);

// for (let i= 0; i<Lists.length; i++){
//     console.log(Lists[i] + " " + "you are invited for a Dinner");
// }

// console.log("Bad News! I can only invite two guest");
// Lists.pop([1]);
// console.log("Sorry Shila, you are not invited for dinner")
// Lists.pop([1]);
// console.log("Sorry Faris, you are not invited for dinner")
// Lists.pop([1]);
// console.log("Sorry Usama, you are not invited for dinner")

// console.log(Lists +" "+ "you guys are still invited for dinner");

// delete Lists[0];
// delete Lists[1];

// console.log(Lists);

let lists = ["Agha", "Danish", "Faris"];
let notComing = "Danish";

console.log(notComing + " " + "can't make it.");

lists.unshift("Hammad");
lists.splice(3, 0, "Rana");
lists.push("Saad");

while (lists.length > 2) {
  console.log(`Sorry ${lists.pop()} you are not invited`);
}

for (var i = 0; i < lists.length; i++) {
  if (lists[i] === "Danish") {
    lists[i] = "Usama";
  }
  console.log(lists[i] + " " + "you are invited for a Dinner");
}
lists.pop();
lists.pop();
console.log("Lists: ", lists);
