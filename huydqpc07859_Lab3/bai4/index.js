var arr = ['Rock', 'Paper', 'Scissors'];
var result = document.querySelector('.result');
var machine = document.querySelector('.machine');
const btns = document.querySelectorAll(".btn")

function getValue(x) {
    
    var s = Math.floor(Math.random() * 3);
    var c = x;
    let signMachine = arr[s]
    machine.innerHTML = signMachine
    if (c === s) {
        result.innerHTML = "Equal";
    } else if ((c === 0 && s === 2) || (c === 1 && s === 0) || (c === 2 && s === 1)) {
        result.innerHTML = "You Win";
    } else {
        result.innerHTML = "You Lose";
    }
}

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        btns.forEach(btn => {
            btn.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})