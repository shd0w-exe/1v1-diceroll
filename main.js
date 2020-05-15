var one =Math.floor(Math.random()*6)+1;
var dice1 = "images/dice" + one +".png";
document.querySelectorAll("img")[0].setAttribute("src" , dice1);


var two =Math.floor(Math.random()*6)+1;
var dice2= "images/dice"+two+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2);

if(one == two){
  document.querySelector("h1").innerHTML="GAME DRAW";
}
else if (one>two) {
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if (two>one) {
  document.querySelector("h1").innerHTML="Player2 wins";
}
