## Destructuring arrays

- In this section we're basically gonna continue learning basic syntax and basic JavaScript features, but now with a focus on more modern JavaScript. And the theme of this section will be to simulate a food delivery application.
- So destructuring is an ESX feature and it's basically a way of unpacking values from an array or an object into separate variables. So in other words destructuring is to break a complex data structure down into a smaller data structure like a variable. So for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way. So let's just actually start with a very simple array. And now if we wanted to retrieve each one into its own variable without destructuring, we would do it like this.
```
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

```
- But now with destructuring we can actually declare all the three variables at the same time.  And now I'm not using A B and C because we already used them. So let's go with X Y, and Z, and then I will simply set that equal to the array.
```
const [x, y, z] = arr;
console.log(x, y, z);

console
2, 3, 4
```
- And as you can see here we get to two results, two, three, and four. So the elements of the array. So basically we write this syntax here and then this will become the first element of the array, this the second and this the third.  And of course this looks like an array, but it's really not. It's just the destructuring assignment. So whenever JavaScript sees this here on the left side of the equal sign, it knows that it should do destructuring. Now, when you do this just don't forget to actually also declare the variables using const. 
- And I also wanted to notice that even though we did destructuring, the original array is of course not affected so we are not destroying the array, we are only destructuring so we are unpacking it.
- And now let's work a little bit with the data from our restaurant. So let's take some elements out of the categories destructuring assignment first and second, and so now you see here that we do not have to take all of the elements out of the array. So this will just take the first and the second. 
- So it will simply follow the order of the elements here and we'll basically only take these two. And so now the array from which we want to extract and that's restaurant.categories.
```
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
}

const [first, second] = restaurant.categories;
console.log(first, second)

console
Italian, Pizzeria
```
- Just to take a look now and indeed we get Italian and pizzeria which are exactly the first two elements of the array.
- But now let's say that we only wanted to take the first category, Well, to do that we simply leave a hole in the destructuring operator, and so now the second element will be skipped to the one that would go here and then this second year simply becomes this third element. And now, so you see it a second now is vegetarian which is element number three alright. And so like this, we don't have to create a variables for all the stuff that we might not even need. So if we only need to take this and this, we just skip the element in the middle okay.
```
const [first, , second];
console.log(first, second);
console
Italian, Vegetarian
```
- And we use destructuring to do a lot of cool things. For example, let's say that the owner of the restaurant now decided to switch the main and the secondary category. So right now the primary is Italian and the secondary is vegetarian but now they wanted to switch it. So let's first change the name here to main and secondary, just to make it a bit more obvious. secondary. And so if we were to like to switch these two variables, then without destructuring, we would have to do it like this.
- We would need to create a temporary variable, and then we would assign one of them, so let's say main, and then we could switch to main. We would say main is equal to the secondary and then secondary is equal to temp because that's where we temporarily stored the value of main.
And that's why we need this temporary variable in the middle. 
```
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
```
- So that's how we would do it, but with destructuring we can make it a lot easier.
  First, we create an array with both of them and the first one is gonna be the secondary and then the second one will be to main. 
  - And indeed, what was Italian is now vegetarian and what was vegetarian is now Italian. 
- Let's now take this out so that we can do it using destructuring. So as I was saying, in order to switch to two variables using destructuring, we would first start by creating a new array with the two variables inverted. So first secondary and then main, and then we can simply distructure them. So main and secondary equals the destructuring of this array. And now we're not using let or const here because we are simply reassigning the values of the two variables. So just like we did here, but now we do not need a temporary variable in the middle. 
```
[main, seconday] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
```
- The result is the same, but this is a lot easier. 
- And another trick with destructuring is that we can have a function, return an array and then we can immediately destruct the result into different variables. And so this basically allows us to return multiple values from a function. And so let's try that and write a function to order food. 
- Let's now add a method and I'm gonna call it order. So this will be a function and it will accept two parameters. one index for the starter menu. So this menu and then one index for the main menu. And then the person will order basically by giving the index for eat of the menus. So something very simple just to illustrate the point here. So let's say starter index and main index. Okay and so we will simply now return the content of the arrays based on the given indexes. So return and so, as I said, we're gonna return an array and then we go to this.starterMenu. And so now we go to the position of the starter index that we pass into the function.
- Then the same with the main menu at the position of the main index that has passed in. So let's call  restaurant.order and let's use two and zero. So we want element number two from the starter menu. So the garlic bread and the number zero from the main menu, which is pizza. So we're gonna receive an array with that.
```
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function(starterIndex, mainIndex) {
       return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]],
    }
}
restaurant.order(2, 0);

console.log(restaurant.order(2, 0));

["Garlic Bread", "Pizza"]
```
- And so now we can simply distructure that. 
```
const [starter, main] = restaurant.order(2, 0);

console.log(starter, main);
["Garlic Bread", "Pizza"]
```
- What happens if we have a nested array, So let's say one array inside another? 
- We simply define two new variables using the destructuring assignment  
```
const nested = [ 2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
2, [5, 6];
```
- And indeed we get the number two and then the array five and six. 
- What if we actually wanted all the individual values? Well then we would essentially have to do destructuring inside of destructuring. 
- Let's create now three variables.
```
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
2, 5, 6;
```
- So that's how nested destructuring works. Basically we need to do destructuring inside of destructuring.   - We can also set default values for the variables when we are extracting them. And that's gonna be very useful in the case that we don't know the length of the array so if we have an array that is shorter than we might think, then we might try to unpack the array in positions that don't even exist. So let me say here just default values and here nested destructuring, so let's now say that we have this array eight and nine, and then we are trying to distracture it. So just pretend that we actually don't know the array alright. And so we might try to take three elements out of the array using again destructuring so let's call them [p, q, r] , and then let's try to lock them all so now here we get undefined as the third one. So this would basically be the same as trying to read the element at position number two of this array but it only has elements at position zero and one. And so therefore we then get undefined. But we can set default values, so that's simply set them all to one and then, our [r] will become one. Great. And if we remove this element.
```
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
8, 9, 1