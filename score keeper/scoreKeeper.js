var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1Button = document.querySelector('#player1Btm');
var player2Button = document.querySelector('#player2Btn');
var reset = document.querySelector('#reset');
var player1Score = 0;
var player2Score = 0;
var playto = 0;



player1Btm.addEventListener("click", function(){
	player1.textContent = player1Score++;
});

player2Btm.addEventListener("click", function(){
	player2.textContent = player2Score++;
});

reset.addEventListener("click", function(){
	player1Score = 0;
	player2Score = 0;
	player1.textContent = player1Score;
	player2.textContent = player2Score;
})



// playto.value


