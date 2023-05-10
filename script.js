// asking the player to select between X and O 

let choices = (() => {
    let btn = document.querySelectorAll(".btn");
    let btnChoice = null;

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            // return (e.target.textContent);
            btnChoice = e.target.textContent;
            console.log(`you selected ${btnChoice}`);
        })
    })
})()


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

// let Rules = (() => {
//     console.log(gameboard.process)
// })()
