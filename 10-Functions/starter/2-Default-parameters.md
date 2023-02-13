## Default parameters 

- Let's start this section about functions with one of the easiest parts, which is default parameters. 
- So sometimes it's useful to have functions where some parameters are set by default. This way we do not have to pass them in manually in case we don't want to change the default. Now in this section, we're gonna to continue with the airline theme that we started by the end of the last section. And so let's now create a very basic booking function and we're gonna to do that, starting with the knowledge that we already had previously. So without the default parameters first, so just a normal function and into this function, we need to pass in the flight number, the number of passengers and the price. And then let's simply use this data to create an object and push that into some bookings array.
```
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
}

createBooking("LH123");

console:

{flightNum: "LH123", numPassengers: 1, price: 199};
```
- So booking, and now here we can use the enhanced object literal syntax that we learned about in the previous section. So we cannot create an object with a flight num property without having to do this so we simply defined a variable here and that will then create a property with this name and also the value that's in the variable then let's just create an array out here which will contain these bookings. So we start empty here then we simply push them each time there is a booking. So basically for the airline to keep the bookings in some kind of system. 
- It's just to show you the default parameters in this case.
- So all we have to do is to write this equals one. And so now this here will be the default value and the same for the price to 199. And this here of course, looks a lot nicer and is a lot more intuitive to read. Now, of course we can override these defaults. Otherwise this wouldn't make much sense. 