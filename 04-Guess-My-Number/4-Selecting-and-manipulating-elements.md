## Selecting and manipulating elements.

- Now that we have a better understanding of what DOM and DOM relation are, let's now actually select and manipulate some more elements.
 - So in the previous lecture, we already selected this message element here by using **Queryselector**, then we also got the text content from the selected element. 
 - But besides getting the text content, we can also set the content of the element. 
   So instead of "stop guessing", let's say like "correct number". 
   So again we select the element using the queryselector and we will actually set this content to something else. And we do that by writing whatever we want the new content to be.
    
   **document.querySelector(".message").textContent = "Correct number"**

    - So in this line we started by reading the content of the element and so at the beginning it was still **start guessing** because that's what is written here in the HTML element in the beginning. Right then the next time we changed it and now if we would attempt to read it again, it should then be this new content that we said before.  
    - So what we did here is really already DOM manipulation, because in fact here we manipulated the text content of one of the dominant.

    - Another example of DOM manipulation by using the **value** element:

    **document.querySelector(".guess).value = 23;**