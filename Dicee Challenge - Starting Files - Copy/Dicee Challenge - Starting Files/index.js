var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomImageSource1="images/dice"+randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource1);


var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
