## Optional chaining (?.)

- Let's learn about an even newer feature of objects and also of arrays which is called **optional chaining**. And this one is really amazing. So, let's say that we wanted to get the opening hours of our restaurant for Monday. 
```
console.log(restaurant.openingHours.mon.open);
console:
Undefined
```

- So let's quickly check that. So restaurant.openingHours, and then since we are checking for Monday, let's try .mon. So which could stand for Monday. 
- Now, actually this property doesn't exist. So you see that this is undefined, right? But let's pretend that we do not know whether this restaurant opens on Monday or not. And that could be the case. For example if this data came from a real web service So a web API. And in their service there could be multiple restaurants and not all of them would open on Monday. And so we had no way of knowing if this particular restaurant would open on Monday or not. 
- But now let's go even further because we actually want to know exactly the hour on which the restaurant opens on Monday. So let's see what we get. And now we do actually get an error because the results of this was undefined. And then undefined.open is really an error. So that's the error that we get here. So in order to avoid this error, we would first have to check if this here actually exists. 
- we could also use a logical operator as we already learned but this here is a bit more readable, so if we did the same for let's say Friday, then we already know that Friday exists. And so this would then work and it would be 11. But let's focus here on Monday, which is the day that doesn't exist. And so now at least we got rid of our error here. So it's not a big deal to having to add this logic here but it does make our code a little bit more unreadable and more messy. However, this is checking just for one property. So just for Monday. But now imagine that opening hours here would also be optional. Or in other words that maybe the restaurant object can also not have opening hours. So, in this case, we would have to check for both.
```
if (restaurant.openingHours && restaurant.openingHours.mon)
   cosnole.log(restauran.openingHours.mon.open)
```
 So we would have to do if restaurant.openingHours exists and if restaurants.openingHours.mon exists while only then unlock the opening hours to the console. And this can get out of hand pretty quickly when we have deeply nested objects with lots of optional properties. And sometimes that happens in the real world. 
 - And so therefore ES2020 introduced a great solution for this, which is a feature called **optional chaining**. And with optional chaining, if a certain property does not exist, then undefined is returned immediately. And so that will then avoid that kind of error that we saw earlier. And this is how it works. So let's recreate it now with optional chaining.
 ```
 console.log(restaurant.openingHours.mon?.open);
 ```
- So now we can say restaurant.openingHours.mon and now here is the optional chaining operator. So instead of just a dot, we use question mark, dot and then open.  So here is how optional chaining works. So only if the property that is before this question mark here. So only if Monday exists, then this open property will be read from there. 
- But if not, then immediately undefined will be returned. And exists here actually means the nullish concept that we already talked before. So, a property exists if it's not null and not undefined.  So if it's zero or the empty string, then it still exists.
  
- Let's move to the next topic, which is on methods. So optional chaining does indeed also work for calling methods. So, essentially we can check if a method actually exists before we call it.
```
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
```

- So we use ?. and if it does exist, then we can call it, and then we should always use together the nullish coalescing operator so in this case, the method does actually exist. And so here we get the expected result. When we try to call a method that doesn't exist. So let's say orderRisotto, and so we never wrote a method for that, now we get method does not exist. And so just like before this optional chaining operator will check if orderRisotto actually exists. And if it doesn't, well then it will immediately return undefined. 
```
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
```
And so all of this then returns undefined. And so here in the nullish coalescing operator, we immediately go to that second operant then that's the result of this whole operation. 

- And finally, optional chaining even works on arrays. So basically we can use it to check if an array is empty. So let's simply create a users array in which we can put a couple of user objects.
```
const users = [{name: "Jonas", email: "hello@jonas.io"}];
console.log(users[0?.name ?? "User array empty]);
```
  And we get Jonas. And so again, this optional chaining here tests if the value on the left does exist. So users zero. So if it was empty, so users, so like this, then we get user array empty. 