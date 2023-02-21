## forEach with Maps and Sets


### Maps

The Map.forEach method is used to loop over the map with the given function and executes the given function over each key-value pair.

Syntax:

myMap.forEach(callback, value, key, thisArg)
Parameters: This method accepts four parameters as mentioned above and described below:

callback: This is the function that executes on each function call.
value: This is the value for each iteration.
key: This is the key to reach iteration.
thisArg: This is the value to use as this when executing callback.
Returns: It returns the undefined value.

### Sets

The Javascript Set forEach() method runs a function on each value in the Set object.

It runs on the elements in insertion order.

mySet.forEach(callback[, thisArg])
callback - function to execute for each element:
thisArg - Optional, value to use as this when executing callback.
callback function takes three parameters:

the element value
the element key
the Set object being traversed
Logging the contents of a Set object

Copy
function logSetElements(value1, value2, set) {
    console.log('s[' + value1 + '] = ' + value2);
}

new Set(['foo', 'bar', undefined]).forEach(logSetElements);
