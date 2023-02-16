## Simple array methods

- Let's begin this section with a couple of very simple and very easy to understand array methods, just to expand our array toolkit a little bit more. 
- Now before we start, let's quickly talk about why arrays do actually have methods. Well, remember that methods are simply functions that we can call on objects. So basically, they are functions attached to objects. So if we have array methods, that means that arrays themselves are also objects. And so these array methods are simply functions that are attached to all arrays that we create in JavaScript. 
- In this lecture, we're gonna start by learning some very simple tools that we can use on arrays. So let's start by defining a simple test array that we can work with. And I'll make it as simple as possible just with these letters, because that will help us understand some of the things we're gonna do here.
```
let arr = ["a", "b", "c", "d", "e"];
```
- The first method we're gonna talk about is the slice method and this one is very similar to the slice method that's available on strings. So with the slice method, we can extract part of any array, but without changing the original array. So essentially, we can take a slice of an array. And so that's why it's called slice. 
```
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

console:
["c", "d", "e"]
["c", "d"]
```
- So array.slice, and now just like in strings, we have the begin parameter. And so this is the index at which we will start extracting. So when we say two here, we should start extracting here at C, and then all the way to the end. And then this slice method will return a new array. And so we need to log that to the console in order to actually see it, okay. So as I said, this does not mutate the original arr, array. Instead it returns a new array so a copy of the array, but only with the extracted parts.
- And so now we indeed get this array, which is a slice of the original array starting at position number two and of course, we can also define the end parameter. So when we write two and four then let's see the result here. And so what this means is that just like in strings, the end parameter here is not included in the output. So two to four is really just two and three so the length of the output array right here will be the end parameter minus the beginning one. And so that's exactly the length we get here.
- Then next, again, just like in strings, we can define a negative begin parameter, and then it will start to copy from the end of the array. So minus one will basically take the last two elements of the array, so D and E. And so with this, it's pretty easy to simply get the last element of any array. 
```
console.log(arr.slice(-2));
console.log(arr.slice(-1));

console:
["d", "e"]
["e"]
```
 And now to make this complete, we can also use a negative index as the end parameter. So let's start extracting at position number one, until minus two, basically. So let's see if that returns B and C. And that's because it now starts extracting at position one, which is here, and it extracts everything except the last two here. So that's what the minus two here means. 
 ```
 console.log(arr.slice(1, -2));

 console:
 ["b", "c"]
 ```
 Now finally, we can use the slice method to simply create a shallow copy of any array. So to do that, we simply call it without any arguments at all. And then indeed, we get here the exact same array. 
 ```
 console.log(arr.slice());

 console:
 ["a", "b", "c", "d", "e"]
 ```
- Next up is a method with a very similar name, which is called **splice**. And a splice method works in almost the same way as slice. But the fundamental difference is that it does actually change the original array. So it mutates that array. So let's again, log the result to the console anyway. But now, we use splice. And then with the same argument, as we use before here, and so the result here, looks exactly the same. So this one here is the same as this first one but now, watch what happened to our original array, and we see that all that remains here in our original array is the first two elements.
```
console.log(arr.splice(2));
console.log(arr);

console:
["c", "d", "e"]
["a", "b"]
```
- And so now the extracted elements are actually gone from the original array. So splice deleted them. And so what we can see is that splice actually does mutate the original array, so it takes part of the array and returns it and then the original array itself loses this part that was extracted.
- Now in practice, most of the time the value that the splice method returns, doesn't even interest us. All we are usually interested in is to just delete one or more elements from an array using splice. And one pretty common use case is to simply remove the last element of an array. 
```
arr.splice(-1);
console.log(arr);

console:
["a", "b", "c", "d"]
```

-  And so indeed, as we log here arr to the console, it is the original array, except for the last element, which was e. So that's exactly what we did here. 
- And as always, in case you want to learn more about any particular method, for example, you can always use the MDN documentation. So let's say **MDN array splice**.
- Next up, we're gonna talk about reverse. So that's a very simple one.
- Let's also create a new array and here, we will have five more letters of the alphabet but this time, in a wrong order.
```
const arr2 = ["j", "i", "h", "g", "f"] 
console.log(arr2.reverse());

console:
["f", "g", "h", "i", "j"]
```
- So let's say for some reason, we are working with this array and we need to reverse it. And so that's exactly what we use reverse for.
- So arr2.reverse and indeed, it now returns the reverse array but now what's important to note here is the fact that the reverse method does actually mutate the original array. So you see, as we log in the original, it is now reversed too. So this one here does mutate the array. So that's important to keep in mind. 
- And that's because this is a very important characteristic of each of these methods. That's because in a certain situation, we might not want to mutate the original array, and then we cannot use any of these methods. 
- Next up, is the **concat method**. And so this one is used to concatenate two arrays. So let's create a variable called letters. And letters will be the result of calling the concat method on array. And here, we have to specify the second array.
```
const letter = arr.concat(arr2);
console.log(letters);

console:
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
```
- And now we have the 10 first letters of the alphabet here. So the first array will be the one on which the method is called and the second one is the one that we pass into the concat method.
- We could simply also do this, 
```
console.log([...arr, ...arr2]);
```
- This gives us the exact same result and it also does not mutate any of the involved arrays. So just like concat, which also doesn't mutate the original array here,  
- And finally, just the join method so let's just join all the letters of the alphabet together that we have here in our array by using this separator - .
```
console.log(letter.join(" - "));

console:
a - b - c - d - e - f - g - h - i - j
```
 