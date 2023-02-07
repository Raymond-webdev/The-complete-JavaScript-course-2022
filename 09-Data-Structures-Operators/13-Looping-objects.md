## Looping objects: Object Keys, Values and Entries

- So we learned about the for of loop to loop over a race, which remember is an Iterable, but we can also loop over objects, which are not Iterable, but in an indirect way. Now we have different options here, depending on what exactly we want to loop over. So do we want to loop over the objects, property names over the values or both together. And let's start by simply looping over property names and so remember they are also called keys.
```
for (const day of Object.keys(openingHours)) {
    console.log(day);
}
