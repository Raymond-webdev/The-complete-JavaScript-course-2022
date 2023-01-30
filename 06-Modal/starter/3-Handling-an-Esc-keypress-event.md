## Handling an "Esc" keypress event

- Let's now learn how to handle a key press event. 
So right now we can already close the **modal** by clicking the close button and by clicking outside of the model. But usually there is also a third one and that's by hitting the escape key on the keyboard. 
- This is actually a great use case to learn how to respond to keyboard events. So in order to listen for keyboard events we still need to use addEventListener because the key press event is simply just another type of event. Now keyboard events are so-called global events because they do not happen on one specific element.
- And for global events like keyboard events, we usually list them on the whole document. 
- So by using **addEventListener** here on the document, we are basically listening for events everywhere. - So no matter where they happened on the page, they will always trigger the event handler there. 
- There are actually three types of events for the keyboard, there is the **keydown**, the **keypress** or the **keyup**. 
- Keyup only happens when we left our finger off the keyboard basically or off the key. 
- Keypress is fired continuously as we keep our finger on certain certain key and keydown is fired as soon as we just press down the key and so usually that is the one that we use.
- So the name of our event event is just **keydown**. And this event will happen as soon as we hit any key on the keyboard. And then just like before, we specify a function here and this time let's specify it here directly, so without creating a separate function. 
- So this function here will actually be executed for any key press that happens.  
- However, we only want to close the popup when the escape was pressed so the information about which key was pressed will be stored in the event. 
- So as we hit any key here on the keyboard, event is generated and our handler function is waiting for that event to happen. Anytime that an event like this occur, JavaScript does in fact generate an object, and that object contains all the information about the event itself. And we can then actually access that object in the event handler function. 
- We are going to give this function a parameter "e" which stands for event.

- JavaScript will call this function with the event object as an argument. And once more this works because we do not call this function here ourselvs. Right, we do not call the function, we only defined it here, so JavaScript calles this function when a key down event happens.
 
 
  - So whatever key we press, we now get this information about which key was pressed in the console from the key property.
  
   - Now that I know which key was actually pressed, I can use that information to actually close the modal whenever the escape key is pressed. 
   - However, I only want to close the model when the model is actually visible, right? And how do we know if the model is currently visible? Well, if the model contains the class hidden, it means that it's not visible and so basically when it does not contain the class hidden it means that it's visible and then that's the condition in which we want to close it.
   - we talked in the last lecture about adding and removing classes. But as I mentioned back then we can also check event element already has a certain class and so now that becomes really handy because now I can do this so if the escape key is pressed.  

```
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener("click,  function(){
        modal.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown"n function(e){
    console.log(e.key);

    if(e.key === "Escape" && !modal/clasList.contains("hidden"){
        closeModal();
    })
})