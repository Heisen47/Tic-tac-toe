console.log('welcome to tic-tac-toe');

let changeTurn = (() => {
    let turn = () => 'X';
    // console.log (turn);

    return () => {
        turn = turn === "X" ? "O" : "X";
        return turn;
    };
})();

let render = () => {
    let cells = document.querySelectorAll('.cell');
    // cells.style.fontSize = "50px";
    

    let select = () => {

        Array.from(cells).forEach((e) => {
            e.addEventListener('click', () => {
                if (e.innerText === '') {
                    e.innerText = changeTurn();
                    // checkWin();
                }
            })
        })
    };

    select();
    return { select, cells };
}

render();



let gameboard = () => {
    let XArr = [];
    let OArr = [];
    const {render} = cells().select();
    console.log(print)
}







