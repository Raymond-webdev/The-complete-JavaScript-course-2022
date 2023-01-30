## Implementing highscores

- Let's now implement the last missing functionality in our game, which is the high scores.
- First off, we're going to need a variable for the high score, so just like for the regular score, we also need to store the high score in a variable.
- So basically if the current score is greater than the highscore then the high score will become this new current score.
 ```
 let highscore = 0;

 if(score > highscore){
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
 }
 ```

