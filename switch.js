console.log("if your Tanvir's friend");
// const color = prompt("enter yous eyes color");
const color = "red";
if (color === "green") {
  console.log("you are my green friend");
} else if (color === "blue") {
  console.log("you are my blue friend");
} else if (color === "red") {
  console.log("you are my red friend");
} else if (color === "yellow") {
  console.log("you are my yellow friend");
} else if (color === "aqua") {
  console.log("you are my aqua friend");
} else {
  console.log("you are my black friend");
}

// alternative
// switch
switch (color) {
  case "red":
    console.log("you are my red friend");
    break;
  case "yellow":
    console.log("you are my yellow friend");
    break;
  case "aqua":
    console.log("you are my aqua friend");
    break;
  case "pink":
    console.log("you are my pink friend");
    break;
  case "green":
    console.log("you are my green friend");
    break;
  case "purple":
    console.log("you are my purple friend");
    break;
    default:
        console.log("you are my black friend")
}
