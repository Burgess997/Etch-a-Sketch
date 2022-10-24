let etch = document.querySelector(".etch")
let box = document.createElement("div")

createGrid(16)

function createGrid(gridSize){
    box.id = "grid-box";
    box.style.width = (500 / gridSize).toString().concat("px");
    box.style.height = (500 / gridSize).toString().concat("px")
    box.addEventListener('click', (box) => {
        console.log("S")
    })
    for (let i = 0; i < gridSize * gridSize; i++){
        let boxClone = box.cloneNode()
        etch.appendChild(boxClone);
        boxClone.addEventListener('click', () => {
            boxClicked(boxClone)
        })
    }
}

function boxClicked(box) {
    box.style.backgroundColor = "red"
    console.log(box)
}