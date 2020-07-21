let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let imgSrc = "./images/dice" + randomNumber1 + ".png";
let imgSrc2 = "./images/dice" + randomNumber2 + ".png";

let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imgSrc);

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎗 Player 1 Win!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Win!🎗";
} else {
  document.querySelector("h1").innerHTML = "DRAW !";
}
