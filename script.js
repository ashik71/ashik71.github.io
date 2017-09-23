var scores, roundScore, activePlayer, gameStart;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gameStart){
        // 1. Crreate Random Number for dice
    
    var dice = Math.floor(Math.random()*6)+1;
    
    // 2. Display the result
    
    var diceDOM =  document.querySelector('.dice');
   diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score if the dice !=1
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent= roundScore;
    }
    else{
        nextPlayer();
    }
}
   
    
});

    
//Hold Button

document.querySelector('.btn-hold').addEventListener('click', function(){
   
    if(gameStart){
        // Add the current score to main score
    scores[activePlayer] += roundScore;   
    
    // Update the UI
    
     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if any player won the game or not
    if(scores[activePlayer] >=10){
        alert('game over');
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gameStart = false;
        
    }
    else{
         // Next Player
    
    nextPlayer();    
    }
}
    
    
    
});
    



function nextPlayer(){
    activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameStart = true;
    var x = document.querySelector('#score-0').textContent;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

}






