## The findIndex method

The findIndex() is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. findIndex() then returns the index of that element and stops iterating through the array. If callbackFn never returns a truthy value, findIndex() returns -1.

callbackFn is invoked for every index of the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined.

findIndex() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

callbackFn will not visit any elements added beyond the array's initial length when the call to findIndex() began.
Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are visited as if they were undefined.
Warning: Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The findIndex() method is generic. It only expects the this value to have a length property and integer-keyed properties.

Examples
Find the index of a prime number in an array
The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.
```
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}
```
```
console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

Using findIndex() on sparse arrays
You can search for undefined in a sparse array and get the index of an empty slot.
```
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```
Calling findIndex() on non-array objects
The findIndex() method reads the length property of this and then accesses each integer index.
```
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```