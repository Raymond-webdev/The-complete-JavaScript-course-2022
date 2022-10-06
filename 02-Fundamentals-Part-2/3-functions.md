### Functions

- A function is simply a piece of code that we can re-use over and over again in our code.
- It's a little bit like a variable but for whole chunks of code so a variable holds a value but a function can hold one or more complete lines of code.
Example:
```
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(5, 0);
```