const tick_circle = "O";
const tick_x = "X";
let currentPlayer = tick_circle;
let draw = 0;
let restartBtn = document.querySelectorAll(".reset");
let cells = document.getElementsByClassName("cell");
let winner = document.getElementById("winnerDraw");

// Need winner draw to display text and clicks to stop happening after game is complete

let gameTime = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
  }
};

let cellClicked = function (event) {
    draw++;
    currentPlayer = currentPlayer === tick_x ? tick_circle : tick_x;
    for (let i = 0; i < cells.length; i++) {
  if (cells[i].innerText == "") {
    event.target.innerText = currentPlayer;
    if (playerWon()) {
        winner.innerText = "💰We Have a Winner!💰";
        setTimeout(() => {
            location.reload();
        }, 1500);
        return;
    }
    
    if (playerDraw()) {
        winner.innerText = "🌉Enough Draws to Raise a Bridge!🌉";
        setTimeout(() => {
            location.reload();
        }, 1500);
        return;
    }
}    
};}

let restart = function () {
  location.reload();
};

let playerWon = function () {
  if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
      return true; 
    } else if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X") {
      return true;
    } else if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X") {
      return true;
    } else if (cells[8].textContent == "X" && cells[2].textContent == "X" && cells[5].textContent == "X") {
      return true;
    } else if (cells[8].textContent == "X" && cells[6].textContent == "X" && cells[7].textContent == "X") {
      return true;
    } else if (cells[4].textContent == "X" && cells[2].textContent == "X" && cells[6].textContent == "X") {
      return true;
    } else if (cells[4].textContent == "X" && cells[1].textContent == "X" && cells[7].textContent == "X") {
      return true;
    } else if (cells[4].textContent == "X" && cells[3].textContent == "X" && cells[5].textContent == "X") {
      return true;
    } else if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O") {
      return true;
    } else if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O") {
      return true;
    } else if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O") {
      return true;
    } else if (cells[8].textContent == "O" && cells[2].textContent == "O" && cells[5].textContent == "O") {
      return true;
    } else if (cells[8].textContent == "O" && cells[6].textContent == "O" && cells[7].textContent == "O") {
      return true;
    } else if (cells[4].textContent == "O" && cells[2].textContent == "O" && cells[6].textContent == "O") {
      return true;
    } else if (cells[4].textContent == "O" && cells[1].textContent == "O" && cells[7].textContent == "O") {
      return true;
    } else if (cells[4].textContent == "O" &&cells[3].textContent == "O" && cells[5].textContent == "O") {
      return true;
    } else {
      return false;}
};

let playerDraw = function () {
  if (draw === 9) {
    return true;
  }
};

gameTime();
