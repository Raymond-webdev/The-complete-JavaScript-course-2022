## Calling a function inside a functio: Data Flow

### Below we are calling the fruitProcessor function with the arguments 2 and 3 and this will replace the apples parametres in the function with the number 2 and the oranges parametres with the number 3.

```
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
```