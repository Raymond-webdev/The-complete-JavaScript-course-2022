## Maps: Iteration

For iterating over a Map, we can use the following javascript constructs:

for..of
forEach()
Let's create a Map first to loop over from the knowledge gained in our previous article.

let map = new Map()

map.set("one", "first element");
map.set("two", "second element");
map.set(3, "third element");
Iterating map with for..of
We can use for..of to iterate a Map in Javascript.

for (let [key, value] of map) {
console.log(key + " = " + value);
}

//output
// one = first element
// two = second element
// 3 = third element
Map also provides these three methods, which comes in handy while iterating over a Map.

map.keys() - Returns an iterable for keys
map.values() - Returns an iterable for values
map.entries() - Returns an iterable of key,value
for (let key of map.keys()) {
	console.log(key);
}

// output
// one
// two
// 3

for (let value of map.values()){
	console.log(value);
}

// output
// first element
// second element
// third element

for (let [key, value] of  map.entries()) {
	console.log(key + " = " + value)
}

//output
// one = first element
// two = second element
// 3 = third element
Iterating Map with forEach()
We can also iterate through a Map using forEach().

map.forEach(function(value, key) {
	console.log(key + " = " + value);
})

//output
// one = first element
// two = second element
// 3 = third element
Map preserves the order in which values are inserted. So, while iterating over a Map, elements will be in the same order in which they are inserted.

Summary
To iterate over a Map, we can use for..of and forEach() loop constructs.
Map provides three methods that return iterable: map.keys(), map.values() and map.entries().
Iteration over Maps is always in insertion order.
