## Primitives vs. Objects in Practice

- Let's now create a similar example to what we had in the last video, just so that we can actually see this happening in practice. And just like in a last video, let's start by mutating a primitive value.
- So, let's now use the last name and I'm gonna set it here to Williams. And so that's the initial value of this last name. Then, let's also copy it, and so that's because let's say that this person gets married and decides to change their last name. However, we still want to remember the old name. And so, we say oldLastName is equal to the current last name, at this position of the code. But then we mutate actually the last name to Davis. So, basically when this person gets married, they then change their last name to Davis. 
```
///Primitive types

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//reference types

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage", marriedJessica);
```
- And of course, if we now check out both of them. So, first the last name and then the old last name, then we see that they are in fact different. So, Davis is the new last name. So, the one that we mutated here, and Williams is this old last name that was copied right here in this first line of code, or actually the second line of code. So, here, everything works as we would expect in an intuitive way. Now, remember, that it works this way because each primitive value will simply be saved into its own piece of memory in the stack, - But now, let's do the same thing with an object, which as we already know is a reference value because it is gonna be stored in the heap, and the stack then just keeps a reference to the memory position at which the object is stored in the heap. So, let's create an object called Jessica.
- And so, here we will have a first name, of Jessica, and a last name of Williams. Let's also give her an age of 27 just to make it more complete. And now, let's again say that Jessica will get married and will therefore change her last name. And so this time, let's create a new object for the married Jessica. So, marriedJessica, and it should be equal to Jessica.
- So, we're copying the entire object here. At least that's what it looks like but behind the scenes we are actually just copying the reference, which will then point to the same object, remember that? And so now, as we change the last name on marriedJessica, so, last name let's change that to Davis, but as we already know, this will not give us the result that we expect.
- So, before marriage, let's log this original Jessica object, so to say. And then after marriage, and then here, the marriedJessica object. Giving it a save. And now as we see, we get before the marriage and after the marriage, both the last name of Davis, 
- So, the last name Davis is now also in the original Jessica object and not just in the one that we copied. And now at this point, we already know why this happened. So, just to remember that, it happened because when we attempted to copy the original Jessica object, it did in fact not create a new object in the heap. So, this one again, is not a new object in the heap. It's simply just another variable in the stack, which holds the reference to the original object. 
- So, both of these two variables simply point to exactly the same memory address in the heap. And that's because in the stack, they both hold the same memory address reference. And so of course, it makes sense that if we change a property on marriedJessica, it will also change on Jessica itself. So, again, because they are essentially just two different names for the same thing. Now, this is also the reason why we can change properties in the marriedJessica object, which was declared using a const here. And const is supposed to be for constants. So, for things that we cannot change. However, what actually needs to be constant is the value in the stack. And in this deck, the value only holds the reference, which we are not actually changing. The only thing that we are changing is the underlying object that is stored in the heap. And that is okay to change, that has nothing to do with const or let, all right? That's only about the value in the stack, but if we change something in the heap that has nothing to do with const or let. Now, what we can't do is to assign a completely different object now to marriedJessica. So, for example, we could not say marriedJessica is equal to this new empty object, so that will not work. Because this new object will be stored at a different position in memory, and therefore the reference to that position in memory will have to change here in this variable. And therefore, that does not work. Because that is in the stack and so, since it is a constant, we cannot change that value in the stack. So, we cannot change the value to a new memory address, and therefore, this does not work. If it was a let here, then we could do this, what we have here. But since it's a constant, again, it is not allowed. So, as a conclusion, completely changing the object, so, assigning a new object to it is completely different than simply changing a property as we did here. Okay? So, it's a fundamental difference.