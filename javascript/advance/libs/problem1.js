function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector("button");
  btn.onclick = function () {
    var text = document.querySelector("p");
    var red = random(255);
    var green = random(255);
    var blue = random(255);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    text.style.color = color;
  };
});
