const squares = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-button')
const stopButton = document.querySelector('#stop-button')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null
let countDownTimerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

function startGame() {
    // Reset game state
    result = 0
    currentTime = 60
    score.textContent = result
    timeLeft.textContent = currentTime
    // Start mole movement and countdown timer
    moveMole()
    countDownTimerId = setInterval(countDown, 1000)
}

function stopGame() {
    // Stop all timers
    clearInterval(timerId)
    clearInterval(countDownTimerId)
    alert('Game stopped! Your score was ' + result)
}


startButton.addEventListener('click', startGame)
stopButton.addEventListener('click', stopGame)