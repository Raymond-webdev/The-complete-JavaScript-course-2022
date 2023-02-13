## The call and apply method

- We will go back to the this keyword in this lecture, and learn how to set the this keyword manually and why we might want to do that.

Example: Let's say we are working for Lufthansa, the biggest European airline group. We will create a simple object for this airline with a booking method. The object will have the following properties:

airlineName
iataCode
bookings (an array to store the booking details)
And here's the code for the booking method:


{
  airlineName: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(`${passengerName} booked a seat on ${this.airlineName} flight ${this.iataCode}-${flightNumber}`);
    this.bookings.push({
      flight: `${this.iataCode}-${flightNumber}`,
      passenger: passengerName
    });
  }
}
We can use the booking method as follows:


const lufthansa = { /* ... */ };

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'Mike Smith');
console.log(lufthansa.bookings);
This will log the following output:


Jonas booked a seat on Lufthansa flight LH-239
Mike Smith booked a seat on Lufthansa flight LH-635
[  { flight: 'LH-239', passenger: 'Jonas' },  { flight: 'LH-635', passenger: 'Mike Smith' }]
Now let's say the Lufthansa Group creates a new airline, Eurowings. We will create a similar object for Eurowings:

javascript
Copy code
const eurowings = {
  airlineName: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};
Instead of copying the booking method from the Lufthansa object, we can store it in an external function and reuse it for all airlines. Here's the code:

javascript
Copy code
function book(flightNumber, passengerName) {
  console.log(`${passengerName} booked a seat on ${this.airlineName} flight ${this.iataCode}-${flightNumber}`);
  this.bookings.push({
    flight: `${this.iataCode}-${flightNumber}`,
    passenger: passengerName
  });
}

eurowings.book = book;
Now we can book a flight for Eurowings as well:


eurowings.book(456, 'John Smith');
console.log(eurowings.bookings);
This will log the following output:


John Smith booked a seat on Eurowings flight EW-456
[  { flight: 'EW-456', passenger: 'John Smith' }]