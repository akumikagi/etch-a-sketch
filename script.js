const button = document.querySelector("#reset");
const container = document.createElement("div");
let brightness = 100;

document.onload = initialSet();

button.addEventListener("click", userSet);

function initialSet() {
  document.body.appendChild(container);

  const squareSet = document.createElement("div");
  squareSet.className = "canvas";

  for(let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";

    square.addEventListener("click", () => {
      let colors = [
        "white", "red", "orange",
        "yellow", "green", "cyan",
        "blue", "purple", "magenta"
      ];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      square.style.backgroundColor = randomColor;
    });
    square.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      brightness -= 10;
      square.style.filter = `brightness(${brightness}%)`;
    });
    square.addEventListener("mouseout", () => {
      brightness = 100;
    });

    squareSet.appendChild(square);
  }

  container.appendChild(squareSet);
}

function userSet() {
  container.innerHTML = '';

  let gridSize = +prompt("Enter desired grid size (max 100):", "");

  while(gridSize > 100 || isNaN(gridSize) == true) {
    gridSize = +prompt("NUMBER LESS THAN OR EQUAL TO 100 PLEASE:", "");
  }
  let boxWidth = (900 / gridSize) - 2;
  let boxHeight = (900 / gridSize) - 2;

  const squareSet = document.createElement("div");
  squareSet.className = "canvas";

  for(let i = 0; i < (gridSize * gridSize); i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.width = `${boxWidth}px`;
    square.style.height = `${boxHeight}px`;

    square.addEventListener("click", () => {
      let colors = [
        "white", "red", "orange",
        "yellow", "green", "cyan",
        "blue", "purple", "magenta"
      ];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      square.style.backgroundColor = randomColor;
    });
    square.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      brightness -= 10;
      square.style.filter = `brightness(${brightness}%)`;
    });
    square.addEventListener("mouseout", () => {
      brightness = 100;
    });
    squareSet.appendChild(square);
  }

  container.appendChild(squareSet);
}