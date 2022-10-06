## if...else


The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

Example 1:

const age = 15;

if (age >= 18) {
    console.log("sarah can start driving license ");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

Example 2:

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
     century = 20;
} else {
     century = 21;
}
console.log(century);