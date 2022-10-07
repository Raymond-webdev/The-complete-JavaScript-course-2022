### Whith the "WHILE" loop we can only specify a condition.
### This will run while the condition below is true while (rep <= 10>).
### When will then need to manually define the other two components of the "for" loop "the repetitions" and "the increasing counter" and so we needed to do that basically outside the "while" loop.
```
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
```

### The conclusion below is that the while loop does really not have to depend on any counter variable so whenever you do need a loop without a counter you can reach for the "while" loop, so basically that happens when you do not know how many iterations the loop will have.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`)
}