## Pig game

- This project is going to be the most exciting one, because now we will take everything that we learned in the first two projects to a whole new level and build a really cool and amazing game which is called the pig game. 
- Below we will be selecting the page elements in order to manipulate them.
- When we're selectin an id(#), there's actually another way of selecting an element that only works by ID. So instead of choosing an element by calling querySelector, we are going to use **document.getElementById("")** , so this works exactly the same as the **querSelector**, but the **get.ElementById** is supposed to be a little bit faster.


```
// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
```
- Let's now set to the conditional conditions of score zero element.   
- All we have to do is to hide is dice, and so let's do that using the technique that we learn,kind of previous project which is basically creating a hidden class and then add that in class here at the beginning. 
```
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
```