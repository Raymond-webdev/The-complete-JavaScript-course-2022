## flat and flatMap method

- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
```
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]
```
- Syntax:

flat()
flat(depth)


Parameters
depth Optional
The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Return value
A new array with the sub-array elements concatenated into it.

Description
The flat() method is a copying method. It does not alter this but instead returns a shallow copy that contains the same elements as the ones from the original array.

The flat() method ignores empty slots if the array being flattened is sparse. For example, if depth is 1, both empty slots in the root array and in the first level of nested arrays are ignored, but empty slots in further nested arrays are preserved with the arrays themselves.

The flat() method is generic. It only expects the this value to have a length property and integer-keyed properties. However, its elements must be arrays if they are to be flattened.

Examples
```
Flattening nested arrays
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.
```
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]
```

- Syntax
```
// Arrow function
flatMap((element) => { /* … */ })
flatMap((element, index) => { /* … */ })
flatMap((element, index, array) => { /* … */ })

// Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Inline callback function
flatMap(function (element) { /* … */ })
flatMap(function (element, index) { /* … */ })
flatMap(function (element, index, array) { /* … */ })
flatMap(function (element, index, array) { /* … */ }, thisArg)
```
Parameters
callbackFn
A function to execute for each element in the array. It should return an array containing new elements of the new array, or a single non-array value to be added to the new array.

The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array flatMap() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.

Return value
A new array with each element being the result of the callback function and flattened by a depth of 1.

Description
The flatMap() method is an iterative method. See Array.prototype.map() for a detailed description of the callback function. The flatMap() method is identical to map(callbackFn, thisArg) followed by flat(1) — for each element, it produces an array of new elements, and concatenates the resulting arrays together to form a new array.

The flatMap() method is generic. It only expects the this value to have a length property and integer-keyed properties. However, the value returned from callbackFn must be an array if it is to be flattened