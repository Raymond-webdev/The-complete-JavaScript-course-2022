## the new at method

- There's a new, very simple array method in ES2022, which is the at Method.
- And let's start by creating an array so 23, 11, 64. So just three random values here. And then, if we wanted to take one of the values out of the array, let's say the first one, then we would traditionally do "array at position zero".
```
const arr = [23,11, 64];
console.log(arr[0]);

console:
23
```
  But now with the new At Method, we can do the exact same thing using a method so we specify the exact same index here, and then we get the exact same value. 
  ```
  console.log(arr.at(0));
  ```
- So basically we can now replace the traditional bracket notation with the more modern looking At Method, if we prefer to use array methods like this.
- Another way is to use the **slice method** that we just learned before. 
```
console.lor(arr.slice(-1));
```
- However, as you can probably guess, the new At Method makes this process even easier. So now all we have to do is to write **arr.at(-1)** so if we lock this now, then here again we have 64. So the negative index, just like in slice, basically starts counting from the right side so from the end of the array. 

