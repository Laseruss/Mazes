let rows: number = 10;
let cols: number = 10;

let table = document.querySelector(".table");
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", placeWall);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

function placeWall(e: any) {
    let cell = e.target;
    if (cell.style.backgroundColor === "black") {
        cell.style.backgroundColor = "white";
    } else {
        cell.style.backgroundColor = "black";
    }
}
