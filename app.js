console.log('Welcome to Tic-Tac-Toe');

const gameboard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let currentPlayer = "X";

  const render = () => {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        if (cell.innerText === '') {
          cell.innerText = currentPlayer;
          board[index] = currentPlayer;

          if (checkWin(currentPlayer)) {
            alert(`${currentPlayer} wins!`);
            resetBoard();
          } else if (checkTie()) {
            alert("It's a tie!");
            resetBoard();
          } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });
    });
  };

  const checkWin = (player) => {
    return winningCombos.some((combo) => {
      return combo.every((index) => {
        return board[index] === player;
      });
    });
  };

  const checkTie = () => {
    return board.every((cell) => {
      return cell !== "";
    });
  };

  const resetBoard = () => {
    board.fill("");
    currentPlayer = "X";

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.innerText = '';
    });
  };

  return {
    render,
  };
})();

gameboard.render();



