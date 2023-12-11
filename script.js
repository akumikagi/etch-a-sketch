//for(let i = 0; i < 94; i++) {
//  const squareSet = document.createElement("div");
//  squareSet.className = "column";
//  for(let i = 0; i < 47; i++) {
//    const square = document.createElement("div");
//    square.className = "square";
//    squareSet.appendChild(square);
//  }
//  document.body.appendChild(squareSet);
//}
const button = document.querySelector("#reset");
const container = document.querySelector("#container")

document.onload = initialSet();

button.addEventListener("click", userSet);

function initialSet() {

  const squareSet = document.createElement("div");
  squareSet.className = "canvas";

  for(let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";

    square.addEventListener("click", () => {
      square.style.backgroundColor = "green";
    });
    square.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      square.style.backgroundColor = "black";
    });

    squareSet.appendChild(square);
  }

  container.appendChild(squareSet);
}

function userSet() {
  document.body.removeChild(container);

  let gridSize = +prompt("Enter desired grid size (max 40):", "");
  let canvasSize = 22 * gridSize;

  while(gridSize > 40) {
    gridSize = +prompt("LESS THAN 40 PLEASE:", "");
  }

  const squareSet = document.createElement("div");
  squareSet.className = "canvas";
  squareSet.style.width = `${canvasSize}px`;
  squareSet.style.height = `${canvasSize}px`;

  for(let i = 0; i < (gridSize * gridSize); i++) {
    const square = document.createElement("div");
    square.className = "square";

    square.addEventListener("click", () => {
      square.style.backgroundColor = "green";
    });
    square.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      square.style.backgroundColor = "black";
    });

    squareSet.appendChild(square);
  }

  document.body.appendChild(squareSet);
}