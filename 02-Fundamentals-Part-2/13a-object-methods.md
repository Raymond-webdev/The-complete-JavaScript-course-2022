### Object methods
- We learned so far that objects just like arrays can hold different types of data, and they also can hold arrays and in fact they can even hold objects inside objects.
- We can actually create a key/ value pair in which the value is a function so we can in fact add functions to objects.
```
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
```

### Any function that is attached to an object is called a method.
