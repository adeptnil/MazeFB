let gameBoard = document.getElementById("gameBoard");

let posX = 0;
let posY = 9;
winningPos = false;
var boxtop = 458;
var boxleft = 8;


let board = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

for (var r = 0; r < board.length; r++) {
    var row = document.createElement("div");
    row.classList.add("row");

    for (var c = 0; c < board[r].length; c++) {
        switch (board[r][c]) {
            case "F":
                var finish = document.createElement("div");
                finish.classList.add("finish", "cell", "column");
                row.appendChild(finish);
                break;
            case "W":
                var wall = document.createElement("div");
                wall.classList.add("wall", "cell", "column");
                row.appendChild(wall);
                break;
            case "S":
                var start = document.createElement("div");
                start.classList.add("start", "cell", "column");
                row.appendChild(start);
                break;
            case " ":
                var empty = document.createElement("div");
                empty.classList.add("cell", "column");
                row.appendChild(empty);

        }
    }
    gameBoard.appendChild(row)
}





'use strict';

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    if (keyName === "ArrowDown") {
        if (posY < 14 && posY > 0) {
            if (board[posY + 1][posX] === " ") {
                boxtop += 50;
                posY += 1;
                document.getElementById("player").style.top = boxtop + "px";
            }
        } if (board[posY + 1][posX] === "F") {
            winningPos = true;
        }
    }
    //

    if (keyName === "ArrowUp") {
        if (posY < 14 && posY > 0) {
            if (board[posY - 1][posX] === " ") {
                boxtop -= 50;
                posY -= 1;
                document.getElementById("player").style.top = boxtop + "px";
            }
        }
        if (board[posY - 1][posX] === "F") {
            winningPos = true;
        }

    }
    //

    if (keyName === "ArrowRight") {
        if (posX < 21 && posX >= 0) {
            if (board[posY][posX + 1] === " ") {
                posX += 1;
                boxleft += 50;
                document.getElementById("player").style.left = boxleft + "px";
            }
        } 
        if (board[posY][posX + 1] === "F") { 
            winningPos = true;
        }

    }
    //

    if (keyName === "ArrowLeft") {
        if (posX < 21 && posX >= 0) {
            if (board[posY][posX - 1] === " ") {
                posX -= 1;
                boxleft -= 50;
                document.getElementById("player").style.left = boxleft + "px";
            }
        }
        if (board[posY][posX - 1] === "F") {
            winningPos = true;
        }
    }
  
         if (winningPos) {
            alert("You win!");

            
        }
    }  
);



            // let posX = 0;
            // let posY = 9;
            // // winningPos = false;
            // var boxtop = 458;
            // var boxleft = 8;
            // document.getElementById("player") = posX + boxtop;
            // document.getElementById("player") = posY + boxleft;


// for (var r = 0; r < board.length; r++) {
//     var row = document.createElement("div");
//     row.classList.add("row");



//     for (var c = 0; c < board.length; c++) {
//         console.log("[" + board[r][c] + "]"); // Display the content of cell board
//         if (board[r][c] === "W") {
//             var wall = document.createElement("div");
//             wall.classList.add("wall", "cell");

//             row.appendChild(wall);
//         } else if (board[r][c] === " ") {
//             var empty = document.createElement("div");
//             empty.classList.add("cell");

//             row.appendChild(empty);
//         }
//     }
//     gameBoard.appendChild(row)
// }


