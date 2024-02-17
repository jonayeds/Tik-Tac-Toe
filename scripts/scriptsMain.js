function startGame(){
    document.getElementById('start-game').addEventListener('click', function(){
        document.getElementById('home-page').classList.add('hidden')
        document.getElementById('play-game-page').classList.remove('hidden')
    })
}
function result(user,comp){
    let newArr = []
    for(let j =0; j<9;j++){
        let value = document.getElementById(`${j}`).innerText
        newArr.push(value)

    }
    if(newArr[0] === user && newArr[1] === user && newArr[2] === user ||
        newArr[3] ===user && newArr[4] === user && newArr[5] === user ||
        newArr[6] ===user && newArr[7] === user && newArr[8] === user ||
        newArr[0] ===user && newArr[3] === user && newArr[6] === user ||
        newArr[1] ===user && newArr[4] === user && newArr[7] === user ||
        newArr[2] ===user && newArr[5] === user && newArr[8] === user ||
        newArr[0] ===user && newArr[4] === user && newArr[8] === user ||
        newArr[2] ===user && newArr[4] === user && newArr[6] === user  ){
        let playBoard = document.getElementById('play-board')
        playBoard.classList.add('hidden')
        document.getElementById('result').classList.remove('hidden')
        document.getElementById('winner').innerText = 'You Won'
        let userScore = parseInt(document.getElementById('user-score').innerText)
        
        userScore++
        document.getElementById('user-score').innerText = userScore   
    }
    else if(newArr[0] === comp && newArr[1] === comp && newArr[2] === comp ||
        newArr[3] ===comp && newArr[4] === comp && newArr[5] === comp ||
        newArr[6] ===comp && newArr[7] === comp && newArr[8] === comp ||
        newArr[0] ===comp && newArr[3] === comp && newArr[6] === comp ||
        newArr[1] ===comp && newArr[4] === comp && newArr[7] === comp ||
        newArr[2] ===comp && newArr[5] === comp && newArr[8] === comp ||
        newArr[0] ===comp && newArr[4] === comp && newArr[8] === comp ||
        newArr[2] ===comp && newArr[4] === comp && newArr[6] === comp  ){
        let playBoard = document.getElementById('play-board')
        playBoard.classList.add('hidden')
        document.getElementById('result').classList.remove('hidden')
        document.getElementById('winner').innerText = 'You Lost'   
        let compScore = parseInt(document.getElementById('comp-score').innerText)
        
        compScore++
        document.getElementById('comp-score').innerText = compScore
    }
    
}


function gameLoop(user,comp){
    let arr = '012345678'
    let putenValue  = arr.split('')
    
    for(let i=0;i<putenValue.length;i++){
        document.getElementById(`${putenValue[i]}`).addEventListener('click',function(){
            
            let index = putenValue.indexOf(`${i}`)
            let input = document.getElementById(`${putenValue[index]}`)
            input.childNodes[1].innerText = user
            putenValue.splice(index,1)
            console.log(putenValue)
            computerGuess(putenValue,user)
            result(user,comp)
            continueGame()
            
    })
}
}
function computerGuess(guessOption,user){
    let optionNumber = guessOption.length
    if(optionNumber>0){
        let randomGuess = guessOption[parseInt(Math.random()*optionNumber)]
    console.log(randomGuess)
    if(user === 'X'){
        let compGuess = document.getElementById(`${randomGuess}`).childNodes[1]
        compGuess.innerText = 'O'
    let index = guessOption.indexOf(randomGuess)
    guessOption.splice(index,1)
    }
    else if(user === 'O'){
        let compGuess = document.getElementById(`${randomGuess}`).childNodes[1]
        compGuess.innerText = 'X'
    let index = guessOption.indexOf(randomGuess)
    guessOption.splice(index,1)
    }
    
    }

}
function continueGame(){
    document.getElementById('continue-play').addEventListener('click', function(){
        document.getElementById('result').classList.add('hidden')
        document.getElementById('play-board').classList.remove('hidden')
        for(let k =0;k<9;k++){
            document.getElementById(`${k}`).childNodes[1].innerText= ''
            document.getElementById('user-option').classList.remove('hidden')

        }
    })
}



startGame()

addEventListener('keyup',function(event){
    if(event.key === 'Escape'){
        document.getElementById('play-game-page').classList.add('hidden')
    document.getElementById('home-page').classList.remove('hidden')
    document.getElementById('user-score').innerText =0
    document.getElementById('comp-score').innerText =0
    document.getElementById('round').innerText =0

    }

})

document.getElementById('X-side').addEventListener('click', function(){
    let user = 'X'
    let comp = 'O'
    document.getElementById('user-option').classList.add('hidden')
    gameLoop(user,comp)
    let round = parseInt(document.getElementById('round').innerText)
    round++
    document.getElementById('round').innerText = round
    
})

document.getElementById('O-side').addEventListener('click', function(){
    let user = 'O'
    let comp ='X'
    document.getElementById('user-option').classList.add('hidden')
    gameLoop(user,comp)
    let round = parseInt(document.getElementById('round').innerText)
    round++
    document.getElementById('round').innerText = round
})