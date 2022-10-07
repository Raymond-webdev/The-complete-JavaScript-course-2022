### In this lecture we will loop over an array backwords and then second we will also create a loop inside another loop.
```
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];
// i is a counter variable
for (let i = jonas.length - 1; i >= 0; i--){
    console.log(i, jonas[i]);
}
```

### Loop inside a loop
```
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`---------Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetition ${rep}`);
    }
}
```