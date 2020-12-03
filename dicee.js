
var randomNumber1 = Math.ceil(Math.random()*(6));

var randomNumber2 = Math.ceil(Math.random()*(6));

var diceimg1 = "/Users/abruce3411/Desktop/Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png";

var diceimg2 = "/Users/abruce3411/Desktop/Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", diceimg1);

document.querySelector(".img2").setAttribute("src", diceimg2);

if (randomNumber1 > randomNumber2) {document.querySelector("h1").innerText="Player 1 Wins!";}

else if (randomNumber2 > randomNumber1) {document.querySelector("h1").innerText="Player 2 Wins!";}

else {document.querySelector("h1").innerText="Draw!";}
