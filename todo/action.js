var toggle = document.getElementsByTagName('li');

for (var i = 0; i < toggle.length; i++){
toggle[i].addEventListener("click", function(){
		this.classList.add("green");
});



toggle[i].addEventListener("mouseover", function(){
		this.style.color = "blue";
});


toggle[i].addEventListener("mouseout", function(){
		this.style.color = "black";
	});

}



//mouseover
//mouseout
