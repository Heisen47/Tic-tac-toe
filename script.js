// asking the player to select between X and O 

let choices = (() => {
    let btn = document.querySelectorAll(".btn");
    let btnChoice = null;

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            // return (e.target.textContent);
            btnChoice = e.target.textContent;
            console.log(e.target.textContent);
        })
    })
})()


//Making the gameboard which will print the array combinations

let gameboard = (() => {
    let Arr = [];
    let cells = document.querySelectorAll(".cell");
    let clickedIndex = null;
    
// this forEach loop will not let the array be more than 3 long 
        cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            clickedIndex = Arr.push(index);
            if (clickedIndex > 3 ) {
                return(Arr = []);
            }

            else{
            console.log(Arr);
            console.log(clickedIndex);
            return(clickedIndex);
        }
        })        

       
    })

})()
