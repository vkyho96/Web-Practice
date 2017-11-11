var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1Button = document.querySelector('#player1Btm');
var player2Button = document.querySelector('#player2Btn');
var reset = document.querySelector('#reset');
var gameScore = document.getElementById('gameScore');
var scoreInput = document.querySelector('input');
var header = document.querySelector('header');
var player1Score = 0;
var player2Score = 0;
var playto = 7;



player1Btm.addEventListener("click", function(){
	if(player1Score <= playto && player2Score <= playto){
	player1.textContent = player1Score++;
	}
	if(player1Score === playto+1){
		player1.style.color = '#f4791f';
		player1.style.fontWeight = 'bold';
		player1.style.fontSize = '70px';
		header.style.backgroundColor = "#fdb515";
		

	}
});

player2Btm.addEventListener("click", function(){
	if(player2Score <= playto && player1Score <= playto){
	player2.textContent = player2Score++;
	}
	if(player2Score === playto+1){
		player2.style.color = '#3399ff';
		player2.style.fontWeight = 'bold';
		player2.style.fontSize = '70px';
		header.style.backgroundColor = "#c6e2ff";
		

	}
});

reset.addEventListener("click", function(){
	player1Score = 0;
	player2Score = 0;
	player1.textContent = player1Score;
	player2.textContent = player2Score;

		player1.style.color = '#fff';
		player1.style.fontWeight = 'normal';
		player1.style.fontSize = '48px';

		player2.style.color = '#fff';
		player2.style.fontWeight = 'normal';
		player2.style.fontSize = '48px';
})

scoreInput.addEventListener("change", function(){
	playto = scoreInput.value;
	gameScore.textContent = playto;



});



// playto.value


