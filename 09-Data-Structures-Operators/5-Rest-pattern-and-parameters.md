## rest pattern and parameters

- Moving on let's now talk about the rest pattern and also rest parameters and the rest pattern looks exactly like the spread operator. So it has the same syntax with the three dots but it actually does the opposite of the spread operator. 
- So we used the spread operator to build new arrays or to pass multiple values into a function so those are the two use cases of the spread operator and in both cases, we use the spread operator to expand an array into individual elements.
- Now, the rest pattern uses the exact same syntax however, to collect multiple elements and condense them into an array so that's really the opposite of spread.
- The spread operator is to unpack an array while rest is to pack elements into an array  
- So we wanted to create a new array based on an existing, array and so we used the spread operator to expand that. So here we are still using the spread syntax and we know that this is the spread syntax because we are using it on the right hand side of the assignment operator, so of the equal sign.
- However, we can also use it on the left hand side of the assignment operator together with destructuring. 
```
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST becauseon LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others)
```
- Well, just like before the first and the second elements become this first and second variables, but then here comes the **rest pattern** and so it's called **rest** because it will take the rest of the elements. So the remaining elements of the array and then put them into a new array and in this case, we called this array others. 
- So the rest pattern basically collects the elements that are unused in the destructuring assignment. 
- The rest pattern always must be the last in the destructuring assignment because otherwise how will JavaScript know until when it should collect the rest of the array, 
- Also for the same reason there can only ever be one rest in any destructuring assignment.

- Now let's do the same in objects because it also works indeed in objects. So the difference then of course, is that the remaining elements will be collected into a new object and not into a new array.
- So let's now work here with our **opening hours** and let's say that we want to select only Saturday here and then the rest should go into a new object which are the weekdays.
- So Saturday is weekend and Friday and Thursday are the weekdays and so basically we want to create an object only with these two. So only for the week days and now that is easy to do all we need to do is to basically take out a Saturday into its own variable and then we simply collect the rest into a new object and this we can call weekdays.
```
const {sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
```
- It is an object only containing Friday and Thursday and again, that's because we already took Saturday into its own variable before and so this then collected the rest of the properties into its own new object.  So this whole first part is for destructuring and then the second part will be about functions basically. 

### Functions

- The second use case of the spread operator was to pass multiple arguments into a function all at the same time.  So I'm gonna call it "add" and so in a real adding function we wanna take an arbitrary amount of arguments and simply add all of them together.  
- So again, any arbitrary amount of arguments should work for this function so we will use the rest pattern and in this case, it is actually called rest parameters so let's use the rest syntax and then let's call this argument numbers and then log this numbers to the console.
```
const add = functions (...numbers) {
    console.log(numbers);

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

console
[2, 3]
[5, 3, 7, 2]
[8, 2, 5, 3, 2, 1, 4]
}
```
 - the rest syntax is taking multiple numbers or multiple values and then packs them all into one array. So, once more it is doing the opposite of the spread operator so with the spread operator we expand with the rest syntax we compress so here it's called rest arguments.
  