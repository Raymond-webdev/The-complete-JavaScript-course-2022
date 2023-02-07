## Looping arrays: The for-of loop

- Let's now talk about a new way of looping over arrays, which was introduced in ES6. And that's the **for-of loop**. And let's say we wanted to loop over our entire menu here. So let's start by creating again, the array with the entire menu. 
- And for that we expand restaurant.starter menu and restaurant.main menu. 
 And this is how it works. We still write for and then we create a variable here, let's just call it item for now and then of menu. And then we can log to the console simply this item. 
 ```
 const menu = [...restaurnat.starterMenu, ...restaurant.mainMenu];
 for (const item of menu) console.log(item);
 ```

 - So indeed we got all our elements here now, individually logged to the console. So this **for-of loop**, which is called for-of because it is for and then item of the menu.
 - So this loop will automatically loop over the entire array and in each iteration, it will give us access to the current array element, which we can specify here. So in this case it's called the item, but of course we could call it anything that we want.
 - And so when we simply log the current item down to the console, well, then this is here what we get. Simply each element logged one by one. And that's because again, the item variable is always the current element in each iteration. And also just like in the if else statement, we don't need to create a code block when we only have one statement here to execute.
 - So that's pretty simple, but it's a really nice level of obstructing over the regular for loop. So we can do the same thing with this one, but without having to worry about all the underlying details such as counters and conditions. What's also great about the for-of loop, is that we can still use the continue and break keywords. 
 - But now what if we also wanted the current index and not just the current element? Well, in the for-of loop, it's actually a bit of a pain when we need that index, because originally the for-of loop was really just meant to give you the current element. However, you can get both and you will have to do it like this. 
 - So for and then again, let's just call it item, but now instead of just menu, we now need to call the entries, a method on this array. So entries and then let's take a look at the item. And so as you see, each of the item is now actually an array with the index in the array element itself.
 ```
 for (const item of menu.entries()){
    console.log(`${item[0] + 1}: ${item[1]}`);
 }
 ```
  