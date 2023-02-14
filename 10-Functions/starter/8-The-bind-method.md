## The bind method

The bind method in JavaScript allows us to bind the value of this keyword for a given function. The main difference between bind and call is that bind does not immediately call the function, instead it returns a new function with this keyword set to the value passed in bind.

Consider an airline reservation example. We have an object Eurowings representing the airline and a function book to book a seat in the flight. If we want to use the book function for Eurowings all the time, we can use the bind method to create a new function bookEW with this keyword set to Eurowings.

```
let bookEW = book.bind(Eurowings);
bookEW("Steven Williams", "EW23");
```
In the above code, bookEW is the new function created using bind method with this keyword set to Eurowings. Now, we can use bookEW function to book a flight for Eurowings by passing the flight number and passenger name as arguments.

In the bind method, we can also set the values for some of the arguments. For example, if we want to create a function bookEW23 to book a flight for Eurowings flight number EW23, we can do it like this:

```
let bookEW23 = book.bind(Eurowings, "EW23");
bookEW23("Steven Williams");
bookEW23("Martha Cooper");
```
In the above code, bookEW23 is the new function created using bind method with this keyword set to Eurowings and flight number EW23 preset. Now, we only need to pass the passenger name when we call bookEW23 function.

This concept of specifying part of the arguments beforehand is called partial application. In the bookEW23 function, part of the arguments of the original book function are already applied (flight number EW23), making it a simpler function to use.