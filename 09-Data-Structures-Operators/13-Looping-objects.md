## Looping objects: Object Keys, Values and Entries

- In this chapter, we are going to cover Object.keys, values, and entries. 

- These methods are universal and are used for data structures. Every time after creating a data structure, they should also be implemented. They are mainly used for Map, Set, and Array.

 -Similar methods are supported by plain objects, as well. Only the syntax differs a little.

- Defining Object.keys, values, and entries as a rule, for plain objects, you can use the methods below:

For returning an array of key, the Object.keys(obj) method is used.
For returning an array of values, the Object.values(obj) method is used.
For returning an array of [key, value] pair, the Object.entries(obj) method is used.
There are significant differences compared to Map. Here we will cover them, as well.

The first distinction is that here we need to call Object.keys(obj) but not obj.keys().

The primary reason is versatility. Objects are considered the root of all JavaScript complex structures.

So, having an object such as data, which can perform its own data.values() method. However, you may call Object.values(data) on that object, as well. Another essential difference is that Object.* methods may return real arrays, not iterabales.

Let’s consider the following example:
```
let user = {
  name: "Jane",
  age: 41
};
console.log(user.name); // Jane
console.log(user.age); // 41
```
- So, in the example above, we have the following:

Object.keys(user) = ["name", "age"]
Object.values(user) = ["Jack", 35]
Object.entries(user) = [ ["name","Jack"], ["age",35] ]
For looping over property values, you can use Object.values like this:
```
let user = {
  name: "Jane",
  age: 41
};
for (let value of Object.values(user)) {
  console.log(value); // Jane, then 41
}
```