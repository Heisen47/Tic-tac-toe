let playerOne;
let playerTwo;
let isPlayerOne = true; // added boolean variable

// asking the player to select between X and O 
let choices = (() => {
    let btn = document.querySelectorAll(".btn");
    let btnChoice = null;

    let select = () => {
        btn.forEach((button) => {
            button.addEventListener('click', (e) => {
                btnChoice = e.target.textContent.toString();
                // console.log(`you selected ${btnChoice}`);
                player(btnChoice); // call player function on each click
            })
        })
    }
    select();

    const player = (choice) => {
        if (isPlayerOne) {
            playerOne = choice;
            console.log(`playerOne chose ${playerOne}`);
            isPlayerOne = false; // toggle boolean
        } else {
            playerTwo = choice;
            console.log(`playerTwo chose ${playerTwo}`);
            isPlayerOne = true; // toggle boolean
        }
    }

    return { select };
})();

  


//Making the gameboard which will print the array combinations

let gameboard = () => {
    let Arr = [];
    let cells = document.querySelectorAll(".cell");
    let clickedIndex = null;
    let sorted = null;

    // this forEach loop will check the length of the array and sort it
    const process = () => {
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                // console.log('hi');
                clickedIndex = Arr.push(index);
                if (clickedIndex <= 3) {
                    sorted = Arr.sort();
                    console.log(sorted)
                }
            })
            // console.log(sorted)
        })
    }

    process();

    return { process }

}

gameboard()

let Rules = () => {
    console.log(gameboard.process);
    const winningAxes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


}
