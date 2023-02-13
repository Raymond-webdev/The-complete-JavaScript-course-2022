## How passing arguments really works: value vs. Reference

- In this lecture, we will learn how exactly it works to pass arguments into functions. 
- And so let's draw up a quick and simple example here. 
So let's set a flight number here, 234, and an object, which is basically a passenger and then some random passport number.
Let's to create a check in function so basically when the passenger has already bought the flight and is then ready to check in to take the flight, and then let's say, there we need a flight number, and then also a passenger object, which contains data about the passenger itself. So basically we would call this function like this. So with the flight that we already have up here, and the Jonas object, in this case. Alright, so this is our flight, LH234. And this is our passenger, but now let's say that the number of the flight was changed. And so that can happen in the checkIn function.
- And so let's now change that flight number parameter here, just to make a point. So let's say for some reason, the number now changed to LH999, and I will also change the name of the passenger, and that's because in aviation, usually they always add a Mr or a Mrs, in front of the name, so let's do that, Mr, and then just the name of the passenger. So these are some changes that the check in function does.  So let's say if passenger dot passport is equal to this one, and let's suppose that this function gets this data from some database, which contains the booked flights, right, then in this case, if the passport is correct, then let's alert, check in, and else, alert, wrong passport and this part here will make a little bit more sense by the end of the lecture.
 - And so let's now change that flight number parameter here, just to make a point. So let's say for some reason, the number now changed to LH999, and I will also change the name of the passenger, and that's because in aviation, usually they always add a Mr or a Mrs, in front of the name, so let's do that, Mr, and then just the name of the passenger. So these are some changes that the check in function does.  So let's say if passenger.passport is equal to this one, and let's suppose that this function gets this data from some database, which contains the booked flights, right, then in this case, if the passport is correct, then let's **alert(check in)**, and **else {alert(wrong passport)}**. 
```
const flight = "LH234"
const jonas = {
   name =  "Jonas Schmedtman",
   passport = 327632764243
}

const checkIn = funciton(flightNum, passenger) {
  flight = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if(passenger.passport === 327632764243) {
    alert("Checked in")
    } else{
        alert("Wrong passport")
    }
  }
checkIn(flight, jonas);

console.log (flight);
consle.log(jonas);

console:
LH234
{name: "Mr. Jonas Schmedtman", passport: 327632764243}
```
- And now we are going to log both the flight and the Jonas object to the console after calling this checkIn function.
- And here we get checked in, but then what we get is the flight number, which is still LH234, so exactly as we defined it here, even though it seems like it was redefined here, so it really wasn't. And then we also get the Jonas object, but now the name is indeed changed to Mr Jonas Schmedtmann. And so that's this change here, that happened inside of the function,  So this flight here is a primitive type, it's just a string. And as we passed that value into the function down here, then the flight number here is basically a copy of that original value, 
- So flight number contains a copy, and not simply the original value of the flight variable. So this would be exactly the same as writing flight number equal = flight. And this would then also simply copy this value to flightNum. And so again, flightNum here is a completely different variable. And therefore, as we changed it here, it did not get reflected in the outside flight variable. Okay, and so it's still LH234, so exactly for the same reason as we saw before, in the primitives versus reference types lecture. But now what about the Jonas object that we passed, into the checkIn function and in that function, it is called passenger, And then we changed that passenger object here. And as we saw then, the Jonas object was also affected by that change.
- So why did that happen?  So when we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap. So that would be exactly like doing this. So passenger = Jonas. We can actually do this and here the same, just to get as a reference, same as doing,  and so, as you already know, when we try to copy an object like this, we are really only copying the reference to that object in the memory heap, but they both point to the same object in memory. And so that's exactly what is also happening here, with the Jonas object, as we pass it into the checkIn function where it's called passenger. 
- So here, as we are manipulating the passenger object, it is exactly the same as manipulating the Jonas object. Once again, because they both are the same object in the memory heap. So in summary, passing a primitive type to a function is really just the same as creating a copy like this, outside of the function. So the value is simply copied. On the other hand, when we pass an object to a function, it is really just like copying an object like this. And so whatever we change in a copy will also happen in the original.
- Now, of course, we need to be careful with this behavior and always keep it in mind. That's because the fact that objects behave this way when passed to functions can have unforeseeable consequences in large code bases. And that's especially true when you're working with multiple developers. 