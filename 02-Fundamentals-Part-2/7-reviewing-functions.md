### Functions review: 3 different function types

### Function declaration
- Functions that can be  used before it's declared.

```function calcAge(birthday) {
    return 2037 - birthYear;
}
```

### Function expressions
- Essentialy a function value stored in a variable.
```
const calcAge = function(birthYear) {
    return 2037 - birthYear;
};
```

### Arrow functions
- Great for quick one-line functions. 
```
const calcAge = birthYear => 2037 - birthYear;
```

### Three different ways of writing functions, but they all work in a similar way: receive **input** data, **transform** data, and then **output** data.
