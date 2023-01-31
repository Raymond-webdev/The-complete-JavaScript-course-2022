
## Hoisting

- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior.

Some prefer to see let, const, and class as non-hoisting, because the temporal dead zone strictly forbids any use of the variable before its declaration. This dissent is fine, since hoisting is not a universally-agreed term. However, the temporal dead zone can cause other observable changes in its scope, which suggests there's some form of hoisting:

const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
Copy to Clipboard
If the const x = 2 declaration is not hoisted at all (as in, it only comes into effect when it's executed), then the console.log(x) statement should be able to read the x value from the upper scope. However, because the const declaration still "taints" the entire scope it's defined in, the console.log(x) statement reads the x from the const x = 2 declaration instead, which is not yet initialized, and throws a ReferenceError. Still, it may be more useful to characterize lexical declarations as non-hoisting, because from a utilitarian perspective, the hoisting of these declarations doesn't bring any meaningful features.

Note that the following is not a form of hoisting:

{
  var x = 1;
}
console.log(x); // 1
Copy to Clipboard
There's no "access before declaration" here; it's simply because var declarations are not scoped to blocks.

## TDZ - Temporal dead Zone

- Temporal dead zone (TDZ)
A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError. The variable is initialized with a value when execution reaches the line of code where it was declared. If no initial value was specified with the variable declaration, it will be initialized with a value of undefined.

This differs from var variables, which will return a value of undefined if they are accessed before they are declared. The code below demonstrates the different result when let and var are accessed in code before the line in which they are declared.

{ // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the let variable appears before the variable is declared, the function is called outside the TDZ.

{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
Copy to Clipboard
The TDZ and typeof
Using the typeof operator for a let variable in its TDZ will throw a ReferenceError:

// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
This differs from using typeof for undeclared variables, and variables that hold a value of undefined:

// prints out 'undefined'
console.log(typeof undeclaredVariable);



Temporal dead zone (TDZ)
A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError. The variable is initialized with a value when execution reaches the line of code where it was declared. If no initial value was specified with the variable declaration, it will be initialized with a value of undefined.

This differs from var variables, which will return a value of undefined if they are accessed before they are declared. The code below demonstrates the different result when let and var are accessed in code before the line in which they are declared.

{ // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the code below works because, even though the function that uses the let variable appears before the variable is declared, the function is called outside the TDZ.

{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
Copy to Clipboard
The TDZ and typeof
Using the typeof operator for a let variable in its TDZ will throw a ReferenceError:

// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
This differs from using typeof for undeclared variables, and variables that hold a value of undefined:

// prints out 'undefined'
console.log(typeof undeclaredVariable);

