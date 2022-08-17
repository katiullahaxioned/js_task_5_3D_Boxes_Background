var control = document.querySelector(".control");
var squareBox = document.querySelector(".square-box");

for (var i = 1; i <= 15; i++) {
  squareBox.innerHTML += '<span class="square-tile">tile</span>';
}

var squareTile = document.querySelectorAll(".square-tile");

function bgPosition(x, y, b) {
  var a = 0;
  for(var i=x; i<y; i++) {
    squareTile[i].style.backgroundPosition = `${a}% ${b}%`;
    a += 33;
  }
}

bgPosition(0, 4, 0);
bgPosition(4, 8, 33);
bgPosition(8, 12, 66);
bgPosition(12, 16, 99);

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