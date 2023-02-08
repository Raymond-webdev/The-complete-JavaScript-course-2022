## Sets

- In the past, JavaScript has always had very little built-in data structures. So basically, we only had objects and arrays. But in ES6, two more data structures were finally introduced and these are sets and maps. 
- So these are pretty common data structures that already exists in other programming languages, and now, they also exist in JavaScript. So in this lecture, let's learn all about sets. And a set is basically just a collection of unique values. So that means that a set can never have any duplicates. And that property makes them useful in certain situations.
 So let's create a new set here. Let's call it **ordersSet**.
 - to create a new set, we write new set and then here, we need to pass in an iterable. And the most common iterable here is an array. So let's create an array with a couple of strings now. Let's say pasta, pizza, then pizza again, then risotto.
 ```
 const orderSet = new Set([
    "Pasta",
    "Pizza",
    "Pizza",
    "Risotto",
    "Pasta",
    "Pizza"
 ]);
 console.log(ordersSet);
 console:
 Set(3) {"Pasta", "Pizza", "Risotto"}
```
- Now, here we clearly see some duplicate strings. 
 - Here, we can see it has a size of three. And the only values that are in there are pasta, pizza and risotto so all the duplicates are actually gone. 
 - Now, also we can see that a set kind of looks similar to an array, right. So there are no key value pairs, it's just a bunch of values grouped together, in this case into a set. And just like arrays, sets are also iterables. Now, of course a set is still very different from an array so first, because its elements are unique and second, because the order of elements in the set is irrelevant.
- So first off, we can get the size of a set by using the .size. 
- And just note, how it is actually called size and to not length like it is in arrays. 
```
console.log(ordersSet.size)
```
- Next, we can check if a certain element is in a set with .has And so this is actually a method. And so let's check if pizza is in there. And let's check if bread is in there. So true and false. And that's exactly as we expect it. And so, comparing again two arrays, this has method is similar to the includes method in arrays. 
- Next step, we can also add new elements to a set so let's say that now someone ordered garlic bread. And let's say that is actually happened twice. So, what do you think that the set will look like now?
```
orderSet.add(garlic bread);
orderSet.add(garlic bread);
```
- So orderSet. And so the garlic bread got added. But only, of course, one of them, because again, the set has to be unique. And so the second one was basically ignored.
- Finally, we can also delete elements. 
```
orderSet.delete("Risotto);
```
Finally, there is actually one more method here but it's not that important. All we can use it for is to basically delete all of the elements of the set.
```
orderSet.clear();
```
