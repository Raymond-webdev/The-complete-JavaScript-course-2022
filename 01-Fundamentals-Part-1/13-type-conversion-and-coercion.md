### In javascript there's type conversion and type coercion.
    Javascript can only convert to a string, number or boolean.

Type conversion
- is when we manually convert from one type to another.
  Below we are converting from a string to a number.
```
const inputYear = "1991";
console.log(Number(inputYear));
```
  Below we are converting from number to string.
  console.log(String(23));



Type coercion
- is when javascript automatically converts types behind the scenes for us.
  Below javascript converts the number 23 automatically to a string so the whole sentence is a string.
```
console.log("I am " + 23 + " years old");
```