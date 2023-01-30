## Scope and the scope chain

- So let's continue with our journey of diving really deep into how JavaScript actually works behind the scenes  So we learned in the last lecture that each execution context has a variable environment and a scope chain. 
- Let's learn what scope and the scope chain are, why they are so important and how they work and let's start with the understanding what stopping actually means and learn about some related concepts as well. 
- So **scoping** controls how our program's variables are organised and accessed by the JavaScript engine.
- **Lexical scopping** means that our variables are organised and accessed and entirely controlled by the placement of functions and blocks in the program's code. For example, a function that is written inside another function has access to the variables of the parent function.
- Scope is the space or environment in which a certain variable is declared and in the case of functions that's essentially the variable environment which is stored in functions execution context. 
- Now in JavaScript we have the **global scope**, **function scope** and **block scope**.
- The **global scope** is once more for top level code, so this is for variables that are declared outside for any function or block.
- The **function scope** e creates a scope and the variables declared inside that function scope are only accessible inside that function. This is also called a **local scope**. So local variables live in function and the variables are then not accessible at all outside the function. 
- Starting with ES6, blocks also create scopes now and with blocks we mean everything that is between curly braces, such as a block of an **if** statement or a **for loop**. 
- So just like with functions variables declared inside a block are only accessible inside the block and not outside of it. 
- Now the big difference is that block scopes only applly to variables declared with let or const.
 
## The scope chain

- Scope chains establish the scope for a given function. Each function defined has its own nested scope, and any function defined within another function has a local scope which is linked to the outer function — this link is called the chain.
- Scope Chain - A stack of currently accessible scopes, from the most immediate context to the global context. Global Scope - A globally scoped variable can be accessed anywhere in the program. Local or Function Scope - A locally scoped variable can only be accessed in the function where it was declared.

 ## Scope chain vs Call Stack

 - The difference between the call stack and the scope chain is with the execution stack, the code runs in the order the functions are called, and with the scope chain it runs the code in the order of how the functions are written lexically. So basically the scope chain is what allows certain functions to access pieces of code that it is written lexically within, while others cannot access that code. And the execution stack runs the variables and functions in the order that they are called in.