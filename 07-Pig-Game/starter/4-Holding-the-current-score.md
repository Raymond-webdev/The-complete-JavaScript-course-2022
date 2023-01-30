## Holding the current score

- now let's implement the feature of a player holding the current score.  Now what we are going to implement is the functionality of holding the score and that happens whenever the user clicks on that button  to hold the score. 
- So when that happenes, we want to add the current score ti the total score,  
- Now the switching of player only happens when the score is still below 100. Because Windows score is at least 100 then the current player wins. 
- So we want that to happen when a user click on the button "hold" so we need to create an event handler.
```
btnHold.addEventListener("click", function () {
    if (playing) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            // Finish the game
            playing = false;
            diceEl.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
    })
```





