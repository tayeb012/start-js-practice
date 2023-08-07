const userName = "julmanFokir";
const userInput = "julmanFokir";
console.log(userName.length);
console.log(userInput.length);
console.log(userName.toLowerCase());
console.log(userInput.toLowerCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("valid user");
} else {
  console.log("invalid user");
}

// alternative
const userName2 = "julmanFokir";
const userInput2 = "juLmAnFokir";
if (userName2 === userInput2) {
  console.log("valid user");
} else {
  console.log("invalid user");
}
