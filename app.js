let gridSize = 16;

function createDivs() {
    for (let i = 0; i < gridSize; i++) {
        divRow = document.createElement("div");
        divRow.classList.add("divRow");
        container.appendChild(divRow);
        for (let j = 0; j < gridSize; j++) {
            divCol = document.createElement("div");
            divRow.appendChild(divCol);
            divCol.classList.add("divCol");
            divCol.addEventListener("mouseenter", changeBg);
        }
    }
}

container = document.querySelector(".container");
createDivs();

divCol.addEventListener("mouseenter", changeBg);

function changeBg(e) {
    e.target.style.backgroundColor = "blue";
}
function changeBg(e) {
    e.target.style.backgroundColor = "blue";
}

resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", resetGrid);

newGridBtn = document.querySelector(".newGridBtn");
newGridBtn.addEventListener("click", newGrid)



function resetGrid() {
    gridSquares = document.querySelectorAll(".divCol");
    for (let square of gridSquares) {
        square.style.backgroundColor = "white";
    }
}

function newGrid() {
    replaceOldGrid();
    // let newGridSize = prompt("Select number of squares", 20);
    // gridSize = newGridSize;
    setGridSize();
    createDivs();
}

function replaceOldGrid() {
    container.remove();
    container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");
}

function setGridSize() {
    let newGridSize = prompt("Select number of squares", 16);
    if (newGridSize > 100 || newGridSize === null) {
        newGridSize = 1;
    } else {
        gridSize = newGridSize;

    }
    gridSize = newGridSize
    console.log(newGridSize);
}