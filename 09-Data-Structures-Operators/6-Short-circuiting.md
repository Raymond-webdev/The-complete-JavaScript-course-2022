## Short circuiting (&& and ||)

- Let's go back to two logical operators that we already used before, but we didn't use their full potential yet. And I'm talking about the AND(&&) operator and the OR(||) operator, and how we can use them for something called short circuiting. So up until this point, we have used logical operators only to combine Boolean values but the truth is that we can do a lot more with the AND and OR operators. 
So let's start with the OR operator here. 
```
console.log(3 || "Jonas");
```
- So that's something that we didn't do before, which is to use basically non Boolean values here as the operands and the result is three. And so that means that the results of the OR operator doesn't always have to be a Boolean. 
- So there are three properties that about logical operators. So first, they can use any data type, they can return any data type and they do something called short-circuiting, or as we also call it short circuit evaluation.
- So in fact, here we used two values that are not Booleans and it then returned a value that was not a Boolean. And now about short circuiting, in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value. So that's exactly what we see here with the three which is a truthy value. 
- So again, if the first operand is truthy here in the OR operator, then the other operand will not even be evaluated. So JavaScript will not even take a look at it. And so that's what we mean with short circuiting. - And now let's do some more:
```
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
```
- Let's use the empty string or Jonas now. Then let's say, true or zero, and then let's say undefined or null. 
- So the first result of this one here is Jonas. And so that's because the double quotes is a falsy value. And so then, the second operand will actually also be evaluated, and that's Jonas and it will then be returned. And so here we see again that the result of the OR operator doesn't have to be a Boolean. It will simply return the truthy value here. 
- Next up we have true or zero. And so this first value here is truthy, and in fact, it's even true, and so therefore that will simply be the result of the operator. And so that's what we see here.
- And then, here we have undefined or null, and as you already know, undefined is a falsy value, and so we then go to the second operand, so there is no short-circuiting, and so that's then the one that's gonna be returned. So here we see null, and that happens even though null is also a falsy value.

### The && operator

 - Basically when it comes to short circuit evaluation, the AND operator works in the exact opposite way of the OR operator. 
 ```
 console.log(0 && "Jonas");
 console.log(7 && "Jonas");
 console.log("Hello" && 23 && null && "Jonas");

 console:
 0
 Jonas
 null
 ```
 - And so what this means is that the AND operator short circuits, when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand. So again, that's exactly the opposite of what happens with the OR operator, which short circuits when the first operator is true. 
 So let's now set it to a true value here, or actually a truthy value. And then at this case, Jonas is actually returned. So when it is truthy, it means that the evaluation continues and then simply the last value is returned. 
 - And once again, this makes sense if we think about it. So the AND operator is only true if all the operands are true. And so, if the first one here is false, then it means that the entire result of the AND operation will already be false anyway. And so there is no need to even look at any of the other operands. 
 
 