let play = document.querySelector("#play")

let isRunning = false

function start(minutes, seconds){

    updateDisplay(minutes, seconds)

    play.addEventListener("click", () => {
        isRunning = !isRunning
        countDown()
    })
}

function updateDisplay(minutes, seconds){
    document.querySelector("#minutes").textContent = String(minutes).padStart(2, "0")
    document.querySelector("#seconds").textContent = String(seconds).padStart(2, "0")
}

function countDown(){
    if(isRunning === false) return

    let minutes = Number(document.querySelector("#minutes").textContent)
    let seconds = Number(document.querySelector("#seconds").textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        isRunning = false
        return
    }

    updateDisplay(minutes, seconds)

    setTimeout(() => countDown(), 1000)
}

start(0, 5)