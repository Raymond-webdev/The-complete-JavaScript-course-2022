## Implementing the game logic

- Let's now continue building our game and actually implement the game logic itself.
- So we need to implement what happens when the guest is correct, so when it's equal to the secret number. We also need to implement what happens when the guest is too low or when it's still high.
- So basically we have these three scenarios. And to start, we actually need to define that secret number, otherwise there's nothing which we can compare the guest to.
- We should define the secret number outside because we only want that secret number to be defined once, so only when we start the application. And so that's out here outside of the handler function. If we defined the secret number inside this handler function, then on each click we would get a new secret number, and so then the game would make no sense at all.
- We just need one number, which we can then compare to each of the guests here. 
- So let's define a random number between one and 20.

```
const number = Math.trunc(Math.random() * 20) + 1;
```
- So we use Math.random and so "Math" is basically an object that JavaScript gives us, and on there we have a lot of different methods, and random is one of them, and it gives us a number between zero and one.
- So whenever I run this, it will give me a new number and it's always different from the one before.
- So whenever I run this, it will give me a new number and it's always different from the one before. Now if I want a number between one and 20, I will start by multiplying this by 20.
- Also if there is a decimal number in there, we need to remove it.
 and for that we use **Math.trunk**.
- So now I have a number which goes from zero to 19. Because the results of this year will never really include the number of 20, it might only include like 19.999999, but now we're cutting off that decimal part and so we are now left with a number between zero and 19 and so to elevate it to between one and 20. All we have to do is to add 1 here.

 ```
  const number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".check").addEventListener("
    .click", function {
      const guess = Number(document.querySelector(".guess").value);
      console.log(guess, typeof guess);

      if(!guess) {
         document.qurySelector(".message").textCcontent = "No number!";
      }
    }); 
```

- So above we already have to condition if there is no guess, then just print to the message element that there is "No number".  But now what if there actually is a guess? So let's say **else if** and now we will actually check if the guess is the same.   
  So let's create a code block here. And now we need to specify what happens when the **guess** is correct. So again, when the guess is the same as the secret number, that's essentially what should happen then is that the correct number message should be displayed. 

  ```
  document.querySelector(".check").addEventListener("
    .click", function {
      const guess = Number(document.querySelector(".guess").value);
      console.log(guess, typeof guess);

      if(!guess) {
         document.qurySelector(".message").textCcontent = "No number!";
      }
      else if(guess === number){
        document.querySelector(".message").textContent = "Correct number";
      }
    }); 
    ```
  
    - And now let's work on that scenario which is when the guest is greater or lower than the number.
    - So the first one was that there is no number at all,then we checked if it's equal to the secret number and now we will check if it's greater, so if the guess is greater.then the secret number.
   ```
   else if(guess > number){
        document.querySelector(".message").textContent = "Too high";
      }
  ```

    - The last situation or the last scenario would be that the **"guess"** is lower than the **secret number**. 

    ```
   else if(guess < number){
        document.querySelector(".message").textContent = "Too low";
      }
  ```  