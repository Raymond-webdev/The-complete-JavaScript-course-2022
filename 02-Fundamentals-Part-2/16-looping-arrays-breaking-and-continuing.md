### One of the most used applications of "for" loops is to loop through arrays.

### Continue statement
- With "continue" we can actually exit the current iteration of the loop.
```
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
}
```

### Break statement
- What "break" does is to completely terminate the whole loop and not just the current iteration.
```
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;
    
    console.log(jonas[i], typeof jonas[i]);
}