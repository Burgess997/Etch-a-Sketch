let etch = document.querySelector(".etch")
let box = document.createElement("div")

createGrid(16)

function createGrid(gridSize){
    box.id = "grid-box";
    box.style.width = (500 / gridSize).toString().concat("px");
    box.style.height = (500 / gridSize).toString().concat("px")

    for (let i = 0; i < gridSize * gridSize; i++){
        etch.appendChild(box.cloneNode());
    }
}