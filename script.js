const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const text = document.getElementById("text");

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

function updateColor() {
  let r = parseInt(red.value) ;
  let g = parseInt(green.value) ;
  let b = parseInt(blue.value) ;

  let color = `rgb(${r}, ${g}, ${b})`;
  text.style.color = color;
}