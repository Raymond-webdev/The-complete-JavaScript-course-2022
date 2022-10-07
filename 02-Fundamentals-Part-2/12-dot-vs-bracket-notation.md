### The first way of getting a property from an object is by using the dot notation.
### By using the dot notation we can actually select any properties from the object.
```
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas.lastName);
```
### using the bracket notations works in similar way:
console.log(jonas["lastName"]);

### We can actually add properties to the object using the dot and the bracket notation.

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedmann";
