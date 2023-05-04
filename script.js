let choices = (()=>{
    let btn = document.querySelectorAll(".btn");
    let btnChoice = btn.forEach(button => {
        button.addEventListener('click',(e)=>{
            console.log(e.target.textContent)
        })
    })
})()