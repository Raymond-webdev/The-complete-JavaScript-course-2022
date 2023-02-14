## Immediately invoked function expressions

- Our next topic is something called, **Immediately Invoked Function Expressions**. So let's take a look at what they are. 
- So sometimes in JavaScript, we need a function that is only executed once. And then never again. So basically a function that disappears right after it's called once. And this might not appear to make much sense right now. But we actually need this technique later.
 We want to actually execute a function immediately and not even having to save it somewhere and so this is how we do that so we simply write the function expression itself so without assigning it to any variable. 
```
(function() {
    console.log("This will ever run again")
})();
```
- We can still trick JavaScript into thinking that this is just an expression and we do that by simply wrapping all of this into parentheses. And so now, we basically transformed the statement that we had before into an expression.
- So we know that this is the function and so, we can then immediately call it. And so with this, we will get now this text here locked to the console, to string. So again this is really just the function value so it's just a function expression and then immediately, we call it here. And so this is why this pattern here, is called the Immediately Invoked Function Expression. Or IIFE for short. So Immediately Invoked Function Expression. And the same would of course, also work for an arrow function. 
```
(() => console.log("This will also never run again"))();
```
- So this will also never run again so we first needed to wrap this into parentheses and then as we called it so two ways of writing an Immediately Invoked Function Expression. But you might be wondering, why was this pattern actually invented? Well, we already know that functions create scopes. And what's important here is that one scope does not have access to variables from an inner scope.
