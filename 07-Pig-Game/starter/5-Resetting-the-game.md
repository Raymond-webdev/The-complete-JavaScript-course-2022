## Resetting the game
- In this last lecture of this project we're going to implement the functionality of resetting the game at any point in time. So what we're looking for when we click on the **New Game** button is to remove the winner class and to sit all the scores of all the players back to zero. 
- So all the total scores and all the current scores should also be put back to zero. So essentially we need to set back all the initial conditions of the game. 
```
const init = function () {
    const scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
  }

init();
btnNew.addEventListener("click", init);
```