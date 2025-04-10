var randomNumber1 = Math.floor(Math.random() * 6) + 1;//Random number between 1-6
var randomDice1 = "./images/dice" + randomNumber1 + ".png";//dice image 1-6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);

// Who wins
if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"
}