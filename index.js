var rows = 10;
var cols = 10;
var table = document.querySelector(".table");
var maze = [];
for (var i = 0; i < rows; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    maze.push([]);
    for (var j = 0; j < cols; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add("x_".concat(j));
        cell.classList.add("y_".concat(i));
        cell.addEventListener("click", placeWall);
        row.appendChild(cell);
        maze[i].push("");
    }
    table.appendChild(row);
}
function placeWall(e) {
    var cell = e.target;
    if (cell.style.backgroundColor === "black") {
        cell.style.backgroundColor = "white";
    }
    else {
        cell.style.backgroundColor = "black";
    }
}
console.log(maze);
