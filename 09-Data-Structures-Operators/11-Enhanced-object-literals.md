## Enhanced object literals

- So we have been talking a lot about ES6 features and even newer additions to the language. And so let's continue with that now with yet another enhancement, which is enhanced object literals. And so let's take a closer look at or restaurant object here.
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
```

 So this restaurant object is an object literal, so you can see that because we basically wrote this object literally in our code using this curly braces syntax. So well you get the point, so all of this object here has been written using the object literal syntax. Now ES6 introduced three ways, which make it easier to write object literals like this. And so let's go through them one by one now, first off let's say that we have an object that is outside of this object.
 ```
 const openingHours = openingHours: {
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


    const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: openingHours,
};
```

 - So let's take this one and create a separate object with it.  So before ES6, we would have to write opening hours so that's the property name that we want and then set it equal to opening hours. And so then, basically the restaurant object is restored.
- So you see that, here we still have the opening hours just like before. Now the problem here is and it's not really a problem but it can become annoying is that this property name is exactly the same as the variable name from which we're getting this new object, 
 And so with enhanced object literals you don't need to write this, so we can just do this ES6 enhanced object literals and so what this will do now is to take this opening hours object and put it into the restaurant object and create a property name with exactly that variable name. So as we will reload now, then you will see that it's still here just like before. 
 ```
 const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
```
 