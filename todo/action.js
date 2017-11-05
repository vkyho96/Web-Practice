var toggle = document.getElementsbyTagName('li');


addEventListener("click", function(){

	for (var i = 0; i < toggle.length; i++) {
		toggle[i].classList.add("green");
	}

});

//mouseover
//mouseout