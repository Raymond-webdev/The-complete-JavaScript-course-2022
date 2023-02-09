## Working with strings - Part 2

- Let's continue with some simple string methods. The first two are gonna be for changing the case of a string.
```
const airline = "TAP air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUppercase());

console:
tap air portgal
TAP AIR PORTUGAL
```
- Let's use this on a more practical example to fix the capitalization in a passenger name. 
- So let's say that the passenger, when he checked-in, he misspelled his name, and so it looks like this now. So this needs to be fixed. It should look like this.
```
// Fix capitalization in name

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

console:
Jonas
```
- So in order to fix it, the first step is usually to put everything into lowercase here. So const passengerLower is passenger.toLowerCase like this. Okay. So basically, we already have now this part here. And now, all we need to do is to essentially take the first letter and then the rest of the string and put these two parts back together. So passengerCorrect will be passengerLowerCase. Here, we only need the first letter. 
- We take the first letter by using the index zero. So this one, we now convert to uppercase. 
Now, we simply need to add the rest of the string. So again, we take passengerLower. And then we use the slice that we learned in the last lecture and start at position number one, because remember, that will then go to index one and take everything until the end of the string.
- So here, we then put back together just the first part of the string converted to upper case here, and then the rest of the string that we already had converted to lowercase before. 

- But now another real life example, which is to check a user input email. Now, this will not be really a checking. It will more be a comparing, so comparing emails. So let's say that we have to email of one passenger. 
So hello@jonas.io. But now as the user logs in and accidentally, they do it all wrong and they start with a couple of spaces and then the capitalization is all completely off.
But still this email here is actually still kind of correct and kind of valid. So we can now still compare if these two are kind of the same.
```
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io ";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

console:
hello@jonas.io
```
- So we can now try to convert this one to this one and then check if they are the same, because essentially, again, they are the same  but here it's just a matter of capitalization.
- So when we check user input like this, the first step is usually to convert it to lowercase and then we must also get rid of all the wide space. 
 So we called toLowerCase on this loginEmail, stored it to this variable. And then on that variable, we called the trim method. 
- But we could do this all in one step. So basically, we can replace all of this and let's call this normalizedEmail.
```
const normalizedEmail = loginEmail.toLowercase().trim();
console.log(normalizedEmail);

console:
hello@jonas.io
```
- Next up, let's learn one of the most important thing about strings, which is to replace parts of strings.  - So let's say we have the price of a flight, and that price is for Great Britain. So let's say 288,97 pounds. 
 What's important is that here in Europe, we use the comma as a decimal separator, unlike in the US where you use the period.  So that's actually what we're gonna do now. We want to compute the price in US. 
- So for that, we will need to replace the pound with the dollar sign and the coma with the period. So that's easy enough. PriceGreatBritain.replace. Now, here two arguments. The first one is the one we want to replace. And let's start here with the pound sign. The second argument is the string that will replace the first one.
- Now, we need to replace also the coma with the period. So we could create another variable now, but instead we will do chaining again just like we did before, and for the same reason, because this returns a string. So on that string, we will immediately call the next replace method. Now, we are replacing the comma with the dot.
- So indeed now, we have the price in US
```
const priceGB = 288,97£;
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

console:
288.97$
```
- But we can also replace entire words, not just single characters. So let's create an announcement that you would typically hear on the airport. "Like all passengers come to boarding door 23. Boarding door 23!" - However, usually it is called gate and not door. So let's replace that and lock the result to the console immediately, because just like the other method that we studied, replace also creates a brand new string. It doesn't mutate the original one. 
- So we need to log the actual result to the console. So replace door with gate.
```
const announcement = "All passengers come to the boarding door 23. Boarding door 23!"
console.log(announcement.replaceAll("door", "gate"));

console:
All passengers come to the boarding gate 23. Boarding gate 23!"
```
 
- Now, as a final topic of this lecture, there are three simple methods that return booleans. 
- So let's create a new plane here, and that's gonna be the A320neo.
```
const plane = "A320neo";

console.log(plane.includes("A320"));
true

console.log(plane.includes(Boeing));
false

console.log(plane.startWith("air"));
false

if (plane.startsWith("Airbus") && plane.endWith("neo")) {
    console.log("Part of the NEW Airbus family");
}
```
 