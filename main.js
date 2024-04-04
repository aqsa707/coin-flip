// COIN FLIP SIMULATOR

//between 0 - 1
// let rand = Math.random();
// console.log(rand);

// 50% heads 50% tails

// if(rand < 0.5) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }

// // 25% heads 75% tails
// if (rand < 0.25) {
//     console.log("heads");
// } else {
//     console.log("tails");
// }

// 25% heads 25% feet 50% tails
// if (rand < 0.25) {
//     console.log("Heads");
// } else if (rand < 0.50) {
//     console.log("Feet");
// } else {
//     console.log("tails");
// }

// 10% heads 60% feet 30% tails
// if (rand < 0.10) {
//     console.log("Heads");
// } else if (rand < 0.70) {
//     console.log("feet");
// } else {
//     console.log("tails");
// }

// COIN FLIP SIMULATOR

// HTML Variables
let outputE1 = document.getElementById("output");
let headsE1 = document.getElementById("heads-out");
let tailsE1 = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // simulate the coin flip
  if (randNum < 0.5) {
    outputE1.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsE1.innerHTML = numHeads;
  } else {
    outputE1.innerHTML = "<img src='img/tails.png' />";
    numTails = numTails + 1;
    tailsE1.innerHTML = numTails;
  }
}
