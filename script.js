const container = document.getElementById("grid-container");
for (let i = 0; i < 255; i++) {
  // create and add divs to container element
  const div = document.createElement("div");
  // add div class ".grid-square"
  div.classList.add("grid-square");
  // Add event listener to change color of each square div when hovering over with mouse
  div.addEventListener("mouseenter", function () {
    this.style.backgroundColor = randomColor();
  });
  // append each div to the container
  container.appendChild(div);
}

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
