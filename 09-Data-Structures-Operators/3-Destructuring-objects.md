## Desctructuring objects

So we talked about these destructuring arrays, but we can also destructure objects. 
- let's now talk about object destructuring and so to do that, we use the curly braces to destructure then all we have to do is to provide the variable names that exactly match the property names that we want to retrieve from the object. So the obvious choice here of object to destructure, is restaurant. So let's take the name, categories and opening hours. So again let's start with const in order to actually define some variable names. And now as I said, we need to write the exact property names here to now extract variables from this object. Now, since in an object, the order of elements does not matter, we don't need to manually skip elements like we did in an array.
```
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
```

- So that's the fundamentals of destructuring objects. And once again, this is an extremely useful addition to the language. Especially when we deal with the result of an API call, which basically means to get data from another web application, like weather data or data about movies or something like that and this data usually comes in the form of objects basically. And then destructuring is really a lifesaver. It allows us to write a lot less code. 
- But now what if we wanted the variable names to be different from the property names, we can do it like this. Now, of course we still need to reference the property names like we did before, otherwise JavaScript has no way of knowing what we actually want. So let's write name again, but then we can use the colon and specify a new name. 
```
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);
```
- And so the variables that we now created are called restaurantName, hours and tags. 
- And so you see that these three are actually the exact same name, but we were able to give them new variable names.  So like an object that we get from somewhere else, for example, an API call, it can be really useful to have default values for the case that we're trying to read a property that does not exist on the object. So usually then we get an undefined.
- For example if we were trying to say restaurant.menu, this would be undefined because there is no property called menu. We have starterMenu and mainMenu, but not just menu and so we can set default values just like we can actually in arrays. So let's say that we are trying to destructuring the menu. And so we use equal to set a default value.
- And then we can do the same with the starter menu, for example. And then we can even combine this syntax here with what we did previously. 
- So let's say that we're trying to retrieve the starterMenu. So this one, but we then want to give it another name. So starterMenu, and we want to call it just starters. And we also want to give it a default value in case it doesn't exist. 
- So in this case, just an empty array. Now, in this case, it actually does exist. So starterMenu does exist. And so therefore this default value will not apply, but it should apply to menu. 
- So here indeed, we get the default value, which is the empty array. And here we get the starter menu. And without this, we would then get undefined.
```
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
```
- And so this is a nice way of setting a default value. And once again, keep in mind that this is especially helpful when we do not have our data hard-coded like we have it here. So this is just hard-coded data in our application but in the real world, we usually get the data from somewhere else. And then we might not always know how exactly the data looks like. And so then it's useful to set defaults like this.

### Mutating variables

 - Next up, we need to talk about mutating variables while destructuring objects. So we did that before with arrays when we were switching variables.
```
// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({a, b } = obj);
console.log(a, b);
```
- So basically we did override these two initial variables, but in order to do it, we had to wrap this destructuring assignment into parenthesis. 

### Nested objects
```
const {fri: {open, close}} = openingHours;
console.log(open, close);
comsole
11, 23
```
- And so now we need to talk about nested objects, just like we did with nested arrays. So let's say we wanted to create two variables, open and close. And these should contain the open and close hours for "Friday", so we see that opening hours is an object. And then in that object, we have another object. So this "Friday" is an object inside an object, which itself is inside the restaurant object. 
- Now the opening hours is already an object here that we have already stored in a variable. So that's the object that we're gonna destructure.  and now we want to retrieve Friday we actually want two variables, one called open and the other one called close. And this is how that works. So we know that this is an object, and now we can further destructure that object using this syntax. So the colon, and then again, the exact property name of that inner object. 
- And so indeed now we get or numbers, 11 and 23. 

  