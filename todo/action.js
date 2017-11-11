var toggle = document.getElementsByTagName('li');
 // keep resetting... why?

for (var i = 0; i < toggle.length; i++){

	toggle[i].addEventListener("mouseover", function(){
			this.style.color = "green";
	});

	toggle[i].addEventListener("mouseout", function(){
			this.style.color = "black";
		});

    toggle[i].addEventListener("click", function(){
    		this.classList.toggle("clicked");
    });

}




//mouseover
//mouseout
