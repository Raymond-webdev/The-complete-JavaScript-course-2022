## Project: Modal Window

- Now this time we will actually start by selecting everything that we're going to need for this project. So that's usually what we do when we build a project like this. So we select the elements that we need, and then we store the selections into variables and then we can use them over and over again.
- So that's way better than selecting the same elements over and over again like we did in the last project.
```
const modal = document.querySelector(".modal");
 const overlay = document.querySelector(".overlay");
 const btnCloseModal = document.querySelector(".close-modal");
 const btnsShowModal = document.querySelectorAll(".show-modal");
 console.log(btnsShowModal);
 ```



 - We will now basically create the HTML for the modal window using JavaScript. 
 - All we will do is to show it and to hide it according to the clicks on the buttons. 
 - So whenever we use **querySelector** with a selector which actually matches multiple elements, only the first one will get selected and so here we need another one, but it's pretty similar. It's called **querySelectorAll**. 
```
const btnsShowModal = document.querySelectorAll(".show-modal");
```
Console:
[button.show-modal, button.show-modal, button.show-modal];

- It's not exactly like an array, but here for now it works as though it was an array. If we want to do something, for example to all of these buttons, then we can simply loop through this note list and do something with them. 
- So we will now use the for loop. So I should stay below the length of this note list, which again for all purposes here works just like an array.
```
for(let i = 0, i , btnsOpenModal.length, i++){
    console.log(btnsOpenModal[i].textContent);
}
```

 - Again, this works just fine and now I have a way of selecting multiple elements with the same class and then with the for loop I can do something for each of them. 
  