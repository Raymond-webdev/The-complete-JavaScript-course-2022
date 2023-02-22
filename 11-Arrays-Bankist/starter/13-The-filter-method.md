## The filter method

And so in this case, we simply push it there. So we push the current movement. And so let's take a look now. And, as expected we get the same result. And so you could again ask, what is the big difference here? Like, what's the big deal and why not just use the four loop for everything. And the reason for that is again the push that exists in JavaScript for using more functional code, like this. But there's also a more practical implication here. And that's because we can actually chain all of these methods together. So, basically use them all one after another to build a big final result. So, a bit similar in fact to what we did here in our application, right here. But here we mixed string methods with array methods, but later on we will do, like big chains, only with array methods and that would be completely impossible using the four loop. So, that's another big advantage of using the methods instead of the regular four loop. Now, anyway I have just another small challenge for you here which is to create an array of the withdrawals. So, withdrawals like this. So I want you to create this array without looking at the code we already wrote. And so the withdrawals should only include the negative numbers too. So pause the video now for a minute, and please try to write this code on your own. Okay, so hopefully you did that. And so, it is movements and again dot filter. And now I will use an arrow function here. So I will leave this one with the regular one and now an arrow function. Okay. And now, more of or less than zero, and that's it. This is our condition and never forget that this one is actually returned here. So again, it is like having return written here. And so this is why this works lets log it to the console and yeah, only the negative numbers remain now. All the positive ones get the result of false here in this condition. And so therefore, they were not included in the withdrawals array. And again, these callback function here also get access to the current index and the whole array.


```
const movements = [1, -2, 3 -5, -34, 45, -56];
const withdrawals = movements.filter(function(mov){
    return mov < 0;
})

const withdrawals = movements.filter(mov => mov < 0);
 
 const deposits = [];
for (const move of movements) 
if(mov < 0) deposits.push(mov);
```