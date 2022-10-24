let etch = document.querySelector(".etch");
var createButton = document.querySelector("#create-button");
var clearButton = document.querySelector("#clear-button");
var mouseDown = 0;
var lastUsedSize = 16

document.body.onmousedown = function () {
  ++mouseDown;
};
document.body.onmouseup = function () {
  --mouseDown;
};

createButton.addEventListener("click", () => {
  let size = prompt("What Sized Grid?");
  if (parseInt(size) == 0) {
    return;
  }
  clearGrid();
  createGrid(parseInt(size));
  lastUsedSize = size
});

clearButton.addEventListener("click", () => {
    clearGrid()
    createGrid(lastUsedSize)
});

createGrid(16);

function createGrid(gridSize) {
  let box = document.createElement("div");
  box.id = "grid-box";
  box.style.width = (500 / gridSize - 0.0045).toString().concat("px");
  box.style.height = (500 / gridSize).toString().concat("px");
  for (let i = 0; i < (gridSize * gridSize); i++) {
    let boxClone = box.cloneNode();
    etch.appendChild(boxClone);
    boxClone.addEventListener("mouseover", () => {
      if (mouseDown == 1) {
        boxClicked(boxClone);
      }
    });
    boxClone.addEventListener("mousedown", () => {
      boxClicked(boxClone);
    });
  }
}

function boxClicked(box) {
  box.style.backgroundColor = "black";
}

function clearGrid() {
  while (etch.lastElementChild) {
    etch.removeChild(etch.lastElementChild);
  }
}
