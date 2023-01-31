## Hoisting and TDZ practice

Maybe it didn't seem like it but hoisting is actually a fairly straightforward process.
So let's just go through the different scenarios here starting with variables. So let's just create three variables here using the three different ways of declaring them.
```
var me = "Jonas";
let job = "teacher";
const year = 1991;
```

- And now let's try to use all of these three variables before declaring them, just to see what happens.
```
console.log(me);
console.log(job);
console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;
```
- So from the rules that we learned in the previous lecture, the first **console.log** result in undefined, and that's because variables declared with var are actually hoisted, but they are hoisted to the value of undefined and so therefore when we try to access them undefined is exactly the result that we get and so that's the reason why we see this here.
- Then on the contrary we have the let variable, and so here we see that we cannot access job before initialization.
- And so that's exactly the kind of error that shows in the console and the fact that the job variable is still in the temporal dead zone here at this point.
- The temporal dead zone of a variable declared with a let or const, starts from the beginning of the current scope, so in this case, it's the global scope so from the beginning of the scope until the point of the code where it is defined and this means that at this point of course, the job variable is still in the temporal dead zone, and the same is true for year.


- Let's try out functions so let's create a function declarations, and a function expressions and also create an arrow function.
- Let's try to use these functions, before they are defined.
```
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b){
    return a + b;
}

var addExpr = function (a, b) {
    return a + b;
    }

var addArrow = (a, b)=> a + b;
```

- we actually get the result of five and so indeed we were able to call the function declaration before it was actually defined here in the code.
- Let's try the same for the other two expression and addArrow, and so we get an **"cannot access addExpression"** before initialization and so that's exactly the same error that we got before here with this let and const variables and that's because this function here right now is simply a const variable too.
- And so it means that it's now also in the temporal dead zone and therefore we get this exact 
same error message as before and the same of course is gonna happen with the arrow function.
- Also we shouldn't use **var** to declare variables use **const** most of the time to declare variables and **let** if you really need to change the variable later.
- Also in order to write clean code, we should declare our variables at the top of each scope.
- Finally, always declare all your functions first and use them only after the declarationn andd this applies to all types of functions, even function declarations, which are hoisted.

