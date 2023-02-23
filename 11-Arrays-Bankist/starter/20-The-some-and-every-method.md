## The some & every method

- The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
```
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```
```
Syntax
// Arrow function
some((element) => { /* … */ })
some((element, index) => { /* … */ })
some((element, index, array) => { /* … */ })

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function (element) { /* … */ })
some(function (element, index) { /* … */ })
some(function (element, index, array) { /* … */ })
some(function (element, index, array) { /* … */ }, thisArg)
```

- The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```
```
Syntax
// Arrow function
every((element) => { /* … */ })
every((element, index) => { /* … */ })
every((element, index, array) => { /* … */ })

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function (element) { /* … */ })
every(function (element, index) { /* … */ })
every(function (element, index, array) { /* … */ })
every(function (element, index, array) { /* … */ }, thisArg)
```