## Looping arrays: forEach

- The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".

The forEach method passes a callback function for each element of an array together with the following parameters:

Current Value (required) - The value of the current array element
Index (optional) - The current element's index number
Array (optional) - The array object to which the current element belongs
Let me explain these parameters step by step.

Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function):
```
numbers.forEach(function() {
    // code
});
```
The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:
```
numbers.forEach(function(number) {
    console.log(number);
});
```