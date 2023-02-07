## The noullish Coaleshing Operator (??)

- Let's now learn about the new operator with the funny name of nullish coalescing operator. So in the last video, we used the OR operator to set a default value in case that the first value was a falsy value.
- So if we bring back that code from the last lecture actually and so let's again remember what happens here, which is when we set numGuests to zero, then JavaScript will still take this default value here and assign it to guests because zero is a falsy value now, and so therefore, we go to the second operand. 
```
//restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
console:
10

//Nullish: null and undefined (NOT 0 or ")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
console:
0
```
- However, fortunately for us, there is a very good solution to this, and that's the new operator with the very weird name of nullish coalescing operator. It's an operator that was introduced in ES2020, and it works like this. 
- So it works almost the same way as the OR operator, really almost the same, but it will fix the error here. So let's see that it does, and then I'll explain to you why that is. All right, and now indeed, we get zero. So we get the real value that is actually here. And now if we take it off, only then we get 10, which is the default value that we want. 
So why does this work? Well, it is because the nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values. And nullish values are null and undefined. That's it. It does not include a zero or the empty string. So basically, for the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well. 
- But again, this operator does work with the principle of nullish values. And so all the nullish values will short circuit the evaluation here. Okay, so only if this was null or undefined, only then the second operand here would be executed and returned. 
- And so right now, that's the case as number of guests does not exist, so we commented it out here. And so now it is undefined, and so only then the evaluation continues. But again, as we put it back, it now is zero, and zero is not a nullish value. And therefore, the evaluation here is short circuited, and immediately, this first non-nullish value is returned. 