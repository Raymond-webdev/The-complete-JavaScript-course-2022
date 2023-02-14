## Closures

- In JavaScript, a closure is not a feature that is created manually like creating an array or a function. It is a situation that happens automatically, and recognizing these situations is key. A closure allows an inner function to access and manipulate the variables of its outer function even after the outer function has finished executing. When a function returns another function, the returned function retains access to the variables of the parent function through the closure. The closure happens when a function's execution context is popped off the call stack, but the function's variables are still accessible to the inner function.

- In JavaScript, a closure is created when a function is defined inside another function and it has access to the variables and parameters of the outer function, even after the outer function has returned.

In other words, a closure is a combination of a function and the lexical environment in which it was declared. The lexical environment is the set of variables and their values that were in scope at the time the function was defined.

When a function is defined inside another function, the inner function retains access to the variables in the outer function's lexical environment, even after the outer function has finished executing and its execution context has been destroyed. This is what allows us to create private variables in JavaScript.

Closures are commonly used to create functions with private variables or to create callback functions in event-driven programming. They can also be used to implement modules and other advanced programming patterns.

It's important to note that closures can also lead to memory leaks if not used carefully. If the outer function creates a closure that retains a reference to a large object, that object will not be garbage collected even if it is no longer needed, which can cause performance issues.

Example:
```
function outerFunction() {
  const outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // logs "I am outside!"
```
In this example, outerFunction creates a variable called outerVariable and a function called innerFunction. innerFunction has access to outerVariable even though it is not defined inside it, because of the closure. When outerFunction is called and its return value, innerFunction, is assigned to innerFunc, outerVariable is still available to innerFunction when it is later called.