
class Maze {
    maze: Array<Array<string>>;

    constructor () {
        this.maze = this.constructMaze();
    }

    constructMaze(): Array<Array<string>> {
        this.maze = [];

        for (let i = 0; i < 10; i++) {
            this.maze.push([]);
            for (let j = 0; j < 10; j++) {
                if (i === 0 || i === 9) {
                    this.maze[i].push("&");
                    continue;
                } else if (j === 0 || j === 9) {
                    this.maze[i].push("&");
                    continue;
                }
                let wall = Math.random() > 0.8 ? "&" : " "
                this.maze[i].push(wall);
            }
        }

        this.maze[0][2] = "S";
        this.maze[7][9] = "E";

        return this.maze;
    }

    printMazeAsString() {
        return this.maze
            .map(line => {
                return line.join(" ");
            })
            .join("\n");
    }

    solve(x: number, y: number): boolean {
        console.log(this.printMazeAsString());
        console.log();

        if(x < 0 || y < 0) {
            return false;
        }

        if (this.maze[x][y] === "E") {
            return true;
        } else if (this.maze[x][y] === "&" || this.maze[x][y] === "V") {
            return false;
        }
        this.maze[x][y] = "V";

            
        return this.solve(x + 1, y) || this.solve(x, y + 1) || this.solve(x - 1, y) || this.solve(x, y - 1);
        
    }

}


const grid = new Maze();

console.log(grid.printMazeAsString());
console.log(grid.solve(0, 2));
