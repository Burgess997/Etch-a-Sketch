let etch = document.querySelector(".etch");
let box = document.createElement("div");
var mouseDown = 0;

document.body.onmousedown = function () {
  ++mouseDown;
};
document.body.onmouseup = function () {
  --mouseDown;
};

createGrid(16);

function createGrid(gridSize) {
  box.id = "grid-box";
  box.style.width = (500 / gridSize).toString().concat("px");
  box.style.height = (500 / gridSize).toString().concat("px");
  for (let i = 0; i < gridSize * gridSize - 1; i++) {
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
  box.style.backgroundColor = "red";
}
