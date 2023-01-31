## The "this" keyword in practice

Let's now see the rules of how the this keywords is defined in action. And let's start by taking a look at the "this" keywords outside of any function whatsoever. So just outside in the global scope.

console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1991);

- So let's now call this function. And so let's see. And now the result of taking a look so at the logging, the this keyword is undefined. Sp what that means is that insight is just regular function call here. The "this" keyword will be undefined and that's because we are in strict mode. Remember that in sloppy mode, it would be also the global 
. 
- So in this case, the window 
 but you already know that you always should use strict mode. And so then in a regular function call like this the this keyboard will simply point to undefined and with a regular function call I simply mean a call of disfunction without the function being attached to any 
.   
 - The arrow function does not get its own this keyword, so instead the arrow function simply uses the lexical this keyword, which means that it uses the this keyword of its parent function or of its parents scope.  
 - So what is the this keywords in the parent's scope of this function? Well, it is window because window is the this keywords here in the global scope. 
 - Now, next up let's try to use the this keyword inside of a method. So let's quickly create a Jonas 
  here just with a birth year, 1991, and then again call the method, And so remember that this is basically now a function expression that we need to write here. Now let's lock the this keyword here and then let's call actually the calcAge function for now, just to see what the, this keyword will look like. And my hope is that you can guess already what it should look like. So let's save it to see the result. And indeed it is Jonah's so exactly this with calcAge and year. And so it means that's exactly this and that's exactly the rule that I told you in the previous lecture. So when we have a method call, the this keyword insight of the method will be the 
  that is calling the method. And in this case, that's the Jonas here is basically the owner of the method. That's another way of saying it and therefore, insight of calcAge this is Jonas. And then we can use that to our advantage, to calculate the age here based on the data that is already in this and so that's one of the big use cases for the this keyword, because then we don't have to pass in this data here again. So instead of having to do this again we can simply use the birth year that is already in and so we can use the this
 keyword to reference that and so this should now give us, or a usual value here of 46. 
 