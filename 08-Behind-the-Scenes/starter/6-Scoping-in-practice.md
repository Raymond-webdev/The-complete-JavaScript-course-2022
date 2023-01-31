## Scoping in practice

In this lecture we will start doing some practice and see scoping in action in a semi-complex example.

- Below we have a function that has been defined in **global scope**.
-  The **calcAge* function here is defined in a global scope and that's because it is in the top level code, allo this function here creates its own scope and that scope is going to be equivalent to the variable enviroment of its execution context.

```
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
```

Below we are going to create a global variable.
```
const firstName = "Jonas"
```
- And now let's call the function with an argument of "1991", and inside of the calcAge function we will log the firstName variable to the console.
```calcAge(1991);
```

```
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);
    return age;
}
- So as we can see, this "firstName" variable is not actually in the scope of the calcAge function however because it is a global variable, it can be used.

### Example of global scoping, function scoping and block scoping:
```

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age} born in ${birthYear}`;
        console.log(output);
    }
    printAge();

    if(birthYear >= 1981 && birthYear <= 1996) {
        const str = `You are a millenial, ${firstName}`
        console.log(str);
    }
    return age;
}

const firstName = "Jonas";
calcAge(1991);
```
