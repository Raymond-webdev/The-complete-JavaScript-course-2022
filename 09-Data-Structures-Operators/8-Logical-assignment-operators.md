## Logical Asignment Operators

- Now, even more modern that the nullish coalescing operator that we just talked about are three new so-called logical assignment operators that were introduced in ES 2021. 
 And in order to do that in an effective way, let's quickly start by creating two new restaurant objects.
 ```
 const rest1 = {
    name: "Capri",
    numGuests: 20,
 };

 const rest2 = {
    name: "La pIazza",
    owner: "Giovanni Rossi",
 };
 ```
 - The first thing that we want to do now is to set a default number of guests for all the restaurant objects that do not have that property.
 - So in this case, basically adding the number of guests property to the objects that do not have them. And let's start by using the tool that we already know about to do this. And so that is the || operator. 
 ```
 rest1.numGuests = rest1.numGuests || 10;
 rest2.numGuests = rest2.numGuests || 10;

 console.log(rest1);
 console.log(rest2);
```
- So let's say **rest2.numGuests** of guests should be equal to **rest1.numGuests** or 10. So let's quickly remember that this works because of short circuiting. So in the || operator, if the first value is truthy, then that first value will immediately be returned and the second value will not even be evaluated and so by doing this, we are returning the number of guests if it does exist, so if it's not falsy, and otherwise, the 10 is going to be returned.
- But now let me introduce the very first logical assignment operator, which is the || assignment operator. So with that operator, we will be able to write the same thing basically in a more concise way. 
```
rest1.numGuests ||= 10;
resy2.numGuests ||= 10;
```
- And basically, this operator assigns a variable to a variable if that variable is currently falsy. So again, exactly what's happening here because this variable is currently falsy and so it will be assigned the value of 10. 
 