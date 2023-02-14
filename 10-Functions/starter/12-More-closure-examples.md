## More closure examples
### Example 1
- This code creates a closure. The g function declares a local variable a and a function f that multiplies a by 2 and logs the result to the console. The g function then sets the global variable f to the function f it just defined.

When g is called, it creates a new execution context with its own variable environment that includes a and f. After g has finished executing and returned, the variable environment that was created inside g is still accessible to the function assigned to f due to closure.

Finally, when f is called, it still has access to the variable a, even though it was declared inside the g function which has already returned. The output of f() in this example will be 46, which is 23 * 2. 
```
let f;
const g = function () {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h = function() {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();

console.dir(f);
```
### Example 2
- The boardPassengers function takes two arguments: n representing the total number of passengers, and wait representing the number of seconds to wait before starting the boarding process.

The function first calculates the perGroup variable by dividing the total number of passengers by 3. Then it sets a timeout using the setTimeout function, which takes two arguments: a function to execute after the specified time, and the time to wait in milliseconds. The function passed to setTimeout logs two messages to the console: the first announces that all passengers are boarding and the second indicates the number of passengers in each group. The wait time is specified in seconds, so it is multiplied by 1000 to convert it to milliseconds before passing it to setTimeout.

Finally, the function logs a message indicating the number of seconds until boarding starts.

When boardPassengers is called with arguments 180 and 3, it sets the perGroup variable to 60, logs a message indicating that boarding will start in 3 seconds, and then sets a timeout for 3 seconds. After the timeout elapses, the function passed to setTimeout is executed, logging two messages to the console. The output to the console will be something like:
- Will start boarding in 3 seconds
- We are now boarding all 180 passengers
- There are 3 groups, each with 60 passengers

```
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers( 180, 3);
```
