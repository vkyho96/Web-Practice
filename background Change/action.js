
var button = document.querySelector("button");
//var isColored = false;
  button.addEventListener("click", function(){
    /*
    if(isColored){
      document.body.style.background = "#f4f4f4";
    }
    else {
      document.body.style.background = "#7fc0db";
    }
    isColored = !isColored;
    */

// second way
    document.body.classList.toggle("colored");

  });
