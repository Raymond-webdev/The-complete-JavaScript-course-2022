### JavaScript has some built in functions that we can basically apply directly on arrays and these are called methods.
### We can think of methods as array operations.
### Let's now learn some useful array methods:

1. The push method:
- Push is essentially a function that we call directly on the variable and add an element at the end of the array:
```
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends); - ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); - 4
```
2. The unshift method:
- It's a method that will add element to the beginning of the array:
```
const friends = ["Michael", "Steven", "Peter"];
friends.unshift("John"); - ["John", "Michael", "Steven", "Peter"]
```

3. The pop method:
- It's the opposite of the push method and will remove the last element of the array:
```
const friends = ["Michael", "Steven", "Peter"];
friends.pop(); //Last element will be removed
const popped = friends.pop();
console.log(popped); - ["Michael", "Steven"]
console.log(friends);
```

4. The shift method:
- It will remove an element at the beginning of the array.
```
const friends = ["Michael", "Steven", "Peter"];
friends.shift(); - First element will be removed
console.log(friends); ["Steven", "Peter"]
```
5. The indexOf method is a very useful method that tells us in which position a certain element is in the array.
```
const friends = ["Michael", "Steven", "Peter"];
console.log(friends.indexOf("Steven")); // 1
```
6. The includes method will simply return "true" if the element is in the array and "false" if it's not. 
// first console.log statement will return true.
// second console.log statement will return false.
```
const friends = ["Michael", "Steven", "Peter"];
console.log(friends.include("Steven")) 
console.log(friends.include("Bob")) 
```
- This method uses strict equality for this check.
  Let's say if we would push another value to the array, **(friends.push(23);)** then checked for 23 the string **console.log(friends.include("23"))** it will just not work and that's because it is testing with strict equality.
- We can also create a conditional with the "includes" method:
```
 if(friends.includes("Steven")) {
     console.log("You have a friend called Steven");
 }
 ```