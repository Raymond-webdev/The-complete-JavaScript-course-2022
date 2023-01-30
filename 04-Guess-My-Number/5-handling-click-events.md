## Handling click events

- Let's now make our application actually do something when we click on the check button. So this is going to be the first time that our code reacts to something that happens in the Dom, and for that we need to use an **event listener**. 
Now an event is something that happens on the page, for example a mouse click or a mouse moving or a key press. Or many other events. Then with an event listener we can wait for a certain event to happen and then react to it.  
- We want to listen to the event on button element in question so this check button, because this is where the click that we're interested in will happen. 
- So when we click on this button, something should happen.  
**document.quersySelector(".check").addEventListener()**

   So just as before, this will then return an element and now on that element we can call the **addeventlistener method**. 
   - Now there are actually multiple ways to listen for events in JavaScript, but using this addEventListener method is the best one and also the most used one.

   - Into this **addEventListener** method we first need to pass in the type of the event, and in this case it's just a simple click. 

   **document.querySelector(".check").addEventListener()**
   - The name of the event is actually **click** and so that is the first argument that we passed here into this function, but now we actually need to tell the event what to do so basically we need to specify the reaction to the click event.
    And we do that by defining a function and that function will contain exactly the code that should be executed whenever this click event happens on this check button. 
    - This function is going to be called the event handler. 

    ``` 
    document.querySelector(".check").addEventListener("click", function (){
           const guest = document.querySelector(.guess").value;
    })
    ```
    ```
    document.querySelector(".check").addEventListener("
    .click", function {
      const guess = Number(document.querySelector(".guess").value);
      console.log(guess, typeof guess);

      if(!guess) {
         document.qurySelector(".message").textCcontent = "No number!";
      }
    }); 