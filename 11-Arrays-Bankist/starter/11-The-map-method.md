## The map method

- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```
JavaScript Demo: Array.map()

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```