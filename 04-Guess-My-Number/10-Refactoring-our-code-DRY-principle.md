## Refactoring our code: The DRY principle


- To finish this project, let's now learn about the technique called refactoring in order to get rid of some of our duplicate code.
- So in our last lectures we had some repeated code in our project which we need to get rid of so we don't run into problems in the future where we need we have to change the same code in multiple places.  
- So having a lot of duplicate codes violates the don't repeat yourself principle. So the **DRY** principle. 
- It's not a big problem, but it can quickly become a nightmare for a bigger codebase. So try to avoid duplicate code whenever you can. However, when we first try to code, then it's no big problem to start out with duplicate code.

- I our actual project we had duplicate code, because we just wanted to make it work. But then as we move on in the project we can use a technique called refactoring. And refactoring basically means to restructure the code but without changing how it works. So basically we do a refactoring to improve the code and to eliminate duplicate codes.

- So the first step of refactoring is to identify duplicate or almost duplicate code like we already have in our example below. 
- And what we're going to do now is a way to eliminate half of this code basically.

```else if(guess > secretNumber){
if(score > 1) {
document.querySelector(".message").textContent = "Too high";
score--;
document.querySelector(".score").textContent = score;
} else {
document.querySelector(".message").textContent = "You lost the game!";
document.querySelector(".score").textContent = 0;
}
}
```
```
else if(guess < secretNumber){
if(score > 1) {
document.querySelector(".message").textContent = "Too low";
score--;
document.querySelector(".score").textContent = score;
} else {
document.querySelector(".message").textContent = "You lost the game!";
document.querySelector(".score").textContent = 0;
}
}
```

- So when the player wins the **guess** equals the secret number and when the **guess** is wrong, it means that is different from secret number.  
- So now we still need a conditional to figure out if the guest is greater or lower than the secret number so we are going to use a ternary operator. 

```
else if(guess !== secretNumber){
    if(score > 1){
        document.querySelector(".message").tectContent = guess > secretNumber ? Too high : Too low;
        score--
        document.querySelector(".score").textContent = score;
    }else {
        document.querySelector(".message).textContent= "You lost the game";
        document.querySelector(".score").textCOntent = 0;
    }
}
```

- So first we unified the two conditions that we had earlier where the guess was either greater or larger than the secret number.
- The only thing that changes is the message that is displayed on a page. And so here we then basically determines that message with the ternary operator. So here is where we then asked if the guess is greater than the secret number, and if it is then the text content here should be too high, but if it's not then the text content should become too low.

- This works because the ternary operator is really an operator, and so it will return basically a value so then that value is what will get stored in the text content of this message element.  
- However, sometimes a good refactoring technique is also to create functions. For example, when we have the same code in multiple places.
```
else if(guess === secretNumber){
document.querySelector(".message").textContent = "Correct number";
document.querySelector("body").style.backgroundColor = "#60b347";
document.querySelector(".number").style.width = "30rem";
document.querySelector(".number").textContent = secretNumber;
}
else if(guess > secretNumber){
if(score > 1) {
document.querySelector(".message").textContent = "Too high";
score--;
document.querySelector(".score").textContent = score;
} else {
document.querySelector(".message").textContent = "You lost the game!";
document.querySelector(".score").textContent = 0;
}
}
```
- We can see that above we have this querySelector(".message") all over the places so that's a lot a duplicate counts.
- So wha we can do is to include that code into a function then call the function in all the places where we have to duplicate the code.
- So basically we can refactor functionality that we use over and over again in order to make the code more DRY.
- So now we are going to create a function which is going to be part of a variable called "displayMessage" and the parameter will be the message.
```
const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}
```

- I can now simply say displayMessage with any arguments which will become the message in this function.
- Then here we say document.querySelector( text content should be the message that we just passed in). 
- So basically we took this code here which is responsible for setting the message and put it into this display message function that we can now use everywhere instead of having this repetitive code.  

```else if(guess === secretNumber){
displayMessage("Correct number")

document.querySelector("body").style.backgroundColor = "#60b347";
document.querySelector(".number").style.width = "30rem";
document.querySelector(".number").textContent = secretNumber;
}
else if(guess > secretNumber){
if(score > 1) {
displayMessage("Too High")
score--;
document.querySelector(".score").textContent = score;
} else {
displayMessage("You lost the game")
document.querySelector(".score").textContent = 0;
}
}
