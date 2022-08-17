window.addEventListener("load", function () {
    var control = document.querySelector(".control");
    var squareBox = document.querySelector(".square-box");
  
    for (var i = 1; i <= 15; i++) {
      squareBox.innerHTML += '<span class="square-tile">tile</span>';
    }
  
    var squareTile = document.querySelectorAll(".square-tile");
  
    control.addEventListener("click", function () {
      control.classList.add("control-active");
  
      setTimeout(function () {
        control.classList.remove("control-active");
      }, 100);
  
      for (var tile of squareTile) {
        tile.classList.toggle("square-tile-active");
      }
  
      squareBox.classList.toggle("square-box-active");
    });
  });