## Timers: setTimeout and setInterval

### setTimeout

- The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
- Timeouts are cancelled using clearTimeout().
```
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000")
```
### Working with asynchronous functions
- setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next function in the function stack fires.

See the following example:
```
  setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);

  // Output:

  // this is the third message
  // this is the second message
  // this is the first message
  ```

  ### setInterval()

- The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
```
Syntax
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0)
setInterval(func, delay, arg0, arg1)
setInterval(func, delay, arg0, arg1, /* … ,*/ argN)
```