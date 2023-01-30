## Working with classes

- Let's now actually learn how to manipulate classes with JavaScript, but the first thing that we have to do is to actually react to a click on each of these buttons here. 
- So right now of course nothing happens and so now we need to attach an event handler to each of these three buttons.
- We finished the last video about learning how we can do something for all of these three buttons at the same time, so for that we used a for loop which loops over the note list which is basically an array holding all of the buttons and so this button **open-modal** and then from there we simply read the text content property just like on any other element.
- Now let's take it one step further and instead of simply reading the text content property, we will call the add eventlistener method just like we learned in the last project.
- So in order to respond to a click event, we will attach an event handler function to the element. And event handler and event listener are pretty much the same thing, but that's why this method is called event listener. 
```
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener("click,  function()){
    console.log("Button clicked");
}
```

- The hidden class is now gone and so basically this is exactly what we will do using JavaScript so removing this class. 
 So what we want to do is to take the model element that we selected and on there we can read the class list property.
 ```
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener("click,  function(){
    console.log("Button clicked");
    modal.classList.remove("hidden");
});
```
 
  - So the hidden class is now gone and we can check that by using the inspect.
  - In order to show the **overlay** element, we need to remove the hidden class from this element as well.  - It's just the same thing again.

  ```
  overlay.classList.remove("hidden");
  ```

- Now what we just did here is for showing the modal window, but now let's also add the ability of then hiding it. By clicking that button. 
```
btnCloseModal.addEventListener("click", function(){
modal.classList.add("hidden");
overlay.classList.add("hidden");
})
```


- Usually when we click outside of a modal, then the modal window also closes.
 - So clicking this area you're outside should also close this window. So basically we want this to also be executed when we click  on the overlay. 
```
const closeModal = function(){
    model.classList.add("hidden);
    overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
```

 