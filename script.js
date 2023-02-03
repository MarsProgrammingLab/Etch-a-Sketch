const container = document.getElementById("grid-container");
const sizeButton = document.querySelector("#squaresBtn");
const resetButton = document.querySelector("#resetButton");

function grid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    // create and add divs to container element
    const div = document.createElement("div");
    // add div class ".grid-square"
    div.classList.add("grid-square");
    // Add event listener to change color of each square div when hovering over with mouse
    div.addEventListener("mouseover", function () {
      this.style.backgroundColor = randomColor();
    });
    // append each div to the container
    container.appendChild(div);
  }
}

grid(16, 16);

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function upddateGrid() {
  sizeButton.addEventListener("click", () => {
    const response = prompt(
      "Enter the size of your grid that can be no greater than 100x100: "
    );
    container.innerHTML = "";
    grid(response, response);
  });
  resetButton.addEventListener("click", function () {
    container.innerHTML = "";
    grid(16, 16);
  });
}

upddateGrid();
