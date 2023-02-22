## The find method

- JavaScript arr.find() function is used to find the first element from the array that satisfies the condition implemented by a function. If more than one element satisfies the condition then the first element satisfying the condition is returned. Suppose that you want to find the first odd number in the array. The argument function checks whether the argument passed to it is an odd number or not. The find() function calls the argument function for every element of the array. The first odd number for which the argument function returns true is reported by the find() function as the answer.

Syntax:

arr.find(function(element, index, array), thisValue)
Arguments The argument to this function is another function that defines the condition to be checked for each element of the array. This function itself takes three arguments:

array: This is the array on which the .filter() function was called. It is an optional parameter.
index: This is the index of the current element being processed by the function. It is an optional parameter.
element: This is the current element being processed by the function.
Another argument thisValue is used to tell the function to use this value when executing the argument function. 

Return value This function returns the first value from the array that satisfies the given condition. If no value satisfies the given condition, then it returns undefined as its answer.

Examples of the above function are provided below: 

Example 1: In this example, the function find() finds all the odd numbers in the array. Since no odd numbers are present, therefore it returns undefined. 


    /* JavaScript to illustrate find() function */
    function isOdd(element, index, array)
    {
        return (element % 2 == 1);
    }
    function func()
    {
        var array = [ 4, 6, 8, 12 ];
          
        // Checking for odd numbers and
        // reporting the first odd number
        console.log(array.find(isOdd));
    }
    func();
Output:

undefined
Example 2: In this example, the function find() finds the first occurrence of an odd number in the array. Since the first odd number is 5, therefore it returns it. 


    // JavaScript to illustrate find() function
    function isOdd(element, index, array)
    {
        return (element % 2 == 1);
    }
    function func()
    {
        var array = [ 4, 5, 8, 11 ];
      
        // Checking for odd numbers and
        // reporting the first odd number
        console.log(array.find(isOdd));
    }
    func();
Output:

5
Application: Whenever we need to get the value of the first element in the array that satisfies the provided testing function that time we use Array.find() method in JavaScript. 

Example 3: In this example, the function find() finds the first occurrence of a number greater than 4 in the array. Since the number greater than 4 is 7, therefore it returns it. 


    // input array contain some elements.
    var array = [2, 7, 8, 9];
      
    // Here find function returns the value of
    // the first element in the array that satisfies
    // the provided testing function (return element > 4).
    var found = array.find(function(element) {
    return element > 4;
    });
      
    // Printing desired values.
    console.log(found);
Output:

7