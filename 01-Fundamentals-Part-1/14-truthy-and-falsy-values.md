## Truthy and falsy values

 1. Truthy values are values that will be converted to true for example any number that is not 0 or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean.
```
const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}
```

2. Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean.
   In javascript there are only 5 falsy values: 
   - 0, "", undefined, null, NaN

  

   

  