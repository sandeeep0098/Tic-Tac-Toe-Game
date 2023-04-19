let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
;

let editedPlayer = 0 ;
let activePlayer = 0 ;
let currentRound = 1 ;
let gameIsOver = false;


const players = [
    {
        name:'' ,
        symbol: 'X' ,
    }
    ,
    {
        name:'' ,
        symbol: 'O',
    }

];


const playerConfigOverlayElement = document.getElementById('config-overlay')
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-errors')
const gameAreaElement = document.getElementById('active-game');
const activePlayernameElement = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')

const startNewGameBtnErrorElement = document.getElementById('start-new-game-error ')


const editPlayer1BtnElement = document.querySelector('#edit-player-1-btn')
const editPlayer2BtnElement = document.querySelector('#edit-player-2-btn')
const cancelConfigBtnElement = document.querySelector('#cancel-config-btn')
const startNewGameBtnElement = document.getElementById('start-game-btn')
// const gameFieldElements = document.querySelectorAll('#game-board li')
const gameBoardElement = document.getElementById('game-board');




editPlayer1BtnElement.addEventListener('click', openPlayerConfig)
editPlayer2BtnElement.addEventListener('click', openPlayerConfig)

cancelConfigBtnElement.addEventListener('click', closeplayerconfig)
backdropElement.addEventListener('click', closeplayerconfig)

formElement.addEventListener('submit', savePlayerConfig) ;


startNewGameBtnElement.addEventListener('click', startNewGame)

// for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click' ,selectGameField);

// }

gameBoardElement.addEventListener('click', selectGameField)