## Maps: Fundamentals

- Understanding maps in JavaScript
A brief intro to the JavaScript map object and the methods and properties we can use to work with it.
A blob of code in a text editor showing the creation of a JavaScript map and some methods.
A big part of our role as web developers can be working out the best kind of data structure to use for the job. Maps were introduced to JavaScript in ES2015 as a new kind of iterable object type that allows us to store ordered collections of key:value pairs.

- This article looks to explain what a map is and to go through some of the various methods and properties available when working with maps.

What is a map?

- A map is a collection of key:value pairs that can use any type of data as a key and maintain the order of its entries.

Maps can be created and initialised using the new Map() syntax:

const myMap = new Map();
This creates an empty map:

Map(0) {}
We can also initialise a map with values by passing in an array of arrays.

const myFruitMap = new Map([['type', 'apple'], ['colour', 'green'], ['name', 'Granny Smith'], ['price', 0.85]]);
Map(4) {"type" => "apple", "colour" => "green", "name" => "Granny Smith", "price" => 0.85}
Adding properties to a map

To add values to a map we use the set() method, which takes two arguments. The first argument is the key, and the second argument is the value.

myMap.set('name', 'Gemma');
myMap.set('occupation', 'Web Developer');
Looking at the map in the console we see the new values and properties:

Map(2) {"name" => "Gemma", "occupation" => "Web Developer"}
This looks similar to an object using string-based keys, but with a map we can use any type of data as a key.

myMap.set(123, 'this is cool');
myMap.set(true, 'why not');
Map(4) {"name" => "Gemma", "occupation" => "Web Developer", 123 => "this is cool", true => "why not"}
Maps do not allow for the duplicate use of key values. In the following example the string one and the number one get treated as unique keys, but when we try to use the numerical one a second time, the first value gets overridden.

const myNumberMap = new Map();
myNumberMap.set(1, 'the number one');
myNumberMap.set('1', 'a string of one');
myNumberMap.set(1, 'this will override the numerical 1 value');
Map(2) {1 => "this will override the numerical 1 value", "1" => "a string of one"}
Working with the properties in a map

The structure of a map means we have access to built-in properties allowing us to work with data.

To demonstrate these methods and properties, let’s initialise a new map.

const myRandomMap = new Map([['animal', 'crocodile'], ['colour', 'purple'], ['country', 'France'], ['number', 527]]);
Map(4) {"animal" => "crocodile", "colour" => "purple", "country" => "France", "number" => 527}
If we want to check whether something exists within our map we have access to the has() method which returns a boolean value.

myRandomMap.has('shape'); // false
myRandomMap.has('colour'); // true
We can use the get() method to retrieve a value by its key.

myRandomMap.get('animal'); // crocodile
We can use the delete() method to remove an item from a map by using its key. This method will return true if an item existed and was deleted, and false if it did not match any value in the map.

myRandomMap.delete('country'); // true
myRandomMap.delete('pineapple'); // false
One of the benefits of using a map over an object is we can work out the size of our map at any time by using the size property. This will count the number of items in the map.

myRandomMap.size; // 4
If we want to return all of the keys in our map we can use the keys() method which will return a MapIterator object.

myRandomMap.keys();
MapIterator {"animal", "colour", "country", "number"}
We can do the same thing with the values() method to access the property values.

myRandomMap.values();
MapIterator {"crocodile", "purple", "France", 527}
If we want both keys and values there is an entries() method available.

myRandomMap.entries();
MapIterator {"animal" => "crocodile", "colour" => "purple", "country" => "France", "number" => 527}
A map can be cleared of all values by using the clear() method.

myRandomMap.clear();
Map(0) {}
Summary

A map is a collection of properties that consist of key:value pairs
A map can use any type of data as a key
The order of properties in a map is maintained; the order we put things into the map is the order they will stay in
We can create and initialise a map by using the new Map() syntax
We can also initialise a map with values in it if we pass in an array of arrays
Maps do not allow for the duplicate use of key values
There are a variety of methods and properties available to us that make working with maps easier, such as get(), clear() and size