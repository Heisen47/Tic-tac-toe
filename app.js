console.log('Welcome to Tic-Tac-Toe');

//welcome screen at the start
let Welcome = (() =>{
    let startScrn = document.querySelector('.modalTwo');
    let startBtn = document.querySelector('#StartBtn');

    startBtn.addEventListener('click' , ()=>{
        startScrn.style.display = 'none';
    })
})();


//after winning the game modal
let GetModal = () => {
    const modal = document.querySelector(".modal");
    let restart = document.getElementById("btn");

    restart.addEventListener("click",()=>{
        modal.style.display = "none";
    })

    function winAlert() {
        modal.style.display = "block";

    }
    function TieAlert() {
        modal.style.display = "block";
    }

    return { winAlert, TieAlert }
};

GetModal();


//logic for the gameboard 
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
    const winnerInfo = document.querySelector("#winnerInfo");

    const render = () => {
        const cells = document.querySelectorAll('.cell');

        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                if (cell.innerText === '') {
                    cell.innerText = currentPlayer;
                    const TheModal = GetModal();
                    board[index] = currentPlayer;

                    if (checkWin(currentPlayer)) {
                        // alert(`${currentPlayer} wins!`);
                        TheModal.winAlert();
                        winnerInfo.textContent = `${currentPlayer} wins!`;
                        resetBoard();
                    } else if (checkTie()) {
                        // alert("It's a tie!");
                        TheModal.TieAlert();
                        winnerInfo.textContent = "It's a Tie!";
                        resetBoard();
                    } else {
                        currentPlayer = currentPlayer === "X" ? "O" : "X";
                    }
                }
            });

        });
    };

    //checking the win condition by using the 'some' method to iterate of the winning combos and storing in it combo array and then the 'every' function does the same but now its checking for the correct index inside 'combo' array amd return value
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


