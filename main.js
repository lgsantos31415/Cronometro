let play = document.querySelector("#play")
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let isRunning = false

function start(minutes, seconds){
    updateDisplay(minutes, seconds)

    play.addEventListener("click", () => {
        isRunning = !isRunning
        countDown()
    })
}

function updateDisplay(m, s){
    minutes.textContent = String(m).padStart(2, "0")
    seconds.textContent = String(s).padStart(2, "0")
}

function countDown(){
    if(isRunning == false) return

    let m = Number(minutes.textContent)
    let s = Number(seconds.textContent)

    s--

    if(s < 0){
        s = 59
        m--
    }

    if(m < 0){
        isRunning = false
        return
    }

    updateDisplay(m, s)
    setTimeout(() => countDown(), 1000)
}

minutes.addEventListener("click", e => edit(e))
minutes.addEventListener("blur", e => blur(e))
seconds.addEventListener("click", e => edit(e))
seconds.addEventListener("blur", e => blur(e))

minutes.onkeypress = e => /\d/.test(e.key)
seconds.onkeypress = e => /\d/.test(e.key)

function edit(e){
    isRunning = false
    e.target.textContent = ""
    e.target.setAttribute("contenteditable", "true")
    e.target.focus()
}

function blur(e){
    if(e.target.textContent > 60) e.target.textContent = 60
}

start(1, 30)