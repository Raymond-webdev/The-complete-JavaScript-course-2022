## Manipulating CSS styles

- DOM also includes CSS styles so we can also change styles.
- So let's try it out by changing the background of the entire page to a green colour whenever the player guesses the right number so when a player wins again and it will also make this number wider and for that we need to manipulate the styles of this page. 
- We need to start by selecting the elements that we want to manipulate. 
  ```
  document.querySelector("body).style.backgroundColor = "#60b347";
  ```

- Let's also increase the width of the correct number guessed aswell.
 
 ```
      document.querySelector(".number").style.width = 15rem;
 ```