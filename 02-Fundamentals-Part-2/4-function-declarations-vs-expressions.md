### In JavaScript there are different ways of writing functions and each type of functions works in a slightly different way but they are all very similar.


1. This is a function declaration:

```
function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);
console.log(age1);
```

2. This is an expression of a function without a name:
```
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);
```

### The main difference between funcion declarations and function expressions is that we can actually call function declarations before defining the code.
Example:
```
const age1 = calcAge1(1991);

function calcAge1(birthyear) {
    return 2037 - birthyear;
}
```