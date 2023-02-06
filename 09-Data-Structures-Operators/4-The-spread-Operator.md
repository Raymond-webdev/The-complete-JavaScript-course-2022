## The spread operator(...)

- Let's now talk about the amazing spread operator. So we can use the spread operator to basically expand an array into all its elements. So basically unpacking all the array elements at one. So let's say that we have an array, so seven, eight, nine. And now we want to create a new array based one this array but with some new elements at the beginning. 
- We would need to loop over this array, or even worse, do it manually.
- Let's call it the "badNewArray" so if we wanted to add one and two to the beginning of this array, we would have to write one, two, and then each of these elements.
```
const arr = [7, 8, 9];
const BadNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);
```
- Since ES6, do it in a much better way using the spread operator. So with the spread operator, it's gonna work like this. So let's create a new array And then, again, we use one, two, and then we use the spread operator, which is dot dot dot, to basically expand this array into all of its individual elements.
```
const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArr);
```
- So what the spread operator does is to basically take all the values out of this array, and then write them individually as if we wrote seven, eight, nine here manually. 
- And so when we do this, we then get seven, eight, nine, individually here, represented in this new array. So what this means is that we can use the spread operator whenever we would otherwise write multiple values separated by commas.
- So that's the first situation in which it's very useful to expand an array.
- And the second situation is when we pass arguments into functions. So, for example, let's say that we wanted to actually log the individual elements of this newArray. 
 So in this example, we will create an array with one more food item in the main menu array. So that main menu is here at **restaurant.main** menu, and so basically we want to create a new menu here.
 ```
 const newMenu = [...restaurant.mainMenu, "Gnocci"];
 console.log(newMenu);
 ["Pizza", "Pasta", "Risotto", "Gnocci"];
 ```

 - Now you might have noticed that the spread operator is actually a bit similar to destructuring, because it also helps us get elements out of arrays. Now, the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables and as a consequence, we can only use it in places where we would otherwise write values separated by commas.

 ### Copy array

 - Next, let's learn about two important use cases of the spread operator, which is to create shallow copies of arrays, and to merge two arrays together. So let's say copy array, and so let's simply create a copy of the main menu. So main menu copy, and so let's write a new array, and into that new array, we will put all the elements that are currently in the main menu.
 - So here we just created a shallow copy of this array.
 ```
 const mainMenuCopy = [...restaurant.mainMenu];
```

### Join 2 arrays

- Now to join two arrays together, so join two arrays or more, of course, we can use the same technique.
```
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu ];
console.log(menu);
```
 - So the spread operator works on arrays, but that's not entirely true, because actually, the spread operator works on all so-called iterables.
 - Iterables: arrays, strings, maps, sets but not objects.
 - Now anyway, since strings are also iterables, that means that we can use the spread operator on a string, as well. 
 ```
 const str = "Jonas";
 const letters = [...str];
 console.log(letters);
 ["J", "o", "n", "a", "s"];
 ```
