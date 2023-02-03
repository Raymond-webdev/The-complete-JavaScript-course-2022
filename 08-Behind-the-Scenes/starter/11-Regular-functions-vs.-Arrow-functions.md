## Regular functions vs. Arrow functions

- Let me now show you some pitfalls of the "this" keyword related to regular functions and arrow functions. This way we can learn when we should use and avoid each of them. And to start, let's get back the Jonas object from before, and I will also add a first name property.
- All right, and now let's add a second method here, but this time using an arrow function. So we will do a very simple greet method. And so an arrow function here, which simply logs to the console Hey, and then the name.
```
const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    },

greet: () => console.log(`Hey ${this.firstName}`)
}
jonas.greet();
```
  - And we get, Hey undefined. So that's not "Hey Jonas", as we might have expected, and the reason is the fact that an arrow function does not get its own this keyword, it will simply use the this keyword from its surroundings.
  - So in other words, its parents this keyword, and the parent scope of this greet method is the global scope and so therefore, that includes this greet method. It is in the global scope, and so therefore, the arrow function here, which does not have its own this keyword, will use the this keyword from the global scope and that is the window object. Right? 
  
   - And so that is what is happening here. That's why we get undefined, because this is the window object, so just as we saw before, and then on the window object, there is no first name, and so we get undefined.  And actually, this behavior can become pretty dangerous, in case we use var, to declare variables. 
   - So let's create another Jonas object and let's enhance this calcAge method. So what I want in here is a function that will basically return if the person is a millennial. So easy enough, let's create an isMillennial function in here. And let's simply log to the console, 
          ```
       const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);

        const self = this;
        const isMillenial = function() {
            console.log(this);
            console.log(this.year >= 1991 && this.year <= 1996);
        }
        isMillenial();
    },
    ```   
- So we're calling this method here, the calcAge method, which is a regular method, so not an arrow function. And so therefore, the this keyword right here should be the Jonas object. But then in here, we have a regular function, so this one, and here we are then calling it again. Now inside of this function, we are using the this keyword. And so let's now see what happens as we reload the page. And we get cannot read property year of undefined on line 138. So that's right here. So what this means is that the this keyword must be undefined. 
          So why is that? Well, if we think about this, then this here is really just a regular function call, isn't it? It is a regular function call, even though it happens inside of a method. And the rule says that inside a regular function call, which this clearly is, that this keyword must be undefined. And so therefore it is undefined right here. So this is just as if this function was outside of this method. 
- It's a clear rule that a regular function call has the this keyword set to undefined. And so that's just what is happening here. Now there are two solutions to this problem. The first solution is to use an extra variable that we usually call **self**. So outside of the function, let's say self and then we set that to this. Because here we are still outside of this isMillennial function. 

    ```
       const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);

        const self = this;
        const isMillenial = function() {
            console.log(slef);
            console.log(slef.year >= 1991 && self.year <= 1996);
        }
        isMillenial();
    },
    ```    
    
 - And so here, we still have access to this keyword set to Jonas, and so then in here, we can use simply self.  And so then through the scope chain, this self will be equal to this. So self is referenced here, but it's not of course in the scope. And so JavaScript goes up the scope chain, into the parent scope, which is calcAge. 
- And so this is a way in which we can preserve the this keyword. This can also be called debt, so that you might also see. 

## Arguments keyword

- So in the video about execution context, and the call stack, we learned that functions also get access to an **arguments** keyword so not just the this keyword, but also an arguments keyword. Now, just like the **this** keyword, the arguments keyword is only available in regular functions. 
 And then let me also print to the console, that keyword. So let me quickly call this function here now. So two and five so just so we see the arguments keyword. And so down here it is and you see that we get basically an array with two and five. And so that's exactly the two parameters that we passed in. And this can be useful when we need a function to accept more parameters than we actually specified. 
 - So we have two parameters, and so two arguments. But it is completely legal to add more arguments. They will not have a name, so we didn't name them, but they exist. And we can see them here in the arguments array. All right and we can use them therefore in the functions for example, we could use a loop, and then loop over this array and add all the numbers together. 
  ```
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);

  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
  addArrow(2, 5, 8);