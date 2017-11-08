var toggle = document.getElementsByTagName('li');
 // keep resetting... why?
 
// for (var i = 0; i < toggle.length; i++){
//
// 	toggle[i].addEventListener("mouseover", function(){
// 			this.classList = "hover-over";
// 	});
//
// 	toggle[i].addEventListener("mouseout", function(){
// 			this.classList = "default";
// 		});
//
// }

for (var i = 0; i < toggle.length; i++){

toggle[i].addEventListener("click", function(){
		this.classList.toggle("clicked");
});
}


//mouseover
//mouseout
