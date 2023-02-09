## Working with string - part 1

- Over the next few lectures, we will learn how to work with strings and so we're gonna be taking a look at a couple of useful string methods. And in this part of the section, we're gonna work on stuff related to airplanes and airlines.
- So let's now start by creating an airline variable here and I'm using TAP Air Portugal. 
```
const airline = "TAP Air Portugal"
const plane = "A320"
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console:
A
3
2
```
- So as a plane, I'm using a string A320 so just like in arrays, we can get the character of a string at a certain position. So for example, plane at position zero should be A.
- So if we wanted them to be numbers, we would have to convert them and we can do the same directly on a string. So we can just write a string and let's write B727 now, which is a Boeing and so this works the same and we can also read the length property of strings, just like we can in arrays. 
```
console.log(airline.length);
console.log("B737.length");
console:
16
4
```
- And again we can also do that directly on the string.
So again comparing strings to arrays here, strings also have methods and some of them are quite similar to the array methods. So one of them is the index off. So I believe we talked about this one when we talked about a array. And so this one works the same way, so we can get the position in which a certain letter is in the string.
- And so here we now get to position number six and that's where the six here comes from. So you'll see that strings are also zero-based and we could observe that already up here. Now this here will only give us the first occurrence but sometimes we might need the last one. And so then we can use lastIndexOf.  Alright and we can also search for entire words. For example, for the occurrence of Portugal, and so that is at position eight, and this one is actually case sensitive.
```
  console.log(airline.indexOf("r"));
  console.log(airline.lastIndexOf("r"));
  console.log(airline.indexOf("Portugal"));

  console:
  6
  10
  8
```
- what can we actually do with these indexes? Why are they useful? Well, one good use case is to extract part of a string using the **slice method** and a slice method needs indexes as arguments. And so therefore sometimes it can be very useful to first figure out the index of part of a string to then extract that. So let's see how the slice method works.
```
console.log(airline.slice(4));
console.log(4, 7);

console:
Air Portugal
Air
``` 
- And so let's now try to extract just the first word of this string here, but without knowing any of the indexes. And so that's where this IndexOf, and lastIndexOf here become really important. So basically that we do not have to hard code these values here. 
```
console.log(airline.slice(0, airline.indexOf(" ")));

console:
TAP
```
- So let's try to extract that first word Airline.slice and now we need to figure out the index. And now if we want the first word we need to start at zero, but what about the end parameter? Well we want to extract until the first space basically so indeed we get TAP. 
- Now let's do the opposite extracting the last word.
```
console.log(airline.slice(airline.lastIndexOf(" "))) + 1;

console:
Portugal
```
- And now we don't need the end parameter because then if we don't specify it, it will simply extract everything until the end. Okay. But actually now the space is also included here. And so we just need to add plus one, and now we're good. So that's the fundamentals of the slice method.
 but we can do even more with it. So let's go again here. And we can even define a negative argument and then it will start counting from the end. Or actually start extracting from the end. 
 ```
 console.log(airline.slice(-2));

 console:
 al
 ```
